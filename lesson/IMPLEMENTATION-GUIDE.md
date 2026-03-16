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

### Build exactly this:

**Layout — 3 columns, full viewport height, no scroll:**
```
[City List 200px] | [Globe 500px] | [Results Panel flex-1]
```
- `body` is a flex column, `height: 100vh`, `overflow: hidden`
- Header at top: centred, compact (not too much padding)
- "✨ Find My Perfect City" button centred below header (this is intentionally non-functional — it comes alive in Prompt 4)
- Main area is a flex row filling remaining height

**Header:**
- `🌍` emoji + "Nomad Finder" with gradient text: `linear-gradient(135deg, #00d4ff, #a855f7)`
- Separate the emoji from the gradient span — emoji inside gradient breaks it
- Subtitle: "Find your perfect next city" in `#8899aa`

**Globe:**
- CDN: `<script src="https://unpkg.com/globe.gl"></script>`
- Texture: `https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg`
- Background: `rgba(0,0,0,0)` (transparent — blends with page)
- Size: 500×500px
- City dots: colour `#00d4ff`, altitude 0.02, radius 0.6
- Auto-rotate: speed 0.6, zoom disabled
- Auto-rotate must be set AFTER globe is initialised

**City data (use exactly this):**
```js
const cities = [
  { name: "Bali",        country: "🇮🇩", countrySlug: "indonesia",  lat: -8.4095,  lng: 115.1889, cost: 1200, wifi: 7,  vibe: "Beach",   desc: "Spiritual surf culture, cheap living, strong nomad community" },
  { name: "Lisbon",      country: "🇵🇹", countrySlug: "portugal",   lat: 38.7169,  lng: -9.1395,  cost: 2200, wifi: 9,  vibe: "City",    desc: "Europe's sunniest capital, startup scene, incredible food" },
  { name: "Chiang Mai",  country: "🇹🇭", countrySlug: "thailand",   lat: 18.7883,  lng: 98.9853,  cost: 900,  wifi: 8,  vibe: "Culture", desc: "Temples, mountains, the original nomad hub, ultra cheap" },
  { name: "Medellín",    country: "🇨🇴", countrySlug: "colombia",   lat: 6.2442,   lng: -75.5812, cost: 1400, wifi: 7,  vibe: "City",    desc: "Eternal spring climate, buzzing social scene, affordable" },
  { name: "Mexico City", country: "🇲🇽", countrySlug: "mexico",     lat: 19.4326,  lng: -99.1332, cost: 1800, wifi: 8,  vibe: "City",    desc: "World-class food, culture, massive expat community" },
  { name: "Porto",       country: "🇵🇹", countrySlug: "portugal",   lat: 41.1579,  lng: -8.6291,  cost: 1900, wifi: 9,  vibe: "Culture", desc: "Wine, cobblestones, slower pace, Lisbon's cooler sibling" },
  { name: "Bangkok",     country: "🇹🇭", countrySlug: "thailand",   lat: 13.7563,  lng: 100.5018, cost: 1100, wifi: 9,  vibe: "City",    desc: "Insane food, fast internet, 24/7 energy, visa-friendly" },
  { name: "Tbilisi",     country: "🇬🇪", countrySlug: "georgia",    lat: 41.6938,  lng: 44.8015,  cost: 1000, wifi: 8,  vibe: "Culture", desc: "Underrated gem, Georgian wine, remote-work visa, tiny crowds" }
];
```

**City list (left panel):**
- Each item: flag emoji, city name, `$X,XXX/mo · Vibe` in muted colour
- Rounded cards, subtle border, hover state (cyan tint)
- Active state: cyan border + background tint

**Results panel (right):**
- Show empty state: `✨` icon + "Click Find My Perfect City or pick a city from the list"
- No content yet — comes in Prompt 3

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
