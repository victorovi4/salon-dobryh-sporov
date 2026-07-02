# Project workflow: «Причинили»

Этот репозиторий использует GitHub Issues как источник правды для задач, багов и агентской разработки.

## Labels

- `type:*` — тип задачи: bug, feature, content, infra, research.
- `area:*` — зона продукта/кода: frontend, backend, telegram, audio, cms, content-pipeline, design.
- `priority:*` — срочность: p0–p3.
- `status:*` — состояние: triage, ready, in-progress, blocked, review, qa.
- `agent:*` — кто ведёт задачу: hermes, codex, glm, human.

## Workflow

1. Создать issue через подходящий шаблон.
2. На triage назначить `type:*`, `area:*`, `priority:*`, `status:ready` или `status:blocked`.
3. Для разработки: branch → commit → PR.
4. В PR обязательно указать проверку, минимум `npm run build`.
5. Контентные изменения не публиковать без редакторского human review.

## Agent loop

Для агентских задач используем шаблон **Agent task**. Агент должен:

- прочитать релевантные файлы до правок;
- составить короткий план;
- внести изменения в ветке;
- запустить `npm run build` и другие релевантные проверки;
- открыть PR и связать его с issue;
- вернуть ошибки обратно в issue/PR, если QA не прошёл.
