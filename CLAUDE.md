# Причинили — project context for Claude Code

## Product

«Причинили» is an Astro editorial/media site. Tagline: **«Из чата — в очерк»**.

The core editorial model:

- source: a real/anonymized professional Telegram chat log from `#причини_чат`;
- unit of publication: one connected problematic theme from the log;
- format: seven authorial readings/voices of the same problem;
- goal: not to restyle one synopsis seven times, but to let each voice extract a different layer from the log.

Current public framing:

> Медиа, где одна проблематика из живого лога становится семью авторскими голосами: литературными очерками и деловым разбором.

## Tech stack

- Astro static site
- Markdown content collections
- Global CSS in `src/styles/global.css`
- No React/Svelte unless there is a strong reason

Important paths:

- `src/content/topics/` — issues/problems from chat logs
- `src/content/essays/` — essays for author voices
- `src/content/styles/` — author optics/voice cards
- `src/pages/index.astro` — homepage
- `src/pages/about.astro` — project explanation
- `src/pages/styles/index.astro` — author optics page
- `src/content.config.ts` — content schemas

## Commands

```bash
npm run build
npm audit --omit=dev
npm run dev -- --host 127.0.0.1 --port 4321
```

Always run `npm run build` after code/content changes.

## Editorial voices

There are 7 persistent voices:

1. Чехов — human awkwardness, fatigue, quiet scene.
2. Толстой — self-justification, moral concession, “иначе нельзя”.
3. Достоевский — guilt, power, painful contradiction.
4. Пушкин — aphoristic mini-poem / compressed formula.
5. Пелевин — digital substitution, metrics, interfaces.
6. Ильф и Петров — bureaucratic/institutional satire.
7. Деловая публицистика — structure, stakes, scenarios.

When editing or generating essays, use the raw/anonymized log as the primary source. Light technical markup is only a navigator. The essay is an authorial reading.

Avoid repetitive essays where every voice retells the same plot. Each voice must extract a different layer from the log.

## Brand rules

- Main name: **Причинили**
- Tagline: **Из чата — в очерк**
- Do not use **«Салон добрых споров»** as the product framing/tagline.
- Russian language only for public copy.
- Tone: sharp, editorial, concise; not fluffy.

## Safety/privacy

- Do not include raw private chat logs in published content.
- Do not publish names, usernames, phone numbers, emails, or direct identifying details from closed chats.
- Use anonymized roles and paraphrases unless explicit permission exists.
- No publication without editor approval.

## Development workflow

When asked to modify the site:

1. Inspect the relevant files before editing.
2. Keep Astro content collections valid.
3. Update all related copy/counts if the editorial model changes.
4. Run `npm run build`.
5. Summarize changed files and verification.

Do not deploy by yourself unless the orchestrator explicitly asks for deployment.
