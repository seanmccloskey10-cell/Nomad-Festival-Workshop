# Implementation Guide — Nomad Finder

---

## Prompt 1 — Foundation

### Build exactly this:
- Single `index.html` file
- Title: "Nomad Finder"
- Subtitle: "Find your perfect next city"
- Background: `#1a2332` (dark navy — readable from the back of a room)
- White text, system font, minimal padding
- No placeholder div needed — just title + subtitle

### Do NOT build yet:
- Any design beyond basic colours
- Globe
- City list
- Any interactivity

### Why keep it ugly:
The contrast between Prompt 1 and Prompt 2 IS the lesson. The more basic it looks, the more dramatic the transformation feels.

---

## Prompt 2 — Design + Globe

### Page structure

```
[nav — fixed frosted glass]
[.hero — animated gradient section]
  Title + subtitle + "✨ Find My Perfect City" button
[.marquee-bar — dark scrolling city stats]
[.main — flex row, fills remaining viewport height]
  [city list 220px] | [globe 500px] | [results panel flex-1]
```

- `body` is flex column, `height: 100vh`, `overflow: hidden`
- `main` fills remaining height with `flex: 1`, `overflow: hidden`

---

### Reference CSS — use these exactly

**Typography + CSS variables:**
```css
/* Google Fonts — add to <head> */
/* <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"> */

:root {
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body:    'Inter', sans-serif;
  --cyan:   #00d4ff;
  --purple: #a855f7;
  --navy:   #0a1020;
}

body { font-family: var(--font-body); background: var(--navy); color: #fff; }

h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
```

**Animated gradient hero:**
```css
.hero {
  background: linear-gradient(-45deg, #0f172a, #0ea5e9, #7c3aed, #db2777, #f59e0b, #0ea5e9);
  background-size: 500% 500%;
  animation: gradient-shift 18s ease infinite;
  padding: 72px 24px 32px;
  text-align: center;
}

@keyframes gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 0.92;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 4px 32px rgba(0,0,0,0.3);
  margin-bottom: 10px;
}

.hero-sub {
  font-size: 16px;
  color: rgba(255,255,255,0.75);
  font-weight: 500;
  margin-bottom: 24px;
}
```

**IMPORTANT — emoji + gradient title:** Separate the 🌍 emoji from the gradient `<span>`:
```html
<!-- ✅ correct -->
<h1 class="hero-title">🌍 <span style="background: linear-gradient(135deg,#00d4ff,#a855f7); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">Nomad Finder</span></h1>

<!-- ❌ wrong — emoji renders as blue blob -->
<h1 style="background: linear-gradient(...)">🌍 Nomad Finder</h1>
```

**Frosted glass nav:**
```css
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 14px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
```

**"✨ Find My Perfect City" button — frosted glass style (restraint rule: no gradient on buttons):**
```css
.btn-find {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 50px;
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.35);
  color: #fff;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
}
.btn-find:hover {
  background: rgba(255,255,255,0.28);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
```

**City stats marquee:**
```css
.marquee-bar {
  background: #060b14;
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  flex-shrink: 0;
}
.marquee-wrap { display: flex; overflow: hidden; }
.marquee-track {
  display: flex;
  flex-shrink: 0;
  animation: marquee-scroll 32s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }
@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.marquee-item {
  display: flex;
  align-items: center;
  padding: 13px 28px;
  white-space: nowrap;
  flex-shrink: 0;
  gap: 10px;
  border-right: 1px solid rgba(255,255,255,0.06);
}
.m-city { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.9); }
.m-meta { font-size: 12px; color: rgba(255,255,255,0.4); }
.m-dot  { color: rgba(255,255,255,0.15); padding: 0 12px; font-size: 10px; }
```

Marquee HTML structure — two identical sets for seamless loop:
```html
<div class="marquee-bar">
  <div class="marquee-wrap">
    <div class="marquee-track">
      <!-- Set 1 -->
      <div class="marquee-item"><span class="m-city">🇮🇩 Bali</span><span class="m-meta">$1,200/mo · Beach</span></div>
      <span class="m-dot">◆</span>
      <div class="marquee-item"><span class="m-city">🇵🇹 Lisbon</span><span class="m-meta">$2,200/mo · City</span></div>
      <span class="m-dot">◆</span>
      <div class="marquee-item"><span class="m-city">🇹🇭 Chiang Mai</span><span class="m-meta">$900/mo · Culture</span></div>
      <span class="m-dot">◆</span>
      <div class="marquee-item"><span class="m-city">🇨🇴 Medellín</span><span class="m-meta">$1,400/mo · City</span></div>
      <span class="m-dot">◆</span>
      <div class="marquee-item"><span class="m-city">🇲🇽 Mexico City</span><span class="m-meta">$1,800/mo · City</span></div>
      <span class="m-dot">◆</span>
      <div class="marquee-item"><span class="m-city">🇵🇹 Porto</span><span class="m-meta">$1,900/mo · Culture</span></div>
      <span class="m-dot">◆</span>
      <div class="marquee-item"><span class="m-city">🇹🇭 Bangkok</span><span class="m-meta">$1,100/mo · City</span></div>
      <span class="m-dot">◆</span>
      <div class="marquee-item"><span class="m-city">🇬🇪 Tbilisi</span><span class="m-meta">$1,000/mo · Culture</span></div>
      <span class="m-dot">◆</span>
      <!-- Set 2 — identical, aria-hidden -->
      <div class="marquee-item" aria-hidden="true"><span class="m-city">🇮🇩 Bali</span><span class="m-meta">$1,200/mo · Beach</span></div>
      <span class="m-dot" aria-hidden="true">◆</span>
      <div class="marquee-item" aria-hidden="true"><span class="m-city">🇵🇹 Lisbon</span><span class="m-meta">$2,200/mo · City</span></div>
      <span class="m-dot" aria-hidden="true">◆</span>
      <div class="marquee-item" aria-hidden="true"><span class="m-city">🇹🇭 Chiang Mai</span><span class="m-meta">$900/mo · Culture</span></div>
      <span class="m-dot" aria-hidden="true">◆</span>
      <div class="marquee-item" aria-hidden="true"><span class="m-city">🇨🇴 Medellín</span><span class="m-meta">$1,400/mo · City</span></div>
      <span class="m-dot" aria-hidden="true">◆</span>
      <div class="marquee-item" aria-hidden="true"><span class="m-city">🇲🇽 Mexico City</span><span class="m-meta">$1,800/mo · City</span></div>
      <span class="m-dot" aria-hidden="true">◆</span>
      <div class="marquee-item" aria-hidden="true"><span class="m-city">🇵🇹 Porto</span><span class="m-meta">$1,900/mo · Culture</span></div>
      <span class="m-dot" aria-hidden="true">◆</span>
      <div class="marquee-item" aria-hidden="true"><span class="m-city">🇹🇭 Bangkok</span><span class="m-meta">$1,100/mo · City</span></div>
      <span class="m-dot" aria-hidden="true">◆</span>
      <div class="marquee-item" aria-hidden="true"><span class="m-city">🇬🇪 Tbilisi</span><span class="m-meta">$1,000/mo · Culture</span></div>
      <span class="m-dot" aria-hidden="true">◆</span>
    </div>
  </div>
</div>
```

**City list cards:**
```css
.city-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 12px 14px;
  cursor: pointer;
  margin-bottom: 6px;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}
.city-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,212,255,0.12);
  border-color: rgba(0,212,255,0.25);
}
.city-card.active {
  border-color: var(--cyan);
  background: rgba(0,212,255,0.07);
}
```

**Globe (reference — use exactly this sequence):**
```js
const globe = Globe()
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  .backgroundColor('rgba(0,0,0,0)')
  .pointsData(cities)
  .pointLat('lat')
  .pointLng('lng')
  .pointColor(() => '#00d4ff')
  .pointAltitude(0.02)
  .pointRadius(0.6)
  (document.getElementById('globe-container'));

// MUST be set after init
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.6;
globe.controls().enableZoom = false;
```

Globe container: `width: 500px; height: 500px` — explicit size required or globe won't render.

**City data — use exactly this:**
```js
const cities = [
  { name: "Bali",        country: "🇮🇩", lat: -8.4095,  lng: 115.1889, cost: 1200, wifi: 7,  vibe: "Beach",   desc: "Spiritual surf culture, cheap living, strong nomad community" },
  { name: "Lisbon",      country: "🇵🇹", lat: 38.7169,  lng: -9.1395,  cost: 2200, wifi: 9,  vibe: "City",    desc: "Europe's sunniest capital, startup scene, incredible food" },
  { name: "Chiang Mai",  country: "🇹🇭", lat: 18.7883,  lng: 98.9853,  cost: 900,  wifi: 8,  vibe: "Culture", desc: "Temples, mountains, the original nomad hub, ultra cheap" },
  { name: "Medellín",    country: "🇨🇴", lat: 6.2442,   lng: -75.5812, cost: 1400, wifi: 7,  vibe: "City",    desc: "Eternal spring climate, buzzing social scene, affordable" },
  { name: "Mexico City", country: "🇲🇽", lat: 19.4326,  lng: -99.1332, cost: 1800, wifi: 8,  vibe: "City",    desc: "World-class food, culture, massive expat community" },
  { name: "Porto",       country: "🇵🇹", lat: 41.1579,  lng: -8.6291,  cost: 1900, wifi: 9,  vibe: "Culture", desc: "Wine, cobblestones, slower pace, Lisbon's cooler sibling" },
  { name: "Bangkok",     country: "🇹🇭", lat: 13.7563,  lng: 100.5018, cost: 1100, wifi: 9,  vibe: "City",    desc: "Insane food, fast internet, 24/7 energy, visa-friendly" },
  { name: "Tbilisi",     country: "🇬🇪", lat: 41.6938,  lng: 44.8015,  cost: 1000, wifi: 8,  vibe: "Culture", desc: "Underrated gem, Georgian wine, remote-work visa, tiny crowds" }
];
```

**Results panel — empty state:**
```html
<div class="results-empty">
  <div style="font-size:2.5rem; margin-bottom:12px;">✨</div>
  <div style="color:rgba(255,255,255,0.5); font-size:14px; line-height:1.6;">
    Pick a city or let AI choose
  </div>
</div>
```

### Do NOT build yet:
- Click interactions (city list or globe dots)
- Accordion cards
- Wizard modal
- AI call

---

## Prompt 3 — Interactivity

### Build exactly this:

**City list click → globe zooms:**
```js
globe.pointOfView({ lat: city.lat, lng: city.lng, altitude: 1.5 }, 1000);
globe.controls().autoRotate = false;
globe.pointColor(d => d.name === city.name ? '#ffffff' : 'rgba(0,212,255,0.3)');
```
- Selected city dot turns white, others dim — clear visual focus
- Globe clicks also trigger the same behaviour

**Right panel — city card + 4 accordions:**
- Top card: flag, city name, description (styled with cyan tint border)
- 4 accordion items below, click header to expand

**Accordion content — hardcode all 8 cities:**

*🏨 Where to Stay:*
- Bali: Canggu ($400/mo), Seminyak ($600/mo), Ubud ($350/mo)
- Lisbon: Mouraria (€800/mo), Cascais, LX Factory area
- Chiang Mai: Nimman ($300/mo), Old City, Hang Dong
- Medellín: El Poblado ($500/mo), Laureles, Envigado
- Mexico City: Roma Norte ($600/mo), Condesa, Coyoacán
- Porto: Bonfim (€600/mo), Ribeira, Foz do Douro
- Bangkok: Silom/Sathorn ($400/mo), Ari, Sukhumvit
- Tbilisi: Vera ($300/mo), Old Town, Vake

*🛂 Visa Info (UK Residents):*
- Bali: 30 days on arrival, extendable to 60. Digital Nomad Visa up to 5 years
- Lisbon/Porto: 90 days Schengen visa-free. D8 Digital Nomad Visa (requires €760/mo)
- Chiang Mai/Bangkok: 30 days on arrival. Thailand LTR Visa (10 years, $80k+ p/a)
- Medellín: 90 days visa-free, extendable 90 more. 180 days/year total
- Mexico City: 180 days visa-free — one of the world's most generous
- Tbilisi: 365 days visa-free — stay a full year, zero paperwork

*💰 Monthly Budget:*
- Show: Rent, Food, Coworking, Transport, SIM, **Total**
- Bali: $800–1,200 | Lisbon: €1,500–2,200 | Chiang Mai: $600–900
- Medellín: $800–1,400 | Mexico City: $1,100–1,800 | Porto: €1,200–1,900
- Bangkok: $800–1,300 | Tbilisi: $600–1,000

*📶 Nomad Stats:*
- WiFi score (out of 10), affordability stars, community size, English spoken

### Do NOT build yet:
- The wizard modal
- AI call

---

## Prompt 4 — AI Wizard

### Build exactly this:

**"✨ Find My Perfect City" button:**
- Already visible from Prompt 2 but non-functional — now wire it up
- Gradient pill button: `linear-gradient(135deg, #00d4ff, #a855f7)`
- Opens the wizard modal on click

**Wizard modal:**
- Dark overlay with blur: `rgba(10,16,26,0.85)` + `backdrop-filter: blur(6px)`
- Modal card: `#1e2d3f`, 540px wide, 24px border radius
- Scale-in animation on open
- Progress bar: 4 dots at top, filled cyan as steps complete

**4 questions (each has 4 options in a 2×2 grid):**

Step 1 — Budget:
- 🌱 Under $1,000 / ✈️ $1,000–$1,500 / 🏙️ $1,500–$2,500 / 💎 $2,500+

Step 2 — Vibe:
- 🏖️ Beach & Sun / 🏙️ City Energy / 🏛️ Culture & History / 🌿 Chill & Slow

Step 3 — Region:
- 🌏 Asia / 🌍 Europe / 🌎 Americas / 🎲 Surprise Me

Step 4 — Priority:
- 📶 Fast WiFi / 💸 Low Cost / 👥 Nomad Community / 🛡️ Safety

**Option cards:** large icon, bold label, muted sub-label. Selected state: cyan border + tint. Next button disabled until an option is selected.

**On finish → AI call:**
- Combine all 4 answers into a natural language query
- POST to `/api/find-match` (Netlify function)
- Function: `netlify/functions/find-match.js` — reads `OPENAI_API_KEY` from env, calls `gpt-4o-mini`
- Prompt tells AI to recommend the single best matching city from the list
- Response: find the mentioned city name, zoom globe there, fill right panel with `showCityPanel(city, aiText)`

**After AI responds:**
```js
globe.pointOfView({ lat: city.lat, lng: city.lng, altitude: 1.5 }, 1200);
globe.controls().autoRotate = false;
globe.pointColor(d => d.name === city.name ? '#ffffff' : 'rgba(0,212,255,0.3)');
```

**Netlify setup:**
- `netlify.toml` with `functions = "netlify/functions"` and redirect from `/api/*`
- API key in `.env.local` as `OPENAI_API_KEY=...`
- Run locally with `netlify dev`

### Do NOT build:
- Multiple city recommendations
- Streaming (regular JSON response is fine and more reliable live)
- Share buttons

---

## Common Mistakes to Avoid
- Globe.gl needs explicit width/height on its container — without it the globe won't render
- Separate the 🌍 emoji from the gradient `<span>` — emoji inside a gradient CSS rule renders as a coloured blob
- `autoRotate` must be set after globe init, not before
- `globe.controls().autoRotate = false` on city select — otherwise globe spins away from the zoomed city
- Netlify reads `.env.local` over `.env` if both exist
- Kill all node processes before starting `netlify dev` to avoid port conflicts (port 3999)
