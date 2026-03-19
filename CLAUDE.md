# NOMAD FINDER — Nomad Workshop

This is a **45-minute live coding demo** for non-technical entrepreneurs. The goal is to show four distinct levels of working with AI — from vibe coding to AI reasoning — by building a personal travel agent from scratch.

**What gets built:** Nomad Finder — a 3D spinning globe with live city data and an AI recommendation wizard that picks your perfect next city.

---

## The Four-Prompt Demo

| # | What you build | What you're teaching |
|---|---------------|---------------------|
| 1 | Basic webpage | Vibe coding — describe it, get it |
| 2 | Full visual system + 3D globe | Skills — saved expertise |
| 3 | Click a city → live API data | APIs — connected tools |
| 4 | AI wizard picks your city | AI reasoning — it decides |

---

## Prompts

Exact prompts are in `lesson/PROMPTS.md`. Use Whispr Flow to dictate them.

---

## Guard Rails

- No Plan Mode — this demo shows skill, not planning
- Prompt 2 starts with `/website-designer` — the skill does the visual heavy lifting
- Globe.gl must have explicit `width`/`height` on its container — without it the globe won't render
- `autoRotate` must be set **after** globe init, not in the constructor chain
- Wizard submit button must use `.btn-submit`, not `.btn-next` — or it gets permanently disabled on wizard reset
- API keys live in `.env` (gitignored) — never hardcode in index.html

---

## Backup Hierarchy

1. One fix prompt: "Read `lesson/IMPLEMENTATION-GUIDE.md` and fix [specific thing]."
2. Open `backup/promptN-result.html` — the last clean snapshot
3. Emergency: open `backup/prompt4-result.html` directly and demo that

**Emergency git recovery:**
```bash
git checkout solution -- index.html
```

---

## Files

| File | Purpose |
|------|---------|
| `lesson/PROMPTS.md` | The 4 prompts — copy-paste or dictate |
| `lesson/IMPLEMENTATION-GUIDE.md` | Full reference CSS + Netlify function code |
| `lesson/LESSONS-LEARNED.md` | Dry run findings |
| `lesson/WORKSHOP.md` | Master teaching doc — narration, key lines, concept talking points |
| `website-designer/SKILL.md` | Visual design skill — applied via `/website-designer` |
| `.claude/commands/prep.md` | Day-of setup slash command |
| `.claude/commands/snapshot.md` | Save current index.html to backup/ |
| `.claude/commands/website-designer.md` | Skill invocation command |
| `backup/` | Per-prompt HTML snapshots |
| `.env` | API keys — never committed |

---

## API Keys Needed

All in `.env` (gitignored):
```
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
OPENWEATHER_API_KEY=...
```

Run locally: `netlify dev` (port 3999)
Kill node first: `taskkill //F //IM node.exe //T`
