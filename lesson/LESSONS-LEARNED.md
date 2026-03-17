# Lessons Learned — Nomad Finder

---

## Dry Run #1 — 2026-03-16

### ✅ What worked well
- Globe.gl with blue marble texture is visually stunning — clear gasp moment
- 3-column layout (city list / globe / results) keeps everything on one screen, no scrolling
- Accordion cards (where to stay, visa, budget, stats) feel like a real travel agent briefing
- Wizard modal with 4 quick questions is much better than a freeform text box for a stage audience
- Globe zooming to a city and stopping rotation is satisfying and clear
- Selected city dot turning white while others dim gives clear visual focus
- `.env.local` API key approach worked cleanly with Netlify Dev

### 🔧 What to fix

**Pure black background is hard to read on projector**
→ Use `#1a2332` (dark navy) — readable from the back row, still feels premium

**Globe emoji in gradient title renders as a blue blob**
→ Always separate the emoji into its own `<span>` outside the gradient span

**"Find My Match" button hidden below the fold**
→ Button must be visible without scrolling — place it in the header area above the main layout

**Clicking globe dots is fiddly — tiny targets**
→ City list on the left is the primary interaction point. Globe clicks still work but aren't the main CTA

**Globe keeps rotating after city is selected**
→ Call `globe.controls().autoRotate = false` on every city selection

**Port conflicts when restarting Netlify Dev**
→ Always run `taskkill //F //IM node.exe //T` before starting `netlify dev`
→ If port 3999 still occupied after killing node, find and kill PID directly: `netstat -ano | grep 3999` then `taskkill //F //PID [pid]`

**Freeform text input feels lost and unclear**
→ Resolved: 3 structured quick-pick steps (budget / vibe / region) + 1 free text field. Structured steps give audience participation and visual cards; free text is where "it knows you" lands. Pre-script the demo answer and load into Whispr Flow before going live.

### 🎯 Action items for Dry Run #2
- [ ] Test the full 4-prompt sequence from a clean slate — P2 now uses `/website-designer` skill, not a long paste
- [ ] Verify `/website-designer` skill produces the animated gradient + marquee + globe correctly
- [ ] Verify Globe.gl CDN loads reliably — have fallback SVG map prompt ready
- [ ] Test P3 city click → live API call → weather + nomad data renders correctly
- [ ] Test P4 wizard with pre-scripted demo answer — confirm globe flies to Bali or Chiang Mai
- [ ] Verify all 3 API keys in .env.local: ANTHROPIC_API_KEY, OPENAI_API_KEY, OPENWEATHER_API_KEY
- [ ] Time each prompt — target: P1 4min, P2 8min, P3 10min, P4 15min, Q&A 5min
- [ ] Run /prep before starting — confirms clean slate + all backups present
