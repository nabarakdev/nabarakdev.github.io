import { caseStories as baseStories } from './case-stories-v4.mjs';

const l = (ru, en) => ({ ru, en });

export const productStories = {
  'reed-diffuser': {
    title: l('Аромат как деталь интерьера', 'Scent as an interior detail'),
    native_title: l('Диффузор — дизайн карточек товара', 'Reed diffuser — product card design'),
    task: l('Передать спокойный интерьерный характер диффузора через предметную композицию, цвет и типографику.', 'Express the diffuser’s calm interior character through product composition, colour and typography.'),
    process: l(
      ['Соединил янтарное стекло и чёрные палочки со светлым травертином и мягким оливковым фоном.', 'Собрал главную карточку, крупную деталь и интерьерную сцену; связал их антиквой и короткими подписями.'],
      ['Paired amber glass and black reeds with pale travertine and a soft olive backdrop.', 'Created a hero card, a close-up and an interior scene, connected through serif typography and short captions.']
    ),
    methods: l(['Предметная композиция', 'Тёплая палитра', 'Типографика'], ['Product composition', 'Warm palette', 'Typography']),
    result: l('Серия из трёх вертикальных карточек: главный образ, деталь стекла и подача в интерьере. Единая кремово-оливковая палитра и спокойная текстовая иерархия.', 'A series of three portrait cards: the main image, a glass detail and an interior setting. A consistent cream-and-olive palette and a calm text hierarchy.')
  },
  'desk-lamp': {
    title: l('Свет, форма и тёплый цвет', 'Light, form and warm colour'),
    native_title: l('Настольная лампа — дизайн карточек товара', 'Table lamp — product card design'),
    task: l('Построить выразительную подачу настольной лампы вокруг её силуэта и тёплого света.', 'Build a distinctive table lamp presentation around its silhouette and warm light.'),
    process: l(
      ['Выделил коралловый купол и изогнутую стойку в тёплой жёлто-терракотовой палитре.', 'Связал три карточки крупными заголовками и светотенью; дополнил серию зацикленной видеообложкой с мягким светом и тенями листьев.'],
      ['Set the coral dome and curved stem within a warm yellow and terracotta palette.', 'Connected three cards through large headlines and light and shadow, then added a looping video cover with soft light and leaf shadows.']
    ),
    methods: l(['Композиция', 'Цветовой контраст', 'Свет и тень', 'Зацикленная видеообложка'], ['Composition', 'Colour contrast', 'Light and shadow', 'Looping video cover']),
    result: l('Три вертикальные карточки и короткая зацикленная видеообложка. Коралловый цвет и тёплое свечение удерживают единый характер серии в статике и движении.', 'Three portrait cards and a short looping video cover. Coral colour and a warm glow hold the series together in still images and motion.')
  },
  'ceramic-cup': {
    title: l('Маленькая пауза в кобальте', 'A small pause in cobalt'),
    native_title: l('Керамическая чашка — дизайн карточек товара', 'Ceramic cup — product card design'),
    task: l('Создать эмоциональную подачу керамической чашки через цвет, фактуру глазури и атмосферу кофейной паузы.', 'Create an evocative ceramic cup presentation through colour, glaze texture and the atmosphere of a coffee break.'),
    process: l(
      ['Построил цветовую пару из кобальтовой чашки и лавандовой поверхности; светом подчеркнул глазурь и округлую форму.', 'Собрал общий образ, деталь глазури и кофейную паузу на подносе; дополнил серию зацикленной видеообложкой с движением пара.'],
      ['Paired a cobalt cup with a lavender surface, using light to emphasise the glaze and rounded form.', 'Created a main image, a glaze detail and a coffee break on a tray, then added a looping video cover with moving steam.']
    ),
    methods: l(['Цветовая композиция', 'Фактура и свет', 'Типографика', 'Зацикленная видеообложка'], ['Colour composition', 'Texture and light', 'Typography', 'Looping video cover']),
    result: l('Три вертикальные карточки и короткая зацикленная видеообложка. Кобальтовый акцент, лавандовые оттенки и пар над кофе связывают серию.', 'Three portrait cards and a short looping video cover. A cobalt accent, lavender tones and steam above the coffee connect the series.')
  },
  'wireless-headphones': {
    title: l('Силуэт в собственном ритме', 'A silhouette with its own rhythm'),
    native_title: l('Наушники — дизайн карточек товара', 'Headphones — product card design'),
    task: l('Показать форму светлых наушников в чистой студийной композиции с выразительным ракурсом.', 'Show the form of ivory headphones in a clean studio composition with a distinctive angle.'),
    process: l(
      ['Разместил светлые наушники над сиренево-серебристым подиумом, отделив силуэт светом и тенью.', 'Дополнил главный ракурс крупным планом фактуры и второй подачей на подиуме; объединил карточки тёмным гротеском.'],
      ['Placed ivory headphones above a silver-lilac podium, separating the silhouette through light and shadow.', 'Added a texture close-up and a second podium composition, connecting the cards through dark sans-serif typography.']
    ),
    methods: l(['Предметная композиция', 'Свет и тень', 'Типографическая иерархия'], ['Product composition', 'Light and shadow', 'Typographic hierarchy']),
    result: l('Три вертикальные карточки с общим ракурсом, деталями амбушюр и оголовья, подачей на подиуме. Светлая палитра дополнена контрастной тёмной типографикой.', 'Three portrait cards showing an overall angle, ear-cushion and headband details, and a podium setting. A light palette is paired with contrasting dark typography.')
  }
};

const cinemaStory = {
  title: l('Кино со вкусом: от афиши до выбора вечера', 'Cinema with flavour: from a poster to choosing an evening'),
  native_title: l('КАДР & ВКУС — дизайн и разработка сайта киноужинов', 'KADR & VKUS — cinema dinner website design and development'),
  task: l(
    'Создать адаптивный сайт киноужинов с выразительной афишей, меню по темам и понятным сценарием выбора вечера, даты и количества гостей.',
    'Create a responsive cinema dinner website with distinctive posters, themed menus and a clear flow for selecting an evening, date and number of guests.'
  ),
  process: l(
    ['Собрал визуальный стиль: винный фон, сливочная типографика, лаймовые акценты и три геометрические SVG-афиши.', 'Сверстал интерфейс на HTML, CSS и JavaScript. Связал фильтры тем и дат с расписанием, добавил описание мероприятий и вкладки меню.', 'Реализовал выбор даты и гостей, расчёт суммы и тестовое завершение оплаты. Предусмотрел управление с клавиатуры и адаптивную вёрстку.'],
    ['Built a visual style with a wine-coloured background, cream typography, lime accents and three geometric SVG posters.', 'Developed the interface in HTML, CSS and JavaScript. Connected theme and date filters to the schedule, adding event details and menu tabs.', 'Implemented date and guest selection, a calculated total and a test payment completion. Added keyboard controls and responsive layouts.']
  ),
  methods: l(['Веб-дизайн', 'SVG-графика', 'HTML / CSS / JavaScript', 'Адаптивная вёрстка', 'Доступность интерфейса'], ['Web design', 'SVG graphics', 'HTML / CSS / JavaScript', 'Responsive layouts', 'Interface accessibility']),
  result: l(
    'Сайт с афишей, фильтрами, меню и расписанием. Выбор вечера, даты и гостей ведёт к рассчитанной сумме и завершению тестового сценария оплаты без списаний и реальных бронирований.',
    'A website with posters, filters, menus and a schedule. Selecting an evening, date and guests leads to a calculated total and completion of a test payment flow, with no charges or real reservations.'
  )
};

export const caseStories = { 'kadr-vkus': cinemaStory, ...productStories, ...baseStories };
