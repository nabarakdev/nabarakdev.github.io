import test from "node:test";
import assert from "node:assert/strict";
import { SearchController } from "./search.mjs";
function deferred() {
  let resolve, reject;
  const promise = new Promise((r, j) => {
    resolve = r;
    reject = j;
  });
  return { promise, resolve, reject };
}
test("a single completed query updates results", async () => {
  const controller = new SearchController(async (query) => [query]);
  await controller.search("current");
  assert.deepEqual(controller.results, ["current"]);
});
test("an older response cannot overwrite the latest response", async () => {
  const old = deferred(),
    latest = deferred();
  const controller = new SearchController((q) =>
    q === "old" ? old.promise : latest.promise,
  );
  const a = controller.search("old"),
    b = controller.search("latest");
  latest.resolve(["latest"]);
  await b;
  old.resolve(["old"]);
  await a;
  assert.deepEqual(controller.results, ["latest"]);
});
test("a superseded request cannot publish while the latest is pending", async () => {
  const old = deferred(),
    latest = deferred();
  const controller = new SearchController((q) =>
    q === "old" ? old.promise : latest.promise,
  );
  const a = controller.search("old"),
    b = controller.search("latest");
  old.resolve(["old"]);
  await a;
  assert.deepEqual(controller.results, []);
  latest.resolve(["latest"]);
  await b;
  assert.deepEqual(controller.results, ["latest"]);
});
test("a newer failed request does not make an older response current", async () => {
  const old = deferred(),
    latest = deferred();
  const controller = new SearchController((q) =>
    q === "old" ? old.promise : latest.promise,
  );
  const a = controller.search("old");
  const b = controller.search("latest");
  const rejection = assert.rejects(b, /network/);
  latest.reject(new Error("network"));
  await rejection;
  old.resolve(["old"]);
  await a;
  assert.deepEqual(controller.results, []);
});
