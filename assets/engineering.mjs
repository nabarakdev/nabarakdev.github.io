import { copy } from "./engineering-copy.mjs";
import { initGallery } from "./work-gallery.mjs";
const query = new URLSearchParams(location.search);
let language = query.get("lang") === "en" ? "en" : "ru";
let stage = 0;
const renderGallery = initGallery(() => language);
const codes = [
  "task: DEMO-001 / status: intake",
  "owner: packages/search / route: compact",
  "change: latest-request-wins / scope: search",
  "checks: test runner + bounded diff review",
  "publication: awaiting explicit approval",
  "output: merge-request.md + validation.json",
];
function renderStage() {
  const title = document.querySelector("#step-title");
  if (!title) return;
  title.textContent = copy[language].stepTitles[stage];
  document.querySelector("#step-body").textContent =
    copy[language].stepBodies[stage];
  document.querySelector("#step-code").textContent = codes[stage];
  document.querySelectorAll("[data-step]").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(Number(button.dataset.step) === stage),
    );
    button.querySelector("b").textContent =
      copy[language].steps[Number(button.dataset.step)];
  });
}
function render() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[language][element.dataset.i18n];
    if (typeof value !== "string") return;
    element.replaceChildren(
      ...value
        .split("\n")
        .flatMap((line, i) =>
          i
            ? [document.createElement("br"), document.createTextNode(line)]
            : [document.createTextNode(line)],
        ),
    );
  });
  document
    .querySelectorAll("[data-lang]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.lang === language),
      ),
    );
  document
    .querySelectorAll("[data-layer]")
    .forEach(
      (element) =>
        (element.textContent =
          copy[language].layers[Number(element.dataset.layer)]),
    );
  document
    .querySelectorAll("[data-layer-body]")
    .forEach(
      (element) =>
        (element.textContent =
          copy[language].layerBodies[Number(element.dataset.layerBody)]),
    );
  document
    .querySelectorAll("[data-project-image]")
    .forEach(
      (image) =>
        (image.src = `assets/${image.dataset.projectImage}-mobile-${language}-v4.png`),
    );
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!/^(index|case-agentic|creative)\.html/.test(href)) return;
    const url = new URL(href, location.href);
    url.searchParams.set("lang", language);
    link.setAttribute(
      "href",
      url.pathname.split("/").at(-1) + url.search + url.hash,
    );
  });
  const casePage = document.body.dataset.page === "case";
  document.title =
    language === "en"
      ? casePage
        ? "Jira → Merge Request — Agentic Delivery / Andrey Karaban"
        : "Andrey Karaban — Agentic Systems & Software Architecture"
      : casePage
        ? "Jira → Merge Request — агентская разработка / Андрей Карабань"
        : "Андрей Карабань — агентские системы и архитектура ПО";
  document.querySelector('meta[name="description"]').content =
    language === "en"
      ? "Enterprise agentic systems and development automation. A Jira task to a ready Merge Request. Architecture, technical leadership and mobile product delivery."
      : "Корпоративные агентские системы и автоматизация разработки. От задачи Jira до готового Merge Request. Архитектура и техническое лидерство.";
  const url = new URL(location.href);
  url.searchParams.set("lang", language);
  history.replaceState(null, "", url);
  renderStage();
  renderGallery();
}
document.querySelectorAll("[data-lang]").forEach((button) =>
  button.addEventListener("click", () => {
    language = button.dataset.lang;
    render();
  }),
);
document.querySelectorAll("[data-step]").forEach((button) =>
  button.addEventListener("click", () => {
    stage = Number(button.dataset.step);
    renderStage();
  }),
);
render();
