import { categories as baseCategories, projects as baseProjects, ondaCopy, copy as baseCopy } from './portfolio-data-v3.mjs';

const l = (ru, en) => ({ ru, en });

export { ondaCopy };

export const categories = baseCategories.map(category => {
  if (category.id === 'all') return {
    ...category,
    intro: l(
      'Мобильная разработка, сайты, фирменный стиль и инструменты для данных. От технического руководства продуктом до его визуальной формы.',
      'Mobile development, websites, brand identities and data tools. From technical product leadership to visual form.'
    )
  };
  if (category.id === 'other') return {
    ...category,
    title: l('Мобильные продукты и полезные инструменты.', 'Mobile products and useful tools.'),
    intro: l(
      'Мобильные проекты Tenge Bank, Банка Кыргызстан / MBANK и МТС Беларусь. А также интерфейс ORBIT и браузерный инструмент CSV Desk.',
      'Mobile projects for Tenge Bank, Bank Kyrgyzstan / MBANK and MTS Belarus. Alongside the ORBIT interface and the CSV Desk browser tool.'
    )
  };
  return category;
});

export const mobileProjects = [
  {
    id: 'tenge24',
    brand: 'TENGE BANK',
    categories: ['other'],
    type: l('Мобильный проект / техническое руководство', 'Mobile project / technical leadership'),
    title: l('Tenge24 — мобильный банк.', 'Tenge24 — mobile banking.'),
    description: l(
      'Мобильный проект Tenge Bank. Руководил проектом как тимлид и технический эксперт.',
      'A mobile project for Tenge Bank. I led the project as team lead and technical expert.'
    ),
    tags: l(['Мобильный банк', 'Тимлид', 'Технический эксперт'], ['Mobile banking', 'Team lead', 'Technical expert']),
    images: [{
      src: l('tenge-mobile-ru-v4.png', 'tenge-mobile-en-v4.png'),
      alt: l('Tenge24: мобильное приложение Tenge Bank', 'Tenge24: the Tenge Bank mobile app')
    }],
    stores: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=uz.tune.tenge&hl=ru' },
      { label: 'App Store', href: 'https://apps.apple.com/uz/app/tenge24/id1586139053' }
    ],
    tone: 'tenge'
  },
  {
    id: 'mbank',
    brand: 'MBANK',
    categories: ['other'],
    type: l('Мобильный проект / техническое руководство', 'Mobile project / technical leadership'),
    title: l('Банк Кыргызстан / MBANK.', 'Bank Kyrgyzstan / MBANK.'),
    description: l(
      'Мобильный проект Банка Кыргызстан. Руководил проектом как тимлид и технический эксперт.',
      'A mobile project for Bank Kyrgyzstan. I led the project as team lead and technical expert.'
    ),
    tags: l(['Мобильный банк', 'Тимлид', 'Технический эксперт'], ['Mobile banking', 'Team lead', 'Technical expert']),
    images: [{
      src: l('mbank-mobile-ru-v4.png', 'mbank-mobile-en-v4.png'),
      alt: l('MBANK: мобильное банковское приложение', 'MBANK: the mobile banking app')
    }],
    stores: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.maanavan.mb_kyrgyzstan&hl=ru' },
      { label: 'App Store', href: 'https://apps.apple.com/ru/app/mbank-online/id922922121' }
    ],
    tone: 'mbank'
  },
  {
    id: 'mts-belarus',
    brand: 'MTS BELARUS',
    categories: ['other'],
    type: l('Мобильный проект / техническое руководство', 'Mobile project / technical leadership'),
    title: l('Мой МТС — Беларусь.', 'My MTS — Belarus.'),
    description: l(
      'Руководство мобильной разработкой начиная с версии 3.0. Роль — тимлид и технический эксперт.',
      'Mobile development leadership from version 3.0. My role: team lead and technical expert.'
    ),
    tags: l(['Мобильный сервис', 'Тимлид', 'С версии 3.0'], ['Mobile service', 'Team lead', 'From version 3.0']),
    images: [{
      src: l('mts-mobile-ru-v4.png', 'mts-mobile-en-v4.png'),
      alt: l('Мой МТС: мобильное приложение МТС Беларусь', 'My MTS: the MTS Belarus mobile app')
    }],
    stores: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?hl=ru&id=by.mts.client' },
      { label: 'App Store', href: 'https://apps.apple.com/by/app/%D0%BC%D0%BE%D0%B9-%D0%BC%D1%82%D1%81-%D0%B1%D0%B5%D0%BB%D0%B0%D1%80%D1%83%D1%81%D1%8C/id979883510' }
    ],
    tone: 'mts'
  }
];

export const projects = [...mobileProjects, ...baseProjects];

export const copy = {
  ru: {
    ...baseCopy.ru,
    pageDescription: 'Андрей, NabarakDev. Мобильная разработка, сайты, интерфейсы и фирменный стиль. Тимлид и технический эксперт в мобильных проектах Tenge Bank, MBANK и МТС Беларусь.',
    heroIntro: 'Выразительный дизайн и продуманная разработка. Создаю мобильные приложения, сайты и цифровые материалы, в которых форма работает вместе с логикой.',
    workIntro: 'Мобильная разработка, сайты и интерфейсы, айдентика и тексты. Выберите то, что ближе к вашей задаче.',
    aboutBody: 'Руководил мобильными проектами Tenge Bank, Банка Кыргызстан / MBANK и МТС Беларусь — в МТС начиная с версии 3.0. Моя роль — тимлид и технический эксперт. Соединяю интерфейсы, данные и логику в цельные цифровые продукты.',
    leadershipEyebrow: 'Опыт в мобильных продуктах',
    leadershipRole: 'Тимлид · Технический эксперт',
    storeLinks: 'Приложение в магазинах'
  },
  en: {
    ...baseCopy.en,
    pageDescription: 'Andrei, NabarakDev. Mobile development, websites, interfaces and brand identities. Team lead and technical expert on mobile projects for Tenge Bank, MBANK and MTS Belarus.',
    heroIntro: 'Expressive design and thoughtful development. I create mobile apps, websites and digital assets that bring visual form and practical functionality together.',
    workIntro: 'Mobile development, websites and interfaces, identities and words. Choose what is closest to your project.',
    aboutBody: 'I led mobile projects for Tenge Bank, Bank Kyrgyzstan / MBANK and MTS Belarus — at MTS, from version 3.0. My role was team lead and technical expert. I connect interfaces, data and functionality into cohesive digital products.',
    leadershipEyebrow: 'Experience in mobile products',
    leadershipRole: 'Team lead · Technical expert',
    storeLinks: 'Find the app'
  }
};
