# Салон добрых споров

MVP статического сайта на Astro для публикации литературных очерков НКО-сектора.

## Запуск

```bash
npm install
npm run dev
```

Локальный адрес по умолчанию: `http://localhost:4321/`.

## Сборка

```bash
npm run build
npm run preview
```

## Структура

- `src/pages/` — страницы сайта: главная, очерки, стили, выпуски, о проекте.
- `src/content/essays/` — markdown-очерки.
- `src/content/styles/` — карточки литературных голосов.
- `src/content/topics/` — выпуски/темы.
- `src/styles/global.css` — визуальная система «Салон добрых споров».

## Готовые страницы

- `/` — главная.
- `/essays/` — список очерков.
- `/essays/ctr-sostradaniya/` — пример страницы очерка.
- `/styles/` — каталог стилей.
- `/topics/` — список выпусков.
- `/topics/kto-vladeet-dobrom/` — страница выпуска.
- `/about/` — о проекте.
