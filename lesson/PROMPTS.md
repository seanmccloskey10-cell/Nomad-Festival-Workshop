# Nomad Finder — Workshop Prompts

**What we're building:** A personal AI travel agent that finds your perfect next city — spinning globe, city data, and a wizard that gives you a full recommendation in seconds.

---

## 🟧 PROMPT 1 — Foundation

> Create a simple webpage called Nomad Finder
> Dark background, title, subtitle
> Keep it basic for now

---

## 🔸 PROMPT 2 — Design + Globe

> Make it look stunning:
> - Dark navy theme, gradient title (cyan to purple), Google Font
> - 3D spinning globe using Globe.gl CDN: https://unpkg.com/globe.gl
> - Blue marble earth texture, glowing cyan city dots
> - Cities: Bali, Lisbon, Chiang Mai, Medellín, Mexico City, Porto, Bangkok, Tbilisi
> - City list on the left (flag, name, cost, vibe tag)
> - Empty panel on the right for later
> - Globe auto-rotates slowly

---

## 🔶 PROMPT 3 — Interactivity

> Click a city in the list → globe zooms there and stops
> Right panel shows a city info card with 4 accordion sections:
> - 🏠 Where to Stay — 3 neighbourhoods with prices
> - ✈️ Visa Info for UK residents
> - 💰 Monthly Budget Breakdown
> - 📊 Nomad Stats (wifi, cost, community, English)
> Hardcode data for all 8 cities

---

## 🔶 PROMPT 4 — AI Wizard

> Add a "✨ Find My Perfect City" button at the top
> Opens a 4-step popup wizard:
> 1. Budget — Under $1k / $1k–$1.5k / $1.5k–$2.5k / $2.5k+
> 2. Vibe — Beach & Sun / City Energy / Culture & History / Chill & Slow
> 3. Region — Asia / Europe / Americas / Surprise Me
> 4. Priority — Fast WiFi / Low Cost / Nomad Community / Safety
> Big clickable cards, progress bar, back/next buttons
> On finish: AI picks best match, globe flies there, panel fills with full briefing
> API key in .env file, called via a Netlify function
