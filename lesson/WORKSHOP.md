# Nomad Finder — Workshop Master Doc

**Format:** 45 minutes · 4 prompts · live build · non-technical audience
**What we build:** A personal AI travel agent — 3D spinning globe, live city data, and a wizard that recommends your perfect next city.

---

## The Story Arc

Each prompt isn't just a feature. It's a different level of working with AI.

| # | What you build | What you're teaching | One-line lesson |
|---|---------------|---------------------|-----------------|
| 1 | A basic webpage | Vibe coding | "You described it. Claude built it." |
| 2 | Full visual transformation | Skills — saved expertise | "A specialist in a box." |
| 3 | Live city data on click | APIs — connected tools | "The page reaches out to the internet." |
| 4 | AI recommendation wizard | AI reasoning — it decides | "It doesn't just know things. It knows you." |

---

## The Four Prompts

### Prompt 1 — Foundation
**Teach while it builds:** Vibe coding. Natural language → working code. No setup, no IDE, no Stack Overflow. You described what you wanted and got it. That's the shift.

**The action after:** Open it in a browser. Say: *"That's your first webpage. Now watch what happens when we ask for more."* The ugliness is intentional — the worse it looks, the more dramatic the next step.

**Key line:**
> *"Most people spend two weeks scoping a project before a developer touches it. We just built something in 30 seconds. That's not a small difference — that's a different business model."*

---

### Prompt 2 — Design + Globe (via `/style` skill)
**How it's invoked:** Not a long prompt. One word: `/style`. Claude reads the skill file and transforms the page.

**Teach while it builds:** Skills. You defined a visual system once — fonts, gradients, animations, layout — and saved it as a skill. A specialist in a box. Show the SKILL.md file on screen: *"This is all it is. A text file with instructions. That's the power."*

**The action after:** Let the globe spin for 3 full seconds before touching anything. Then point: *"Claude chose the font. Claude chose the colour system. Claude built the 3D globe. One word."* Then point at the button: *"That button does nothing yet."*

**Key lines:**
> *"A skill is saved expertise. Your brand guidelines as a skill. Your onboarding process as a skill. Your code review checklist as a skill. You define it once — Claude applies it anywhere. That's intellectual property."*

> *"This took a developer 3–4 weeks to quote, spec, and deliver. We did it in 5 minutes. But also — the cost. A senior developer charges £500–800 a day. We just used maybe 2p of API."*

---

### Prompt 3 — Interactivity + Live Data
**Teach while it builds:** APIs. The page is no longer static — it reaches out to OpenWeatherMap and Anthropic every time you click a city. Real weather. Live data. The app is connected to the internet.

**The action after:** Click Tbilisi. Wait for the loading state. Show the result. Open the visa section. Read out loud: *"365 days visa-free — stay a full year, zero paperwork."* Then: *"That's live. Claude generated that from the API call, right now."*

Also: **security moment.** Point to the Netlify function.
> *"Notice the API key is never in the HTML. It lives in a server-side function. The browser calls our function, our function calls Anthropic, our function returns the data. The key is invisible to the user. This is the right pattern for any app that uses external APIs."*

**Key line:**
> *"In Prompt 2 we gave Claude creativity. In Prompt 3 we gave it a connection. The page is no longer a brochure — it's a tool."*

---

### Prompt 4 — AI Recommendation Wizard
**Teach while it builds:** AI reasoning. There's a difference between asking AI *what is* and asking AI *what should I*. Prompt 3 is a reference book. Prompt 4 is an advisor.

**The action — audience participation:**
1. Click "✨ Find My Perfect City"
2. Ask someone in the room: "What's your budget?" — click their answer
3. "What vibe?" — click it
4. "What region?" — click it
5. Free text — speak the pre-scripted answer via Wispr:
   > *"I'm a burnt-out designer, been in London four years. I need warmth, a beach nearby, good coffee shops, and decent WiFi. Budget around £1,200 a month, want somewhere I can actually slow down."*
6. Watch the globe fly. This is the climax.

**Key line:**
> *"We didn't filter. We didn't search. We described a person — and the AI made a decision. That's the difference between a tool and an advisor."*

---

## Concept Talking Points

Use these in the gaps while prompts are building. Pick 2–3, don't try to fit all of them.

**Context is everything**
The quality of what AI produces is exactly proportional to the quality of context you give it. Prompt 1 and Prompt 2 demonstrate this live. More context → better output. This is the foundational skill of the AI era — not coding. Describing.

**The skill pyramid**
Four levels of working with AI. Most people only ever use level one.
- Level 1: Describe → get output
- Level 2: Save expertise → invoke it (skills)
- Level 3: Connect to the world → live data (APIs)
- Level 4: Give it agency → let it decide (reasoning)
Today you've seen all four.

**Speed and cost**
What we built today: 3–4 developer weeks → 45 minutes. £500–800/day developer rate → 2p of API. This isn't a small efficiency gain. It changes who can build things and what's worth building.

**Skills as IP**
A well-written skill is intellectual property. Your brand guidelines. Your review process. Your onboarding checklist. These are competitive advantages — and they took 20 minutes to write.

**You are still the architect**
AI removes the execution barrier. It doesn't replace taste, judgment, or knowing what you want. The people who get the most out of this are the ones who can describe precisely what they're after. That's a creative skill, not a technical one.

**Where it breaks (credibility moment)**
AI is not good at: security-critical code without review, decisions requiring true domain expertise and accountability, long-running complex systems. It's a collaborator, not a replacement. Saying this makes everything else you said more believable.

---

## Demo Moves (what to do after each prompt)

| After | Do this |
|-------|---------|
| P1 | Open in browser. Pause. "That's your first webpage." |
| P2 | Let globe spin 3s. Point at title. Point at dead button. |
| P3 | Click Tbilisi. Read visa line out loud. Show loading state. |
| P4 | Audience picks answers. Speak free text via Wispr. Watch globe fly. |

---

## Fallback Hierarchy

If something breaks:
1. One fix prompt: *"Read lesson/IMPLEMENTATION-GUIDE.md and fix [specific thing]."*
2. Open `backup/promptN-result.html` — the last clean snapshot
3. If all else fails, open `backup/prompt4-result.html` and demo that

Never retry the same broken approach twice. One fix attempt, then open the snapshot.

---

## API Keys Needed

All in `.env.local` (gitignored — never committed):
```
ANTHROPIC_API_KEY=sk-ant-...     ← primary for P3 + P4
OPENAI_API_KEY=sk-...            ← fallback
OPENWEATHER_API_KEY=...          ← live weather in P3
```

Run locally: `netlify dev` (port 3999)
Kill node first: `taskkill //F //IM node.exe //T`

---

## Day-Of

Run `/prep` in Claude Code. It will:
- Kill node processes
- Delete index.html (clean slate)
- Check all 4 backup snapshots exist
- Display all 4 prompts ready to go

---

## Files

| File | Purpose |
|------|---------|
| `lesson/PROMPTS.md` | The 4 prompts — copy-paste or dictate |
| `lesson/IMPLEMENTATION-GUIDE.md` | Reference CSS + function code Claude reads |
| `lesson/LESSONS-LEARNED.md` | What worked / what to fix — updated after each dry run |
| `.claude/commands/style.md` | The skill invoked in Prompt 2 *(to be created)* |
| `.claude/commands/prep.md` | Day-of checklist slash command |
| `.claude/commands/snapshot.md` | Save current index.html to backup/ |
| `backup/` | Per-prompt HTML snapshots |
| `.env.local` | API keys — never committed |
| `.env.local.example` | Template showing required keys |
