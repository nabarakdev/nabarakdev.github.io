import { caseStories as baseStories } from './case-stories-v3.mjs';

const l = (ru, en) => ({ ru, en });
const labels = {
  task: l('О проекте', 'About the project'),
  process: l('Мой вклад', 'My contribution'),
  methods: l('Направление', 'Focus'),
  result: l('Продукт', 'The product')
};
const methods = l(['Техническое руководство', 'Мобильные продукты'], ['Technical leadership', 'Mobile products']);
const leadership = l(
  'Руководил мобильным проектом. Выступал тимлидом и техническим экспертом.',
  'I led the mobile project, serving as team lead and technical expert.'
);

export const mobileStories = {
  tenge24: {
    title: l('Tenge24 — мобильный банк Tenge Bank', 'Tenge24 — the Tenge Bank mobile app'),
    native_title: l('Тенге банк / Tenge24 — мобильный проект', 'Tenge Bank / Tenge24 — mobile project'),
    labels,
    task: l(
      'Tenge24 — мобильный банк Tenge Bank для частных клиентов в Узбекистане.',
      'Tenge24 is the Tenge Bank mobile banking app for personal customers in Uzbekistan.'
    ),
    process: leadership,
    methods,
    result: l(
      'Приложение объединяет управление картами, платежи, переводы и работу с банковскими продуктами.',
      'The app brings together card management, payments, transfers and access to banking products.'
    )
  },
  mbank: {
    title: l('Банк Кыргызстан / MBANK — мобильный банк', 'Bank Kyrgyzstan / MBANK — mobile banking'),
    native_title: l('Банк Кыргызстан / MBANK — мобильный проект', 'Bank Kyrgyzstan / MBANK — mobile project'),
    labels,
    task: l(
      'MBANK — мобильный банк Кыргызстана для ежедневных платежей, переводов и управления личными финансами.',
      'MBANK is a mobile bank in Kyrgyzstan for everyday payments, transfers and personal finances.'
    ),
    process: leadership,
    methods,
    result: l(
      'Приложение объединяет счета и карты, историю операций и доступ к банковским сервисам.',
      'The app brings together accounts and cards, transaction history and access to banking services.'
    )
  },
  'mts-belarus': {
    title: l('Мой МТС — мобильный сервис в Беларуси', 'My MTS — a mobile service in Belarus'),
    native_title: l('МТС Беларусь — мобильный проект с версии 3.0', 'MTS Belarus — mobile project from version 3.0'),
    labels,
    task: l(
      '«Мой МТС (Беларусь)» — мобильный сервис самообслуживания для абонентов МТС Беларусь.',
      'My MTS (Belarus) is a mobile self-service app for MTS Belarus subscribers.'
    ),
    process: l(
      'Руководство мобильной разработкой начиная с версии 3.0. Выступал тимлидом и техническим экспертом.',
      'I led mobile development from version 3.0, serving as team lead and technical expert.'
    ),
    methods,
    result: l(
      'Приложение объединяет управление номерами, проверку баланса и остатков пакетов, просмотр расходов, подключение услуг и пополнение счёта.',
      'The app brings together phone-number management, balance and allowance checks, spending information, service management and account top-ups.'
    )
  }
};

export const caseStories = { ...mobileStories, ...baseStories };
