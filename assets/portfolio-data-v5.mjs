import { categories as baseCategories, projects as baseProjects, ondaCopy, copy as baseCopy } from './portfolio-data-v4.mjs';

const l = (ru, en) => ({ ru, en });

export { ondaCopy };

export const categories = baseCategories.map(category => {
  if (category.id === 'all') return {
    ...category,
    intro: l(
      'Карточки товаров, короткие ролики, фирменный стиль, сайты и мобильные проекты. Визуальная форма и инженерный опыт в одном портфолио.',
      'Product cards, short videos, brand identities, websites and mobile projects. Visual form and engineering experience in one portfolio.'
    )
  };
  if (category.id === 'design') return {
    ...category,
    intro: l(
      'Товарные карточки, фирменные знаки, упаковочная графика и интерфейсы. Предмет, цвет, композиция и типографика работают вместе.',
      'Product cards, brand marks, packaging graphics and interfaces. Objects, colour, composition and typography working together.'
    )
  };
  if (category.id === 'ads-social') return {
    ...category,
    intro: l(
      'Товарные карточки, короткие ролики и материалы для соцсетей. Выразительная композиция в статике и движении.',
      'Product cards, short videos and social media assets. Distinctive compositions in still images and motion.'
    )
  };
  return category;
});

export const productProjects = [
  {
    id: 'reed-diffuser',
    brand: 'DIFFUSER',
    categories: ['design', 'ads-social'],
    type: l('Дизайн / карточки товара', 'Design / product cards'),
    title: l('Аромат для дома.', 'A scent for home.'),
    description: l(
      'Янтарное стекло, травертин и оливковые оттенки. Спокойная предметная композиция и выразительная типографика.',
      'Amber glass, travertine and olive tones. A calm product composition with distinctive typography.'
    ),
    tags: l(['Карточки товара', 'Композиция', 'Типографика'], ['Product cards', 'Composition', 'Typography']),
    images: [{
      src: 'reed-diffuser-hero-v5.png', width: 1086, height: 1448, role: 'hero',
      alt: l('Карточка диффузора: янтарный флакон с чёрными палочками на светлом камне и заголовок «Аромат для дома»', 'Diffuser card: an amber bottle with black reeds on pale stone and a Russian headline meaning “A scent for home”')
    }, {
      src: 'reed-diffuser-detail-v5.png', width: 1086, height: 1448, role: 'detail',
      alt: l('Детальная карточка диффузора: крупный план янтарного стекла и чёрных палочек, заголовок «Детали создают настроение»', 'Diffuser detail card: a close-up of amber glass and black reeds with a Russian headline meaning “Details create the mood”')
    }, {
      src: 'reed-diffuser-lifestyle-v5.png', width: 1086, height: 1448, role: 'lifestyle',
      alt: l('Интерьерная карточка диффузора: флакон на травертине, оливковые ветви и светлый текстиль', 'Diffuser interior card: a bottle on travertine, olive branches and pale textiles')
    }],
    layout: 'product', tone: 'diffuser'
  },
  {
    id: 'desk-lamp',
    brand: 'TABLE LIGHT',
    categories: ['design', 'ads-social'],
    type: l('Карточки товара / видеообложка', 'Product cards / video cover'),
    title: l('Свет для вашего вечера.', 'Light for your evening.'),
    description: l(
      'Коралловая лампа в жёлто-терракотовой палитре. Три карточки и зацикленная видеообложка с мягким светом и тенями листьев.',
      'A coral lamp in a yellow and terracotta palette. Three cards and a looping video cover with soft light and leaf shadows.'
    ),
    tags: l(['Карточки товара', 'Цвет и свет', 'Типографика'], ['Product cards', 'Colour and light', 'Typography']),
    images: [{
      src: 'desk-lamp-hero-v5.png', width: 1086, height: 1448, role: 'hero',
      alt: l('Карточка настольной лампы: коралловый купол, изогнутая стойка и тёплый свет на жёлтой поверхности', 'Table lamp card: a coral dome, curved stem and warm light on a yellow surface')
    }, {
      src: 'desk-lamp-detail-v5.png', width: 1086, height: 1448, role: 'detail',
      alt: l('Карточка лампы «Акцентный свет»: коралловый купол и световое пятно в тёплой терракотовой сцене', 'Lamp card with a Russian headline meaning “Accent light”: a coral dome and a pool of light in a warm terracotta setting')
    }, {
      src: 'desk-lamp-lifestyle-v5.png', width: 1086, height: 1448, role: 'lifestyle',
      alt: l('Интерьерная карточка лампы: коралловая лампа на круглом столике рядом с креслом, книги и растения', 'Lamp interior card: a coral lamp on a round table beside an armchair, with books and plants')
    }],
    video: 'desk-lamp-loop-v5.mp4',
    videoLoop: true,
    videoPoster: 'desk-lamp-hero-v5.png',
    videoTitle: l('Видеообложка: свет и тени', 'Video cover: light and shadows'),
    videoWidth: 900, videoHeight: 1200,
    layout: 'product', tone: 'lamp'
  },
  {
    id: 'ceramic-cup',
    brand: 'CERAMICS',
    categories: ['design', 'ads-social'],
    type: l('Карточки товара / видеообложка', 'Product cards / video cover'),
    title: l('Время для себя.', 'A moment for yourself.'),
    description: l(
      'Кобальтовая глазурь и лавандовый фон. Три карточки и зацикленная видеообложка с движением пара над кофе.',
      'Cobalt glaze and a lavender backdrop. Three cards and a looping video cover with steam moving above the coffee.'
    ),
    tags: l(['Карточки товара', 'Цветовая композиция', 'Типографика'], ['Product cards', 'Colour composition', 'Typography']),
    images: [{
      src: 'ceramic-cup-hero-v5.png', width: 1086, height: 1448, role: 'hero',
      alt: l('Карточка керамической чашки: кобальтовая чашка с кофе и паром на лавандовом фоне, заголовок «Время для себя»', 'Ceramic cup card: a cobalt cup of coffee with steam against a lavender backdrop and a Russian headline meaning “A moment for yourself”')
    }, {
      src: 'ceramic-cup-detail-v5.png', width: 1086, height: 1448, role: 'detail',
      alt: l('Детальная карточка чашки: крупный план кобальтовой глазури и ручки, заголовок «Красота в деталях»', 'Cup detail card: a close-up of cobalt glaze and the handle with a Russian headline meaning “Beauty in the details”')
    }, {
      src: 'ceramic-cup-lifestyle-v5.png', width: 1086, height: 1448, role: 'lifestyle',
      alt: l('Карточка кофейной паузы: кобальтовая чашка на деревянном подносе, светлый текстиль, ягоды и лаванда', 'Coffee-break card: a cobalt cup on a wooden tray with pale textiles, berries and lavender')
    }],
    video: 'ceramic-cup-loop-v5.mp4',
    videoLoop: true,
    videoPoster: 'ceramic-cup-hero-v5.png',
    videoTitle: l('Видеообложка: пар над кофе', 'Video cover: steam above coffee'),
    videoWidth: 900, videoHeight: 1200,
    layout: 'product', tone: 'cup'
  },
  {
    id: 'wireless-headphones',
    brand: 'HEADPHONES',
    categories: ['design', 'ads-social'],
    type: l('Дизайн / карточки товара', 'Design / product cards'),
    title: l('Ваш ритм.', 'Your rhythm.'),
    description: l(
      'Светлые наушники, сиренево-серебристая сцена и выразительный ракурс. Чистая композиция с акцентом на силуэте.',
      'Ivory headphones, a silver-lilac setting and a striking angle. A clean composition focused on the silhouette.'
    ),
    tags: l(['Карточки товара', 'Предметная композиция', 'Типографика'], ['Product cards', 'Product composition', 'Typography']),
    images: [{
      src: 'wireless-headphones-hero-v2-v5.png', width: 1086, height: 1448, role: 'hero',
      alt: l('Карточка наушников: светлые полноразмерные наушники под углом над сиренево-серебристым подиумом и заголовок «Ваш ритм»', 'Headphones card: ivory over-ear headphones at an angle above a silver-lilac podium and a Russian headline meaning “Your rhythm”')
    }, {
      src: 'wireless-headphones-detail-v5.png', width: 1086, height: 1448, role: 'detail',
      alt: l('Детальная карточка наушников: крупный план светлых амбушюр и оголовья с тёмным заголовком «Форма и фактура»', 'Headphones detail card: a close-up of ivory ear cushions and headband with a dark Russian headline meaning “Form and texture”')
    }, {
      src: 'wireless-headphones-lifestyle-v5.png', width: 1086, height: 1448, role: 'lifestyle',
      alt: l('Карточка наушников на сиренево-серебристом подиуме: светлый корпус, мягкие тени и тёмный заголовок «В центре вашего дня»', 'Headphones card on a silver-lilac podium: an ivory body, soft shadows and a dark Russian headline meaning “At the centre of your day”')
    }],
    layout: 'product', tone: 'headphones'
  }
];

const cinemaProject = {
  id: 'kadr-vkus',
  brand: 'КАДР & ВКУС',
  categories: ['website-help', 'design'],
  type: l('Сайт киноужинов / веб-интерфейс', 'Cinema dinner website / web interface'),
  title: l('Кино со вкусом.', 'Cinema with flavour.'),
  description: l(
    'Сайт киноужинов с авторскими афишами, фильтрами, меню и расписанием. Выбор даты и гостей, расчёт суммы и тестовый сценарий оплаты.',
    'A cinema dinner website with original posters, filters, menus and a schedule. Date and guest selection, a calculated total and a test payment flow.'
  ),
  tags: l(['Веб-дизайн', 'HTML / CSS / JavaScript', 'Интерактивный интерфейс'], ['Web design', 'HTML / CSS / JavaScript', 'Interactive interface']),
  images: [{
    src: 'cinema-dinner-cover-v6.jpg', width: 1265, height: 712, role: 'hero',
    alt: l('Главный экран сайта «КАДР & ВКУС»: заголовок «Кино со вкусом» на винном фоне и геометрическая афиша итальянского вечера', 'The KADR & VKUS website home screen: a “Cinema with flavour” headline on a wine-coloured background and a geometric Italian evening poster')
  }],
  link: 'cinema-dinner.html',
  linkLabel: l('Открыть сайт киноужинов', 'Open the cinema dinner website'),
  tone: 'cinema'
};

export const projects = [cinemaProject, ...productProjects, ...baseProjects];

export const copy = {
  ru: {
    ...baseCopy.ru,
    pageDescription: 'Андрей, NabarakDev. Дизайн карточек товаров, короткие ролики, айдентика, сайты и мобильная разработка. Тимлид и технический эксперт в проектах Tenge Bank, MBANK и МТС Беларусь.',
    heroIntro: 'Выразительный дизайн и продуманная разработка. Создаю карточки товаров, короткие ролики, сайты и интерфейсы, в которых форма работает вместе с логикой.',
    workIntro: 'Карточки товаров и ролики, айдентика, сайты и мобильные проекты. Выберите то, что ближе к вашей задаче.'
  },
  en: {
    ...baseCopy.en,
    pageDescription: 'Andrei, NabarakDev. Product card design, short videos, brand identities, websites and mobile development. Team lead and technical expert on projects for Tenge Bank, MBANK and MTS Belarus.',
    heroIntro: 'Expressive design and thoughtful development. I create product cards, short videos, websites and interfaces that bring visual form and practical functionality together.',
    workIntro: 'Product cards and videos, identities, websites and mobile projects. Choose what is closest to your project.'
  }
};
