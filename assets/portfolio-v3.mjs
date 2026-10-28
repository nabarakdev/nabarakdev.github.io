import { categories, projects, ondaCopy, copy } from './portfolio-data-v3.mjs';
import { caseStories } from './case-stories-v3.mjs';

const $ = selector => document.querySelector(selector);
const grid = $('#project-grid');
const dialog = $('#project-dialog');
const dialogContent = $('#dialog-content');
const featuredProject = projects.find(project => project.id === 'orbit');
let language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru';
let category = validCategory(new URLSearchParams(location.search).get('category'));
let activeProject = null;
let returnFocus = null;
let returnProjectId = null;
let savedScroll = 0;

function validCategory(value) { return categories.some(item => item.id === value) ? value : 'all'; }
function local(value) { return value?.[language] ?? value; }
function imageSource(item) { return local(item.src); }
function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function updateUrl() {
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  if (category === 'all') url.searchParams.delete('category');
  else url.searchParams.set('category', category);
  history.replaceState({ language, category }, '', url);
}

function copyVisual() {
  const t = copy[language], visual = node('span', 'copy-visual');
  visual.append(node('span', 'copy-visual-brand', 'ONDA'), node('span', 'copy-visual-kicker', t.copyCardKicker));
  visual.append(node('span', 'copy-visual-title', local(ondaCopy.hero.title)), node('span', 'copy-visual-body', local(ondaCopy.hero.body)), node('span', 'copy-visual-footer', t.copyCardFooter));
  const wave = node('span', 'copy-wave', '∿');
  wave.setAttribute('aria-hidden', 'true');
  visual.append(wave);
  return visual;
}

function csvVisual() {
  const t = copy[language], visual = node('span', 'csv-visual');
  const top = node('span', 'csv-visual-top');
  top.append(node('span', 'csv-visual-brand', 'CSV Desk'), node('span', 'csv-visual-badge', t.csvBadge));
  visual.append(top, node('span', 'csv-visual-title', t.csvHeading));
  const table = node('span', 'csv-card-table');
  const head = node('span', 'csv-card-row csv-card-head');
  t.csvColumn.forEach(value => head.append(node('span', '', value)));
  table.append(head);
  t.csvRows.slice(0, 2).forEach(row => {
    const line = node('span', 'csv-card-row');
    row.forEach(value => line.append(node('span', '', value)));
    table.append(line);
  });
  visual.append(table, node('span', 'csv-visual-result', t.csvResult));
  return visual;
}

function sizeImage(img, src) {
  if (['ael-home.jpg', 'ael-course.jpg', 'floka-home.jpg', 'floka-usecases.jpg'].includes(src)) {
    img.width = 1265; img.height = 712;
  } else if (src === 'necklace-cover.jpg') {
    img.width = 1265; img.height = 1106;
  } else {
    img.width = 1600; img.height = 1200;
  }
}

function projectCard(project, index) {
  const t = copy[language], article = node('article', `project-card tone-${project.tone}`);
  article.dataset.project = project.id;
  const open = node('button', 'project-preview');
  open.type = 'button';
  open.setAttribute('aria-labelledby', `title-${project.id}`);
  open.setAttribute('aria-describedby', `action-${project.id}`);
  if (project.visual === 'copy') open.append(copyVisual());
  else if (project.visual === 'csv') open.append(csvVisual());
  else {
    const image = project.images[0], img = node('img', 'project-image');
    img.src = `assets/${imageSource(image)}`;
    img.alt = local(image.alt);
    img.loading = 'lazy';
    img.decoding = 'async';
    sizeImage(img, imageSource(image));
    open.append(img);
  }
  const icon = node('span', 'preview-arrow', '↗');
  icon.setAttribute('aria-hidden', 'true');
  const action = node('span', 'sr-only', t.view);
  action.id = `action-${project.id}`;
  open.append(icon, action);
  open.addEventListener('click', () => openProject(project, open));
  const meta = node('div', 'project-meta'), top = node('div', 'project-meta-top');
  top.append(node('span', 'project-brand', project.brand), node('span', 'project-index', String(index + 1).padStart(2, '0')));
  const title = node('h3', 'project-title', local(project.title));
  title.id = `title-${project.id}`;
  meta.append(top, title, node('p', 'project-type', local(project.type)), node('p', 'project-description', local(project.description)));
  article.append(open, meta);
  return article;
}

function renderFilters() {
  const filters = $('#filters');
  filters.replaceChildren();
  categories.forEach(item => {
    const button = node('button', 'filter-button', local(item.name));
    button.type = 'button';
    button.dataset.category = item.id;
    button.setAttribute('aria-pressed', String(category === item.id));
    button.setAttribute('aria-controls', 'project-grid');
    button.addEventListener('click', () => { category = item.id; renderWork(); updateUrl(); });
    filters.append(button);
  });
}

function renderWork() {
  const selected = categories.find(item => item.id === category);
  const visible = projects.filter(project => category === 'all' || project.categories.includes(category));
  document.querySelectorAll('[data-category]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
  $('#category-title').textContent = local(selected.title);
  $('#category-description').textContent = local(selected.intro);
  $('#result-count').textContent = copy[language].count(visible.length);
  grid.replaceChildren(...visible.map(projectCard));
}

function storyBlock(label, className) {
  const block = node('section', `case-block ${className}`);
  block.append(node('h3', 'case-label', label));
  return block;
}

function renderStory(project) {
  const t = copy[language], story = caseStories[project.id];
  const wrapper = node('div', 'case-story');
  const task = storyBlock(t.storyTask, 'case-task');
  task.append(node('p', '', local(story.task)));
  const process = storyBlock(t.storyProcess, 'case-process');
  const steps = node('ol', 'case-steps');
  local(story.process).forEach(step => steps.append(node('li', '', step)));
  process.append(steps);
  const methods = storyBlock(t.storyMethods, 'case-methods');
  const list = node('ul', 'case-method-list');
  local(story.methods).forEach(method => list.append(node('li', '', method)));
  methods.append(list);
  const result = storyBlock(t.storyResult, 'case-result');
  result.append(node('p', '', local(story.result)));
  wrapper.append(task, process, methods, result);
  return wrapper;
}

function imageFigure(item) {
  const source = imageSource(item);
  const figure = node('figure', 'detail-figure'), link = node('a', 'detail-image-link');
  link.href = `assets/${source}`;
  link.target = '_blank'; link.rel = 'noopener';
  link.setAttribute('aria-label', `${copy[language].fullSize}: ${local(item.alt)}`);
  const img = node('img', 'detail-image');
  img.src = `assets/${source}`; img.alt = local(item.alt); img.loading = 'lazy';
  sizeImage(img, source);
  link.append(img, node('span', 'fullsize-label', `${copy[language].fullSize} ↗`));
  figure.append(link);
  return figure;
}

function textSection(title, content) {
  const section = node('section', 'copy-detail-section');
  section.append(node('h3', '', title));
  content.forEach(item => section.append(node(item.heading ? 'h4' : 'p', '', item.text)));
  return section;
}

function renderOndaText() {
  const t = copy[language], wrapper = node('div', 'copy-detail');
  wrapper.append(textSection(t.websiteHero, [{ heading: true, text: local(ondaCopy.hero.title) }, { text: local(ondaCopy.hero.body) }]));
  wrapper.append(textSection(t.productCopy, [{ heading: true, text: local(ondaCopy.product.title) }, { text: local(ondaCopy.product.body) }]));
  wrapper.append(textSection(t.socialCopy, [{ heading: true, text: t.morning }, { text: local(ondaCopy.captions[0]) }, { heading: true, text: t.evening }, { text: local(ondaCopy.captions[1]) }]));
  return wrapper;
}

function renderDialog(project) {
  const t = copy[language], story = caseStories[project.id];
  dialogContent.querySelectorAll('video').forEach(video => video.pause());
  dialogContent.replaceChildren();
  const header = node('header', 'detail-header');
  header.append(node('p', 'eyebrow', `${project.brand} / ${local(project.type)}`));
  const title = node('h2', '', local(story.title));
  title.id = 'dialog-title';
  header.append(title);
  dialogContent.append(header, renderStory(project));
  const media = node('section', 'detail-media');
  media.append(node('h3', 'media-heading', t.mediaTitle));
  if (project.images) project.images.forEach(item => media.append(imageFigure(item)));
  if (project.visual === 'copy') media.append(renderOndaText());
  if (project.visual === 'csv') {
    const demo = node('div', 'csv-detail-visual');
    demo.append(csvVisual()); media.append(demo);
  }
  if (project.video) {
    const section = node('section', 'detail-video');
    section.append(node('h4', '', t.video));
    const video = node('video');
    video.controls = true; video.playsInline = true; video.preload = 'metadata';
    video.poster = `assets/${imageSource(project.images[0])}`;
    video.setAttribute('aria-label', t.video);
    const source = node('source');
    source.src = `assets/${project.video}`; source.type = 'video/mp4';
    video.append(source); section.append(video); media.append(section);
  }
  if (project.vector) {
    const link = node('a', 'tool-link', `${t.openVector} ↗`);
    link.href = `assets/${project.vector}`; link.target = '_blank'; link.rel = 'noopener';
    media.append(link);
  }
  if (project.link) {
    const link = node('a', 'tool-link', `${t.openTool} ↗`);
    link.href = `${project.link}?lang=${language}`;
    media.append(link);
  }
  dialogContent.append(media);
}

function openProject(project, trigger) {
  returnFocus = trigger; returnProjectId = project.id; activeProject = project;
  renderDialog(project); savedScroll = window.scrollY;
  dialog.showModal(); document.body.classList.add('dialog-open');
  dialog.scrollTop = 0; $('#dialog-close').focus({ preventScroll: true });
}

function closeProject() { if (dialog.open) dialog.close(); }
dialog.addEventListener('close', () => {
  dialog.querySelectorAll('video').forEach(video => video.pause());
  document.body.classList.remove('dialog-open'); activeProject = null;
  const target = returnFocus?.isConnected ? returnFocus : document.querySelector(`[data-project="${returnProjectId}"] .project-preview`);
  window.scrollTo({ top: savedScroll, behavior: 'instant' });
  target?.focus({ preventScroll: true }); returnFocus = null; returnProjectId = null;
});
$('#dialog-close').addEventListener('click', closeProject);
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) closeProject();
});
// The native dialog owns modal focus containment and Escape handling.
$('#featured-project').addEventListener('click', event => openProject(featuredProject, event.currentTarget));

function renderLanguage() {
  const t = copy[language];
  document.documentElement.lang = language; document.title = t.pageTitle;
  document.querySelector('meta[name="description"]').content = t.pageDescription;
  document.querySelectorAll('[data-copy]').forEach(element => {
    const value = t[element.dataset.copy];
    if (typeof value === 'string') element.textContent = value;
  });
  document.querySelectorAll('[data-copy-aria]').forEach(element => element.setAttribute('aria-label', t[element.dataset.copyAria]));
  document.querySelectorAll('[data-copy-alt]').forEach(element => { element.alt = t[element.dataset.copyAlt]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  $('#hero-image').src = `assets/${imageSource(featuredProject.images[0])}`;
  renderFilters(); renderWork();
  if (activeProject) renderDialog(activeProject);
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
  language = button.dataset.lang; renderLanguage(); updateUrl();
}));
window.addEventListener('popstate', () => {
  const params = new URLSearchParams(location.search);
  language = params.get('lang') === 'en' ? 'en' : 'ru';
  category = validCategory(params.get('category')); renderLanguage();
});
renderLanguage();
