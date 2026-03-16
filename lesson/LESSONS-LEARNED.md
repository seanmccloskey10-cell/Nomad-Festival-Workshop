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
→ Replaced with wizard modal — much better for stage demo and makes the AI feel more intentional

### 🎯 Action items for Dry Run #2
- [ ] Test the full 4-prompt sequence from a clean slate (no existing files)
- [ ] Verify Globe.gl CDN loads reliably — have fallback SVG map prompt ready
- [ ] Test AI wizard with real inputs — confirm city name appears in AI response (required for globe zoom)
- [ ] Check all 8 cities render visa/budget/neighbourhood data correctly
- [ ] Time each prompt — target 5 min per prompt including explanation
- [ ] Consider adding a subtle glow/pulse to the "Find My Perfect City" button so it draws the eye
