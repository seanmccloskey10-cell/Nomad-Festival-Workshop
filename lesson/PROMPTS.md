# Nomad Finder — Workshop Prompts

**What we're building:** A personal AI travel agent that helps digital nomads find their perfect next city — spinning globe, city data, and a 4-step wizard that asks quick questions then gives a full recommendation.

**The a-ha moment:** The AI reads your preferences — budget, vibe, region, priority — and acts like a personal travel agent. Visa info for UK residents, neighbourhoods, budget breakdown. All from a few clicks. That's YOUR tool.

---

## OBJECTIVE

🟧 Build a Nomad Destination Finder

---

## 🟧 FOUNDATION

**Prompt 1: Create a Basic Page**
> Create a simple webpage for a nomad destination finder
> Just the title, subtitle and a dark background
> Keep it minimal for now

---

## 🔸 POLISH + GLOBE

**Prompt 2: Design + Globe**
> Make it look stunning — dark navy theme, gradient title in cyan and purple, clean modern font
> Add an interactive 3D spinning globe using Globe.gl from this CDN: https://unpkg.com/globe.gl
> Use the blue marble earth texture
> Add glowing cyan dot markers on: Bali, Lisbon, Chiang Mai, Medellín, Mexico City, Porto, Bangkok, Tbilisi
> Add a city list panel on the left — each city shows its flag emoji, name, monthly cost and vibe tag
> Add an empty panel on the right for content later
> Globe auto-rotates slowly

---

## 🔶 FUNCTIONALITY

**Prompt 3: Make It Interactive**
> When I click a city in the left list, the globe should zoom to that city and stop rotating
> The right panel should show a card for that city
> Add 4 expandable accordion sections inside the card:
> 1. Where to Stay — 3 neighbourhood picks with prices
> 2. Visa Info for UK residents — visa rules and digital nomad visa options
> 3. Monthly Budget Breakdown — rent, food, coworking, total
> 4. Nomad Stats — wifi score, affordability, community size, English spoken
> Hardcode this data for all 8 cities

**Prompt 4: Add the AI Wizard**
> Add a prominent "✨ Find My Perfect City" button at the top of the page
> When clicked, open a modal popup with a 4-step wizard:
> Step 1 — Monthly budget: Under $1k / $1k–$1.5k / $1.5k–$2.5k / $2.5k+
> Step 2 — Ideal vibe: Beach & Sun / City Energy / Culture & History / Chill & Slow
> Step 3 — Region: Asia / Europe / Americas / Surprise Me
> Step 4 — What matters most: Fast WiFi / Low Cost / Nomad Community / Safety
> Each step shows 4 big clickable cards with icon, label and description
> Show a progress bar across the top, back/next buttons
> On finish, call the OpenAI API with all 4 answers and the city data
> AI picks the single best match — globe zooms there and stops, right panel fills with the full city briefing
> API key stored securely in .env file, called via a Netlify function
