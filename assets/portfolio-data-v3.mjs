const l = (ru, en) => ({ru, en});

export const categories = [
  {
    "id": "all",
    "name": {
      "ru": "Все работы",
      "en": "All work"
    },
    "title": {
      "ru": "Идеи в разных формах.",
      "en": "Ideas in different forms."
    },
    "intro": {
      "ru": "От фирменного знака до интерактивного продукта. Интерфейсы, визуальные материалы и инструменты для повседневных задач.",
      "en": "From a brand mark to an interactive product. Interfaces, visual assets and tools for everyday tasks."
    }
  },
  {
    "id": "ads-social",
    "name": {
      "ru": "Реклама и соцсети",
      "en": "Ads & social media"
    },
    "title": {
      "ru": "Один бренд. Разные форматы.",
      "en": "One brand. Different formats."
    },
    "intro": {
      "ru": "Визуальные материалы и короткие тексты для соцсетей. Единый характер в публикации, истории и обложке.",
      "en": "Visual assets and concise social media copy. A consistent character across posts, stories and covers."
    }
  },
  {
    "id": "everyday-tasks",
    "name": {
      "ru": "Простая помощь",
      "en": "Everyday tasks"
    },
    "title": {
      "ru": "Порядок в данных.",
      "en": "Data, put in order."
    },
    "intro": {
      "ru": "Таблицы без лишних пробелов и повторов. Рабочий инструмент, который превращает CSV и TSV в аккуратный результат.",
      "en": "Tables with extra spaces and duplicate rows removed. A working tool that turns CSV and TSV into a tidy result."
    }
  },
  {
    "id": "design",
    "name": {
      "ru": "Дизайн",
      "en": "Design"
    },
    "title": {
      "ru": "Характер в каждой детали.",
      "en": "Character in every detail."
    },
    "intro": {
      "ru": "Фирменные знаки, упаковка и цифровые интерфейсы. Цвет, типографика и композиция складываются в цельный образ.",
      "en": "Brand marks, packaging and digital interfaces. Colour, typography and composition come together in a coherent visual identity."
    }
  },
  {
    "id": "writing",
    "name": {
      "ru": "Тексты",
      "en": "Writing"
    },
    "title": {
      "ru": "Ясная мысль. Точный тон.",
      "en": "Clear ideas. The right tone."
    },
    "intro": {
      "ru": "Готовые тексты для ONDA: главный экран сайта, описание продукта и подписи для соцсетей на русском и английском.",
      "en": "Finished copy for ONDA: a website hero, product description and social media captions in Russian and English."
    }
  },
  {
    "id": "website-help",
    "name": {
      "ru": "Помощь по сайту",
      "en": "Website help"
    },
    "title": {
      "ru": "Сайты, с которыми взаимодействуют.",
      "en": "Websites made for interaction."
    },
    "intro": {
      "ru": "Образовательный интерфейс, лендинг WordPress, конструктор украшений и браузерный инструмент. Реальные экраны и работающая логика.",
      "en": "An educational interface, a WordPress landing page, a jewellery configurator and a browser tool. Real screens and working functionality."
    }
  },
  {
    "id": "other",
    "name": {
      "ru": "Другое",
      "en": "More"
    },
    "title": {
      "ru": "Больше полезных решений.",
      "en": "More useful solutions."
    },
    "intro": {
      "ru": "Мобильный интерфейс для знакомства с астрономией и работающий инструмент для таблиц. Визуальная структура и практичная логика.",
      "en": "A mobile interface for exploring astronomy and a working table tool. Visual structure and practical functionality."
    }
  }
];

export const ondaCopy = {
  "hero": {
    "title": {
      "ru": "Уход в вашем ритме.",
      "en": "Care at your pace."
    },
    "body": {
      "ru": "Ежедневное увлажнение и несколько минут для себя.",
      "en": "Everyday hydration, with a little time for yourself."
    }
  },
  "product": {
    "title": {
      "ru": "Ежедневный увлажняющий крем",
      "en": "Daily Moisturising Cream"
    },
    "body": {
      "ru": "ONDA — увлажняющий крем для ежедневного ухода. Один понятный шаг в вашем ритуале, утром или вечером.",
      "en": "ONDA is a moisturising cream for everyday care. One simple step in your routine, morning or evening."
    }
  },
  "captions": [
    {
      "ru": "Пусть утро начнётся с вас. Несколько спокойных минут, привычный уход и новый день в своём ритме. ONDA — время для себя.",
      "en": "Start the morning with a moment for yourself. A few quiet minutes, your daily routine and a new day at your own pace. ONDA — time for you."
    },
    {
      "ru": "День был насыщенным. Вечер может быть простым: отложить телефон, выдохнуть и уделить себе немного внимания. Ваш ритуал с ONDA.",
      "en": "A busy day can end with a simple evening: put the phone down, take a breath and make a little space for yourself. Your routine with ONDA."
    }
  ]
};

export const projects = [
  {
    "id": "onda-identity",
    "brand": "ONDA",
    "vector": "onda-logo.svg",
    "categories": [
      "design"
    ],
    "type": {
      "ru": "Фирменный стиль / уход за кожей",
      "en": "Brand identity / skincare"
    },
    "title": {
      "ru": "Спокойствие с ярким акцентом.",
      "en": "Calm, with a bright accent."
    },
    "description": {
      "ru": "Пластичный логотип, волна и лавандово-лаймовая палитра. Айдентика, которая продолжается на упаковке.",
      "en": "A fluid wordmark, a wave and a lavender-and-lime palette. An identity that extends to packaging."
    },
    "tags": {
      "ru": [
        "Логотип",
        "Палитра",
        "Упаковка"
      ],
      "en": [
        "Wordmark",
        "Colour palette",
        "Packaging"
      ]
    },
    "images": [
      {
        "src": "onda-identity.png",
        "alt": {
          "ru": "Айдентика ONDA: логотип, волна, упаковка и лавандово-лаймовая палитра",
          "en": "ONDA identity: wordmark, wave, packaging and a lavender-and-lime palette"
        }
      }
    ],
    "tone": "lavender"
  },
  {
    "id": "ael",
    "brand": "AEL",
    "categories": [
      "website-help",
      "design"
    ],
    "type": {
      "ru": "Образовательный сайт / веб-интерфейс",
      "en": "Educational website / web interface"
    },
    "title": {
      "ru": "Знания с понятной навигацией.",
      "en": "A clear path to learning."
    },
    "description": {
      "ru": "Главный экран образовательного проекта и экран курса. Иерархия контента, навигация и визуальный язык обучения.",
      "en": "The homepage of an educational project and a course screen. Content hierarchy, navigation and a visual language for learning."
    },
    "tags": {
      "ru": [
        "Образование",
        "Веб-интерфейс",
        "Структура"
      ],
      "en": [
        "Education",
        "Web interface",
        "Structure"
      ]
    },
    "images": [
      {
        "src": "ael-home.jpg",
        "alt": {
          "ru": "Главная страница AEL с образовательным предложением и блоком тем обучения",
          "en": "AEL homepage with its learning proposition and a panel of course topics"
        }
      },
      {
        "src": "ael-course.jpg",
        "alt": {
          "ru": "AEL: экран образовательного курса",
          "en": "AEL educational course screen"
        }
      }
    ],
    "tone": "navy"
  },
  {
    "id": "forma-identity",
    "brand": "FORMA",
    "vector": "forma-logo.svg",
    "categories": [
      "design"
    ],
    "type": {
      "ru": "Фирменный стиль / архитектура",
      "en": "Brand identity / architecture"
    },
    "title": {
      "ru": "Геометрия как язык бренда.",
      "en": "Geometry as a brand language."
    },
    "description": {
      "ru": "Строгий знак, кобальтовый цвет и модульная сетка для архитектурного бюро.",
      "en": "A precise mark, cobalt blue and a modular grid for an architecture studio."
    },
    "tags": {
      "ru": [
        "Знак",
        "Типографика",
        "Носители"
      ],
      "en": [
        "Brand mark",
        "Typography",
        "Applications"
      ]
    },
    "images": [
      {
        "src": "forma-identity.png",
        "alt": {
          "ru": "Айдентика FORMA: геометрический знак, кобальтовая палитра и фирменные носители",
          "en": "FORMA identity: a geometric mark, cobalt palette and brand applications"
        }
      }
    ],
    "tone": "blue"
  },
  {
    "id": "floka",
    "brand": "FLOKA",
    "categories": [
      "website-help"
    ],
    "type": {
      "ru": "Лендинг / WordPress",
      "en": "Landing page / WordPress"
    },
    "title": {
      "ru": "Продукт на первом плане.",
      "en": "The product, front and centre."
    },
    "description": {
      "ru": "Лендинг мягких окон: выразительный первый экран, описание применения и навигация по продукту.",
      "en": "A landing page for transparent PVC curtains: a distinctive hero, product applications and clear page navigation."
    },
    "tags": {
      "ru": [
        "WordPress",
        "Лендинг",
        "Веб"
      ],
      "en": [
        "WordPress",
        "Landing page",
        "Web"
      ]
    },
    "images": [
      {
        "src": "floka-home.jpg",
        "alt": {
          "ru": "Первый экран сайта FLOKA: мягкие окна на веранде, заголовок и описание продукта",
          "en": "FLOKA website hero: transparent PVC curtains on a veranda, a headline and product description"
        }
      },
      {
        "src": "floka-usecases.jpg",
        "alt": {
          "ru": "FLOKA: раздел сайта с примерами применения мягких окон",
          "en": "FLOKA website section showing applications for transparent PVC curtains"
        }
      }
    ],
    "tone": "navy"
  },
  {
    "id": "onda-website",
    "brand": "ONDA",
    "categories": [
      "design",
      "website-help"
    ],
    "type": {
      "ru": "Веб-дизайн / интернет-магазин",
      "en": "Web design / online store"
    },
    "title": {
      "ru": "Лёгкость выбора.",
      "en": "A lighter shopping experience."
    },
    "description": {
      "ru": "Интернет-магазин ухода за кожей. Воздух в композиции, лавандовые акценты, широкий и мобильный форматы.",
      "en": "A skincare online store. Spacious layouts, lavender accents, and desktop and mobile formats."
    },
    "tags": {
      "ru": [
        "Веб-дизайн",
        "Интернет-магазин",
        "Адаптация"
      ],
      "en": [
        "Web design",
        "Online store",
        "Responsive layouts"
      ]
    },
    "images": [
      {
        "src": "onda-website.png",
        "alt": {
          "ru": "Дизайн интернет-магазина ONDA: широкий экран сайта и мобильная версия",
          "en": "ONDA online store design: desktop page and mobile layout"
        }
      }
    ],
    "tone": "lavender"
  },
  {
    "id": "vela-identity",
    "brand": "VELA",
    "vector": "vela-logo.svg",
    "categories": [
      "design"
    ],
    "type": {
      "ru": "Фирменный стиль / кафе",
      "en": "Brand identity / café"
    },
    "title": {
      "ru": "Тёплый характер.",
      "en": "A warm character."
    },
    "description": {
      "ru": "Знак пламени, выразительная антиква и терракотовая палитра. Фирменный стиль в деталях кафе.",
      "en": "A flame mark, expressive serif lettering and a terracotta palette. A café identity carried through its details."
    },
    "tags": {
      "ru": [
        "Логотип",
        "Палитра",
        "Меню"
      ],
      "en": [
        "Logo",
        "Colour palette",
        "Menu"
      ]
    },
    "images": [
      {
        "src": "vela-identity.png",
        "alt": {
          "ru": "Айдентика кафе VELA: знак пламени, логотип, чашка и меню в тёплой палитре",
          "en": "VELA café identity: flame mark, wordmark, cup and menu in a warm palette"
        }
      }
    ],
    "tone": "terracotta"
  },
  {
    "id": "lune",
    "brand": "LUNÉ",
    "categories": [
      "website-help",
      "design"
    ],
    "type": {
      "ru": "Веб-интерфейс / конфигуратор",
      "en": "Web interface / configurator"
    },
    "title": {
      "ru": "Украшение по вашим правилам.",
      "en": "Jewellery, assembled your way."
    },
    "description": {
      "ru": "Семь позиций, два типа крепления, выбор металла и длины. Стоимость меняется вместе с украшением.",
      "en": "Seven positions, two attachment styles, and a choice of metal and chain length. The price changes with the piece."
    },
    "detail": {
      "ru": "Перенос подвесок, проверка совместимости коллекций и пересчёт стоимости. Каталожные цены обновляются через CSV.",
      "en": "Move charms, check collection compatibility and see the price update. Catalogue prices can be updated with CSV."
    },
    "tags": {
      "ru": [
        "Интерфейс",
        "Совместимость",
        "Расчёт стоимости"
      ],
      "en": [
        "Interface",
        "Compatibility",
        "Price calculation"
      ]
    },
    "images": [
      {
        "src": "necklace-cover.jpg",
        "alt": {
          "ru": "Конструктор колье LUNÉ: подвески, цепочка, выбор металла и расчёт стоимости",
          "en": "LUNÉ necklace configurator: charms, chain, metal selection and price calculation"
        }
      }
    ],
    "video": "necklace-walkthrough.mp4",
    "tone": "sand"
  },
  {
    "id": "forma-website",
    "brand": "FORMA",
    "categories": [
      "design",
      "website-help"
    ],
    "type": {
      "ru": "Веб-дизайн / архитектурное бюро",
      "en": "Web design / architecture studio"
    },
    "title": {
      "ru": "Пространство для архитектуры.",
      "en": "Room for architecture."
    },
    "description": {
      "ru": "Сайт архитектурного бюро: крупная композиция, строгая сетка и кобальтовый акцент в двух форматах экрана.",
      "en": "An architecture studio website: bold composition, a precise grid and a cobalt accent in two screen formats."
    },
    "tags": {
      "ru": [
        "Веб-дизайн",
        "Сетка",
        "Адаптация"
      ],
      "en": [
        "Web design",
        "Grid",
        "Responsive layouts"
      ]
    },
    "images": [
      {
        "src": "forma-website.png",
        "alt": {
          "ru": "Дизайн сайта архитектурного бюро FORMA: широкий и мобильный экраны",
          "en": "FORMA architecture studio website design: desktop and mobile screens"
        }
      }
    ],
    "tone": "blue"
  },
  {
    "id": "orbit",
    "brand": "ORBIT",
    "categories": [
      "design",
      "other"
    ],
    "type": {
      "ru": "Мобильный интерфейс / астрономия",
      "en": "Mobile interface / astronomy"
    },
    "title": {
      "ru": "От знакомства с планетой к плану наблюдения",
      "en": "From curiosity to an observation plan"
    },
    "description": {
      "ru": "Обзор неба, страница Сатурна и план наблюдения. Три экрана с глубокой синей палитрой, векторными иллюстрациями и выразительной типографикой.",
      "en": "Discover the sky, explore Saturn and plan an observation. Three screens with a deep blue palette, vector illustrations and expressive typography."
    },
    "tags": {
      "ru": [
        "Мобильный UI",
        "Иллюстрация",
        "Три экрана"
      ],
      "en": [
        "Mobile UI",
        "Illustration",
        "Three screens"
      ]
    },
    "images": [
      {
        "src": {
          "ru": "orbit-interface-ru-v3.png",
          "en": "orbit-interface-en-v3.png"
        },
        "alt": {
          "ru": "ORBIT: три экрана астрономического интерфейса — обзор неба, Сатурн и план наблюдения",
          "en": "ORBIT: three astronomy interface screens — sky discovery, Saturn and an observation plan"
        }
      }
    ],
    "tone": "navy"
  },
  {
    "id": "vela-social",
    "brand": "VELA",
    "categories": [
      "ads-social",
      "design"
    ],
    "type": {
      "ru": "Соцсети / визуальный пакет",
      "en": "Social media / visual assets"
    },
    "title": {
      "ru": "Один стиль на каждой площадке.",
      "en": "One identity, three formats"
    },
    "description": {
      "ru": "Квадратная публикация, вертикальная история и горизонтальная обложка. Визуальная система VELA в трёх пропорциях.",
      "en": "A square post, a vertical story and a horizontal cover. VELA’s visual system in three proportions."
    },
    "tags": {
      "ru": [
        "Публикация",
        "История",
        "Обложка"
      ],
      "en": [
        "Post",
        "Story",
        "Cover"
      ]
    },
    "images": [
      {
        "src": "vela-social.png",
        "alt": {
          "ru": "Пакет соцсетей VELA: квадратная публикация, история 9:16 и горизонтальная обложка",
          "en": "VELA social media set: square post, 9:16 story and horizontal cover"
        }
      }
    ],
    "tone": "terracotta"
  },
  {
    "id": "onda-copy",
    "brand": "ONDA",
    "categories": [
      "writing",
      "ads-social"
    ],
    "type": {
      "ru": "Тексты для бренда / RU + EN",
      "en": "Brand copy / RU + EN"
    },
    "title": {
      "ru": "Уход в вашем ритме.",
      "en": "Care at your pace."
    },
    "description": {
      "ru": "Главный экран, описание крема и две публикации для соцсетей. Спокойный голос бренда на русском и английском.",
      "en": "A website hero, cream description and two social captions. A calm brand voice in Russian and English."
    },
    "tags": {
      "ru": [
        "Сайт",
        "Описание продукта",
        "Соцсети"
      ],
      "en": [
        "Website",
        "Product description",
        "Social media"
      ]
    },
    "visual": "copy",
    "tone": "lavender"
  },
  {
    "id": "csv-desk",
    "brand": "CSV Desk",
    "categories": [
      "everyday-tasks",
      "other",
      "website-help"
    ],
    "type": {
      "ru": "Работающий инструмент / данные",
      "en": "Working tool / data"
    },
    "title": {
      "ru": "Таблицы, без лишних шагов.",
      "en": "Tables, with fewer steps."
    },
    "description": {
      "ru": "Убирает лишние пробелы и точные повторы строк. CSV и TSV, просмотр результата и экспорт файла прямо в браузере.",
      "en": "Trim extra spaces and remove exact duplicate rows. CSV and TSV, a result preview and file export, directly in the browser."
    },
    "detail": {
      "ru": "Кавычки и переносы строк внутри ячеек сохраняются. Можно выбрать разделитель, а обработка происходит в текущей вкладке.",
      "en": "Quotes and line breaks inside cells are preserved. Choose a delimiter and process data in the current browser tab."
    },
    "tags": {
      "ru": [
        "CSV / TSV",
        "Очистка таблиц",
        "Локальная обработка"
      ],
      "en": [
        "CSV / TSV",
        "Table cleanup",
        "Local processing"
      ]
    },
    "visual": "csv",
    "link": "tools/csv-desk.html",
    "tone": "lime"
  }
];

export const copy = {
  "ru": {
    "pageTitle": "NabarakDev — дизайн и разработка",
    "pageDescription": "Андрей, NabarakDev. Дизайн и разработка: сайты, мобильные интерфейсы, фирменный стиль и инструменты для данных. 12 лет в разработке ПО.",
    "skip": "К содержимому",
    "navigation": "Главная навигация",
    "language": "Язык сайта",
    "navWork": "Работы",
    "navAbout": "Обо мне",
    "navContact": "Обсудить задачу ↗",
    "heroEyebrow": "Андрей / независимый специалист",
    "headline1": "Идеи",
    "headline2": "обретают",
    "headline3": "форму.",
    "heroIntro": "Выразительный дизайн и продуманная разработка. Создаю сайты, приложения и цифровые материалы, в которых форма работает вместе с логикой.",
    "explore": "Смотреть работы",
    "heroAlt": "ORBIT: три мобильных экрана с Сатурном, обзором неба и планом наблюдения в синей палитре",
    "heroArtLabel": "ORBIT / мобильный интерфейс",
    "stripDesign": "Дизайн",
    "stripWeb": "Веб-интерфейсы",
    "stripData": "Данные и автоматизация",
    "workEyebrow": "Визуальные решения. Работающие инструменты.",
    "workTitle": "Работы по направлениям.",
    "workIntro": "Сайты и интерфейсы, айдентика и тексты. Выберите то, что ближе к вашей задаче.",
    "categories": "Категории работ",
    "aboutEyebrow": "За визуальной формой — инженерный опыт.",
    "aboutTitle": "Внимание к форме. Понимание системы.",
    "aboutIntro": "Я Андрей. В разработке ПО — 12 лет. Мой опыт включает iOS, Android, Flutter, архитектуру и анализ требований.",
    "aboutBody": "Соединяю интерфейсы, данные и логику в цельные цифровые продукты. В портфолио — от фирменного знака и веб-страницы до интерактивного конфигуратора и инструмента для таблиц.",
    "expertiseArchitecture": "Архитектура и требования",
    "expertiseInterfaces": "Интерфейсы и автоматизация",
    "contactEyebrow": "От вашей идеи — к следующему проекту.",
    "contactTitle": "Давайте создадим что-то хорошее.",
    "contactIntro": "Задачи и сотрудничество — в моих профилях на площадках.",
    "footerRole": "Андрей / дизайн и разработка",
    "top": "Наверх",
    "projectLabel": "работа",
    "close": "Закрыть просмотр",
    "view": "Рассмотреть работу",
    "fullSize": "Открыть изображение целиком",
    "video": "Работа конструктора",
    "openTool": "Открыть CSV Desk",
    "openVector": "Открыть логотип в SVG",
    "websiteHero": "Главный экран сайта",
    "productCopy": "Описание продукта",
    "socialCopy": "Подписи для соцсетей",
    "morning": "Утро",
    "evening": "Вечер",
    "copyCardKicker": "СЛОВА, КОТОРЫЕ СОЗДАЮТ ОБРАЗ",
    "copyCardFooter": "Сайт · Продукт · Соцсети / RU + EN",
    "csvBadge": "РАБОТАЕТ В БРАУЗЕРЕ",
    "csvHeading": "Данные в порядке.",
    "csvBefore": "Исходная таблица",
    "csvAfter": "Чистый CSV",
    "csvColumn": [
      "Наименование",
      "Категория",
      "Цена"
    ],
    "csvRows": [
      [
        "Подвеска «Луна»",
        "Символы",
        "370"
      ],
      [
        "Цепочка, 45 см",
        "Основа",
        "2550"
      ],
      [
        "Звезда",
        "Символы",
        "350"
      ]
    ],
    "csvResult": "Пробелы убраны. Повторы удалены.",
    "heroSelected": "В ФОКУСЕ / 01",
    "heroMediaType": "UI / 3 ЭКРАНА",
    "storyTask": "Задача",
    "storyProcess": "Решение",
    "storyMethods": "Технологии и методы",
    "storyResult": "Результат",
    "mediaTitle": "Работа в деталях"
  },
  "en": {
    "pageTitle": "NabarakDev — design & development",
    "pageDescription": "Andrei, NabarakDev. Design and development: websites, mobile interfaces, brand identities and data tools. 12 years in software development.",
    "skip": "Skip to content",
    "navigation": "Main navigation",
    "language": "Website language",
    "navWork": "Work",
    "navAbout": "About",
    "navContact": "Discuss a project ↗",
    "heroEyebrow": "Andrei / independent specialist",
    "headline1": "Ideas,",
    "headline2": "brought",
    "headline3": "to life.",
    "heroIntro": "Expressive design and thoughtful development. I create websites, apps and digital assets that bring visual form and practical functionality together.",
    "explore": "Explore the work",
    "heroAlt": "ORBIT: three mobile screens with Saturn, sky discovery and an observation plan in a blue palette",
    "heroArtLabel": "ORBIT / mobile interface",
    "stripDesign": "Design",
    "stripWeb": "Web interfaces",
    "stripData": "Data & automation",
    "workEyebrow": "Visual solutions. Working tools.",
    "workTitle": "Work by discipline.",
    "workIntro": "Websites and interfaces, identities and words. Choose what is closest to your project.",
    "categories": "Work categories",
    "aboutEyebrow": "Engineering experience behind the visual form.",
    "aboutTitle": "An eye for form. A mind for systems.",
    "aboutIntro": "I'm Andrei, with 12 years in software development. My background includes iOS, Android, Flutter, architecture and requirements analysis.",
    "aboutBody": "I connect interfaces, data and functionality into cohesive digital products. The work here ranges from brand marks and web pages to an interactive configurator and a tool for tables.",
    "expertiseArchitecture": "Architecture & requirements",
    "expertiseInterfaces": "Interfaces & automation",
    "contactEyebrow": "From your idea to the next project.",
    "contactTitle": "Let’s make something good.",
    "contactIntro": "Find me on these platforms to discuss projects and work together.",
    "footerRole": "Andrei / design & development",
    "top": "Back to top",
    "projectLabel": "work",
    "close": "Close preview",
    "view": "Explore this project",
    "fullSize": "Open full-size image",
    "video": "Configurator walkthrough",
    "openTool": "Open CSV Desk",
    "openVector": "Open SVG logo",
    "websiteHero": "Website hero",
    "productCopy": "Product description",
    "socialCopy": "Social media captions",
    "morning": "Morning",
    "evening": "Evening",
    "copyCardKicker": "WORDS THAT SHAPE A BRAND",
    "copyCardFooter": "Website · Product · Social / RU + EN",
    "csvBadge": "RUNS IN YOUR BROWSER",
    "csvHeading": "Data, put in order.",
    "csvBefore": "Source table",
    "csvAfter": "Clean CSV",
    "csvColumn": [
      "Item",
      "Category",
      "Price"
    ],
    "csvRows": [
      [
        "Moon charm",
        "Symbols",
        "370"
      ],
      [
        "Chain, 45 cm",
        "Base",
        "2550"
      ],
      [
        "Star",
        "Symbols",
        "350"
      ]
    ],
    "csvResult": "Spaces trimmed. Duplicates removed.",
    "heroSelected": "IN FOCUS / 01",
    "heroMediaType": "UI / 3 SCREENS",
    "storyTask": "The task",
    "storyProcess": "The approach",
    "storyMethods": "Tools and methods",
    "storyResult": "The result",
    "mediaTitle": "A closer look"
  }
};

copy.ru.count = n => `${n} ${n % 10 === 1 && n % 100 !== 11 ? "работа" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? "работы" : "работ"}`;
copy.en.count = n => `${n} ${n === 1 ? "project" : "projects"}`;
