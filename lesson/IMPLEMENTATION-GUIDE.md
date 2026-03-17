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

## Prompt 3 — Interactivity + Live Data

### What changes
- City list becomes clickable — globe zooms, panel fills
- Right panel now makes **live API calls** instead of showing hardcoded data
- Two APIs: OpenWeatherMap (real weather) + Anthropic (nomad data)
- The lesson: *APIs turn a static page into a connected tool*

### City list click → globe zooms (reference code):
```js
function selectCity(city) {
  globe.pointOfView({ lat: city.lat, lng: city.lng, altitude: 1.5 }, 1000);
  globe.controls().autoRotate = false;
  globe.pointColor(d => d.name === city.name ? '#ffffff' : 'rgba(0,212,255,0.3)');
  loadCityData(city);
}
```

### Frontend API call with loading state:
```js
async function loadCityData(city) {
  // Show loading state
  resultsPanel.innerHTML = `<div class="loading">Loading ${city.name} data...</div>`;

  try {
    const res = await fetch(`/api/city-info?city=${encodeURIComponent(city.name)}`);
    const data = await res.json();
    renderCityPanel(city, data);
  } catch (e) {
    resultsPanel.innerHTML = `<div class="error">Could not load data. Try again.</div>`;
  }
}
```

### Netlify function: `netlify/functions/city-info.js`
```js
exports.handler = async (event) => {
  const city = event.queryStringParameters?.city;
  if (!city) return { statusCode: 400, body: JSON.stringify({ error: 'city required' }) };

  // 1. Live weather from OpenWeatherMap
  let weather = 'Weather unavailable';
  try {
    const w = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );
    const wd = await w.json();
    weather = `${Math.round(wd.main.temp)}°C · ${wd.weather[0].description}`;
  } catch (e) {}

  // 2. Nomad data from AI — Anthropic primary, OpenAI fallback
  const prompt = `Give digital nomad information for ${city} as JSON:
{
  "whereToStay": [{"neighbourhood":"name","price":"$X/mo","vibe":"one line"}],
  "visaUK": "visa rules for UK passport holders, 1-2 sentences",
  "budget": {"min":900,"max":1400,"currency":"USD","breakdown":"brief line"},
  "nomadStats": {"wifi":8,"affordability":7,"community":8,"english":7}
}
Return only valid JSON, no markdown.`;

  let nomadData = {};

  // Try Anthropic first
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const d = await res.json();
    nomadData = JSON.parse(d.content[0].text);
  } catch (e) {
    // Fallback: OpenAI
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          response_format: { type: 'json_object' }
        })
      });
      const d = await res.json();
      nomadData = JSON.parse(d.choices[0].message.content);
    } catch (e2) {
      nomadData = { error: 'Data unavailable' };
    }
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ weather, ...nomadData })
  };
};
```

### Do NOT build yet:
- The wizard modal
- find-match Netlify function

---

## Prompt 4 — AI Recommendation Wizard

### What changes
- The "✨ Find My Perfect City" button becomes functional
- 3 clickable steps + 1 free-text field → AI picks a city
- The lesson: *AI doesn't just return data — it reasons and decides*

### Wizard modal (reference):
- Overlay: `rgba(10,16,26,0.9)` + `backdrop-filter: blur(8px)`
- Card: `background: #0e1c2e`, 540px wide, 28px border-radius
- Scale-in animation: `transform: scale(0.9) → scale(1)`, 0.25s ease-out
- Progress: 3 dots + 1 text icon at top, filled cyan as steps complete

### 3 quick-pick steps (2×2 grid of cards):

Step 1 — Budget: 🌱 Under $1k / ✈️ $1k–$1.5k / 🏙️ $1.5k–$2.5k / 💎 $2.5k+
Step 2 — Vibe: 🏖️ Beach & Sun / 🏙️ City Energy / 🏛️ Culture & History / 🌿 Chill & Slow
Step 3 — Region: 🌏 Asia / 🌍 Europe / 🌎 Americas / 🎲 Surprise Me

Option card selected state: `border: 1.5px solid #00d4ff; background: rgba(0,212,255,0.08)`
Next button disabled until option selected.

### Step 4 — free text:
```html
<div class="wizard-step" id="step4">
  <h3>Tell us about yourself</h3>
  <p class="wizard-sub">What are you escaping? What matters to you?</p>
  <textarea id="aboutText" placeholder="e.g. I'm a designer in London, craving warmth and a slower pace. Fast WiFi matters, budget around $1,200/mo..." rows="4"></textarea>
</div>
```
The free text field is where "it knows you" — the AI reads the person's own words, not just filter values.

**Pre-scripted demo answer (verify this recommends Bali or Chiang Mai before going live):**
> *"I'm a burnt-out designer, been in London four years. I need warmth, a beach nearby, good coffee shops, and decent WiFi. Budget around $1,200 a month, want somewhere I can actually slow down."*

### On finish → call find-match:
```js
async function runWizard() {
  const payload = {
    budget: answers.budget,
    vibe: answers.vibe,
    region: answers.region,
    about: document.getElementById('aboutText').value
  };
  const res = await fetch('/api/find-match', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const { city: cityName, reason } = await res.json();
  const city = cities.find(c => c.name === cityName);
  if (city) {
    globe.pointOfView({ lat: city.lat, lng: city.lng, altitude: 1.5 }, 1200);
    globe.controls().autoRotate = false;
    globe.pointColor(d => d.name === city.name ? '#ffffff' : 'rgba(0,212,255,0.3)');
    renderCityPanel(city, { aiReason: reason });
  }
}
```

### Netlify function: `netlify/functions/find-match.js`
```js
exports.handler = async (event) => {
  const { budget, vibe, region, about } = JSON.parse(event.body);
  const cities = ['Bali','Lisbon','Chiang Mai','Medellín','Mexico City','Porto','Bangkok','Tbilisi'];

  const prompt = `You are a digital nomad advisor. Pick the single best city from: ${cities.join(', ')}.

Person's profile:
- Budget: ${budget}
- Vibe: ${vibe}
- Region: ${region}
- About them: ${about}

Respond as JSON: { "city": "exact name from the list", "reason": "2-3 sentences referencing their specific words" }
Return only valid JSON.`;

  // Try Anthropic first
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const d = await res.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: d.content[0].text
    };
  } catch (e) {
    // Fallback: OpenAI
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          response_format: { type: 'json_object' }
        })
      });
      const d = await res.json();
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: d.choices[0].message.content
      };
    } catch (e2) {
      return { statusCode: 500, body: JSON.stringify({ error: 'AI unavailable' }) };
    }
  }
};
```

### Do NOT build:
- Multiple city recommendations
- Streaming responses (regular JSON is more reliable live)
- Share buttons

---

## API Keys & Security

### Keys required — add to `.env.local` (never commit this file):
```
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...          ← fallback only
OPENWEATHER_API_KEY=...
```

### Why it's secure:
- All API calls go through Netlify functions (server-side) — the browser never touches a key
- `.env.local` is gitignored — keys never reach GitHub
- Browser calls `/api/city-info` → Netlify reads key from env → calls external API → returns data
- Pattern: browser → your function → external API (keys invisible to browser at all times)

### Fallback logic:
Both functions try Anthropic first, catch any error, fall back to OpenAI. If both fail, return a graceful error message — never a crash.

### netlify.toml (required):
```toml
[build]
  functions = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

---

## Common Mistakes to Avoid
- Globe.gl needs explicit width/height on its container — without it the globe won't render
- Separate the 🌍 emoji from the gradient `<span>` — emoji inside a gradient CSS rule renders as a coloured blob
- `autoRotate` must be set after globe init, not before
- `globe.controls().autoRotate = false` on city select — otherwise globe spins away from the zoomed city
- Netlify reads `.env.local` over `.env` if both exist — always use `.env.local`
- Kill all node processes before starting `netlify dev` to avoid port conflicts: `taskkill //F //IM node.exe //T`
- Port 3999 still occupied after kill: `netstat -ano | grep 3999` then `taskkill //F //PID [pid]`
- AI JSON response: always parse defensively — wrap in try/catch, the city name must match the cities array exactly
