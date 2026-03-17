# Nomad Finder — Workshop Prompts

**What we're building:** A personal AI travel agent that finds your perfect next city — spinning globe, city data, and a wizard that gives you a full recommendation in seconds.

---

## 🟧 PROMPT 1 — Foundation

> Create a simple webpage called Nomad Finder
> Dark background, title, subtitle
> Keep it basic for now

---

## 🔸 PROMPT 2 — Design + Globe

> Transform this into a premium travel product. Apply this visual system:
>
> **Typography:** Barlow Condensed 700 + Inter (400/500/600) from Google Fonts. All headings uppercase Barlow Condensed. Hero title clamp(3rem, 8vw, 6rem), line-height 0.92.
>
> **Animated gradient hero section:** background: linear-gradient(-45deg, #0f172a, #0ea5e9, #7c3aed, #db2777, #f59e0b, #0ea5e9) — background-size: 500% 500% — @keyframes gradient-shift cycling background-position 0% 50% → 100% 50% over 18s
>
> **Nav:** Fixed frosted glass — background: rgba(255,255,255,0.08) + backdrop-filter: blur(20px) — full width
>
> **City stats marquee** below the hero: all 8 cities scrolling — flag, name, monthly cost, vibe. Two identical tracks inside a flex container, translateX(-50%) CSS animation, pause on hover.
>
> **3D spinning globe** (Globe.gl CDN: https://unpkg.com/globe.gl) — blue marble texture, transparent background, glowing cyan dots, slow auto-rotate, zoom disabled.
> Cities: Bali, Lisbon, Chiang Mai, Medellín, Mexico City, Porto, Bangkok, Tbilisi
>
> **Layout:** 3 columns below the marquee — city list 220px | globe centred | results panel flex-1 — full remaining viewport height, no scroll
>
> **City list cards:** flag, name, cost, vibe tag. Hover: lift + cyan glow. Active: cyan border tint.
>
> **Results panel:** empty state — "✨ Pick a city or let AI choose"
>
> **✨ Find My Perfect City** frosted-glass pill button in hero section — non-functional for now
>
> Restraint: gradient on the hero section only, not on buttons. No particles. No animated borders.

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
