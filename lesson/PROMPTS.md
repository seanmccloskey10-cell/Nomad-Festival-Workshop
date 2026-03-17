# Nomad Finder — Workshop Prompts

**What we're building:** A personal AI travel agent that finds your perfect next city — spinning globe, city data, and a wizard that gives you a full recommendation in seconds.

---

## 🟧 PROMPT 1 — Foundation

> Create a simple webpage called Nomad Finder
> Dark background, title, subtitle
> Keep it basic for now

---

## 🔸 PROMPT 2 — Design + Globe

> /website-designer
>
> Also add:
> - 3D spinning globe (Globe.gl CDN: https://unpkg.com/globe.gl) — blue marble texture, transparent background, glowing cyan dots, slow auto-rotate, zoom disabled
> - Cities: Bali, Lisbon, Chiang Mai, Medellín, Mexico City, Porto, Bangkok, Tbilisi
> - Layout: 3 columns below the marquee — city list 220px | globe centred | results panel flex-1 — full viewport height, no scroll
> - City stats marquee: all 8 cities scrolling — flag, name, monthly cost, vibe
> - City list cards: flag, name, cost, vibe tag
> - Results panel empty state: "✨ Pick a city or let AI choose"
> - "✨ Find My Perfect City" frosted-glass pill button in hero — non-functional for now

---

## 🔶 PROMPT 3 — Interactivity + Live Data

> Click a city in the list → globe zooms there and stops
> Right panel makes a live API call and shows:
> - 🌤️ Current weather (OpenWeatherMap API — real live data)
> - 🏠 Where to Stay — 3 neighbourhoods with prices
> - ✈️ Visa Info for UK residents
> - 💰 Monthly Budget Breakdown
> - 📶 Nomad Stats (wifi, affordability, community, English)
> Show a loading spinner while fetching
> Netlify function: netlify/functions/city-info.js
> Calls Anthropic API for nomad data, OpenWeatherMap for weather
> API keys: ANTHROPIC_API_KEY + OPENWEATHER_API_KEY in .env.local

---

## 🔶 PROMPT 4 — AI Recommendation Wizard

> Wire up the "✨ Find My Perfect City" button — opens a wizard:
> 3 quick-pick steps (big clickable cards, 2×2 grid, progress bar):
> - Step 1 — Budget: 🌱 Under $1k / ✈️ $1k–$1.5k / 🏙️ $1.5k–$2.5k / 💎 $2.5k+
> - Step 2 — Vibe: 🏖️ Beach & Sun / 🏙️ City Energy / 🏛️ Culture & History / 🌿 Chill & Slow
> - Step 3 — Region: 🌏 Asia / 🌍 Europe / 🌎 Americas / 🎲 Surprise Me
> Final step — free text field: "Tell us about yourself — what are you escaping or looking for?"
> Back/Next buttons, Next disabled until option selected
> On finish: POST to /api/find-match — AI reads your answers + your story, picks the best city
> Globe flies there, right panel shows personalised recommendation with the AI's reasoning
> Netlify function: netlify/functions/find-match.js
> Try Anthropic first, fall back to OpenAI if it fails
