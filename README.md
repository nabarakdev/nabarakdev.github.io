# Andrey Karaban — Agentic Systems & Software Architecture

[Portfolio / EN](https://nabarakdev.github.io/?lang=en) · [Портфолио / RU](https://nabarakdev.github.io/?lang=ru) · [LinkedIn](https://www.linkedin.com/in/andrey-karaban-18384340b/)

Enterprise agentic systems and software delivery automation are my priority. Over the past year, I have designed and configured workflows connecting a Jira task link to implementation, validation and a Merge Request ready for publication, with engineering oversight throughout.

## Featured engineering case

**[Jira → Merge Request: Enterprise Agentic Delivery](cases/agentic-delivery/README.md)**

- [Visual case study](https://nabarakdev.github.io/case-agentic.html?lang=en)
- [Architecture and Mermaid diagrams](cases/agentic-delivery/docs/architecture.md)
- [Executable educational demonstration](cases/agentic-delivery/demo/README.md)
- [Русская версия кейса](cases/agentic-delivery/README.ru.md)

## Background

Software engineering since 2014; iOS, mobile architecture, CTO and technical leadership experience. Led teams delivering Tenge Bank (Swift / Kotlin), MBANK (Flutter) and MTS Belarus from version 3.0 (Flutter). My development background includes Objective-C, Swift, Core Data, asynchronous programming and third-party integrations.

## Run locally

```sh
python3 -m http.server 8877
```

Open `http://localhost:8877/?lang=en`. The site is static HTML, CSS and JavaScript, served with GitHub Pages; no build step is needed. The core content remains readable without JavaScript. Language selection is encoded in the URL. All 20 existing projects are available on the main page with category filters and detailed media views. The previous catalogue is also retained in [creative.html](creative.html).

```sh
node cases/agentic-delivery/demo/run.mjs --approve-implementation
```

The example requires Node.js 20+ and writes only to the ignored `.demo-output/` directory. It uses synthetic data and prepared templates to reproduce the local engineering workflow. Corporate code, credentials, internal URLs and conversation history are not included.
