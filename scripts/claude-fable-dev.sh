#!/usr/bin/env bash
set -euo pipefail

# Run Claude Code as the coding subagent for this project using the user's
# Claude Max subscription login. This intentionally does NOT use --bare and
# does not set ANTHROPIC_API_KEY, so Claude Code should route through the
# authenticated subscription account shown by `claude auth status --text`.

MODEL="${CLAUDE_MODEL:-fable}"
MAX_TURNS="${CLAUDE_MAX_TURNS:-12}"
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ $# -eq 0 ]]; then
  cat >&2 <<'USAGE'
Usage:
  scripts/claude-fable-dev.sh "<coding task>"

Optional env:
  CLAUDE_MODEL=fable|sonnet|opus|haiku|claude-fable-5
  CLAUDE_MAX_TURNS=12

Example:
  scripts/claude-fable-dev.sh "Improve the homepage hero. Run npm run build."
USAGE
  exit 2
fi

cd "$PROJECT_DIR"

echo "== Claude Code auth =="
claude auth status --text

echo
printf '== Running Claude Code model=%s max_turns=%s ==\n' "$MODEL" "$MAX_TURNS"

TASK="$*"

claude -p "$(cat <<PROMPT
You are the Claude Code coding subagent for the Astro site «Причинили».

Use the project context in CLAUDE.md.

Task from the orchestrator:
$TASK

Requirements:
- Preserve the brand: «Причинили» / «Из чата — в очерк».
- Keep Astro content collections valid.
- Do not publish, deploy, or push unless explicitly asked.
- Do not expose private chat logs or personal data.
- After modifications, run: npm run build
- At the end, summarize changed files and verification.
PROMPT
)" \
  --model "$MODEL" \
  --max-turns "$MAX_TURNS"
