import { projects, ondaCopy } from "./portfolio-data-v5.mjs";
import { caseStories } from "./case-stories-v5.mjs";
const words = {
  ru: {
    all: "Все работы",
    mobile: "Мобильные проекты",
    web: "Сайты",
    design: "Дизайн и айдентика",
    media: "Товары и видео",
    tools: "Тексты и инструменты",
    count: "работ",
    open: "Открыть работу",
    close: "Закрыть",
    task: "Задача",
    process: "Мой вклад",
    methods: "Подход и инструменты",
    result: "Результат",
    vector: "Открыть вектор",
    tool: "Открыть работающий проект",
    full: "Изображение в полном размере",
    stores: "Приложение в магазинах",
    mediaTitle: "Материалы проекта",
  },
  en: {
    all: "All work",
    mobile: "Mobile",
    web: "Websites",
    design: "Design & identity",
    media: "Products & video",
    tools: "Writing & tools",
    count: "projects",
    open: "Explore project",
    close: "Close",
    task: "The task",
    process: "My contribution",
    methods: "Approach & tools",
    result: "The result",
    vector: "Open vector",
    tool: "Open working project",
    full: "Full-size image",
    stores: "App stores",
    mediaTitle: "Project materials",
  },
};
const filterIds = ["all", "mobile", "web", "design", "media", "tools"];
const matches = (p, filter) =>
  filter === "all" ||
  (filter === "mobile" &&
    ["tenge24", "mbank", "mts-belarus", "orbit"].includes(p.id)) ||
  (filter === "web" && p.categories.includes("website-help")) ||
  (filter === "design" && p.categories.includes("design")) ||
  (filter === "media" && (p.video || p.categories.includes("ads-social"))) ||
  (filter === "tools" && ["onda-copy", "csv-desk"].includes(p.id));
const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};
export function initGallery(getLanguage) {
  const grid = document.querySelector("#all-projects");
  if (!grid) return () => {};
  const controls = document.querySelector("#work-filters"),
    count = document.querySelector("#work-count"),
    dialog = document.querySelector("#work-dialog"),
    content = document.querySelector("#work-detail"),
    close = document.querySelector("#work-close");
  let filter = "all",
    current = null,
    trigger = null;
  const local = (value) => value?.[getLanguage()] ?? value;
  const text = () => words[getLanguage()];
  function image(item) {
    const img = el("img");
    img.src = "assets/" + local(item.src);
    img.alt = local(item.alt) || "";
    img.loading = "lazy";
    img.decoding = "async";
    return img;
  }
  function visual(project) {
    const cover = el("span", "gallery-cover");
    if (project.images?.length) cover.append(image(project.images[0]));
    else if (project.visual === "copy") {
      cover.classList.add("gallery-cover-copy");
      cover.append(
        el("span", "mono", "ONDA / RU + EN"),
        el("strong", "", local(ondaCopy.hero.title)),
        el("span", "", local(ondaCopy.hero.body)),
      );
    } else {
      cover.classList.add("gallery-cover-tool");
      cover.append(
        el("span", "mono", "CSV DESK"),
        el(
          "strong",
          "",
          getLanguage() === "ru" ? "Данные.\nПо порядку." : "Data.\nIn order.",
        ),
      );
      const table = el("span", "mini-data");
      [
        "FILE",
        "ROWS",
        "STATUS",
        "catalog.csv",
        "128",
        "READY",
        "orders.csv",
        "64",
        "READY",
      ].forEach((v) => table.append(el("span", "", v)));
      cover.append(table);
    }
    cover.append(el("span", "gallery-arrow", "↗"));
    return cover;
  }
  function card(project) {
    const article = el("article", "gallery-card");
    article.dataset.workId = project.id;
    const button = el("button", "gallery-open");
    button.type = "button";
    button.setAttribute(
      "aria-label",
      text().open + ": " + local(project.title),
    );
    button.append(visual(project));
    button.addEventListener("click", () => {
      current = project;
      trigger = button;
      renderDetail();
      dialog.showModal();
      document.body.classList.add("work-modal-open");
      close.focus();
    });
    article.append(
      button,
      el("p", "gallery-brand mono", project.brand),
      el("h3", "", local(project.title)),
      el("p", "gallery-type", local(project.type)),
    );
    return article;
  }
  function paragraphSection(title, value, listTag) {
    const section = el("section", "work-story-block");
    section.append(el("h3", "", title));
    if (Array.isArray(value)) {
      const list = el(listTag || "ul");
      value.forEach((item) => list.append(el("li", "", item)));
      section.append(list);
    } else section.append(el("p", "", value));
    return section;
  }
  function renderDetail() {
    if (!current) return;
    const p = current,
      s = caseStories[p.id],
      w = text();
    content.querySelectorAll("video").forEach((v) => v.pause());
    content.replaceChildren();
    close.textContent = w.close + " ×";
    const heading = el("h2", "", local(s.title));
    heading.id = "work-detail-title";
    content.append(
      el("p", "eyebrow", p.brand + " / " + local(p.type)),
      heading,
    );
    const story = el("div", "work-story");
    story.append(
      paragraphSection(local(s.labels?.task) || w.task, local(s.task)),
      paragraphSection(
        local(s.labels?.process) || w.process,
        local(s.process),
        "ol",
      ),
      paragraphSection(local(s.labels?.methods) || w.methods, local(s.methods)),
      paragraphSection(local(s.labels?.result) || w.result, local(s.result)),
    );
    content.append(story);
    if (p.stores) {
      const nav = el("nav", "work-store-links");
      nav.setAttribute("aria-label", w.stores);
      p.stores.forEach((store) => {
        const a = el("a", "text-link", store.label + " ↗");
        a.href = store.href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        nav.append(a);
      });
      content.append(nav);
    }
    content.append(el("h3", "work-media-heading", w.mediaTitle));
    const media = el(
      "div",
      "work-media" + (p.layout === "product" ? " work-media-products" : ""),
    );
    for (const item of p.images || []) {
      const figure = el("figure"),
        a = el("a");
      a.href = "assets/" + local(item.src);
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", w.full);
      a.append(image(item));
      figure.append(a);
      media.append(figure);
    }
    if (p.visual === "copy") {
      for (const part of [ondaCopy.hero, ondaCopy.product])
        media.append(paragraphSection(local(part.title), local(part.body)));
      for (const caption of ondaCopy.captions)
        media.append(el("p", "", local(caption)));
    }
    if (p.visual === "csv") media.append(visual(p));
    if (p.video) {
      const video = el("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.poster = "assets/" + local(p.videoPoster || p.images[0].src);
      video.src = "assets/" + p.video;
      video.setAttribute("aria-label", local(p.videoTitle) || p.brand);
      media.append(video);
    }
    content.append(media);
    if (p.vector || p.link) {
      const a = el("a", "button", p.link ? w.tool + " ↗" : w.vector + " ↗");
      a.href = p.link
        ? p.link + "?lang=" + getLanguage()
        : "assets/" + p.vector;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      content.append(a);
    }
  }
  function render() {
    controls.replaceChildren();
    for (const id of filterIds) {
      const n = projects.filter((p) => matches(p, id)).length,
        b = el("button", "", `${text()[id]} ${n}`);
      b.type = "button";
      b.dataset.workFilter = id;
      b.setAttribute("aria-pressed", String(filter === id));
      b.setAttribute("aria-controls", "all-projects");
      b.addEventListener("click", () => {
        filter = id;
        render();
        controls
          .querySelector(`[data-work-filter="${id}"]`)
          .focus({ preventScroll: true });
      });
      controls.append(b);
    }
    const shown = projects.filter((p) => matches(p, filter));
    grid.replaceChildren(...shown.map(card));
    count.textContent = `${shown.length} / ${projects.length} ${text().count}`;
    if (dialog.open) renderDetail();
  }
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    content.querySelectorAll("video").forEach((v) => v.pause());
    document.body.classList.remove("work-modal-open");
    current = null;
    trigger?.focus({ preventScroll: true });
  });
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        dialog.close();
    }
  });
  return render;
}
