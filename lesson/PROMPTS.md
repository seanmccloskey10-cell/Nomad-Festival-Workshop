# Nomad Finder — Workshop Prompts

**What we're building:** A personal AI travel agent that finds your perfect next city — spinning globe, live city data, and a wizard that gives you a personalised recommendation in seconds.

---

## PROMPT 1 — Foundation

> Build me a simple webpage called Nomad Finder. Dark background, white text, title and subtitle. Keep it basic for now.

---

## PROMPT 2 — Design + Globe

> /website-designer
>
> Also add a 3D spinning globe using Globe.gl from unpkg.com — blue marble, cyan dots, slow auto-rotate, no zoom.
>
> Layout: 3 columns below the header filling the full screen — city list left, globe centre, results panel right.
>
> Scrolling ticker bar with 8 cities, monthly cost and vibe: Bali, Lisbon, Chiang Mai, Medellin, Mexico City, Porto, Bangkok, Tbilisi.
>
> City cards: flag, name, cost, vibe tag. Results panel empty state: "Pick a city or let AI choose."
>
> "Find My Perfect City" frosted glass button in the hero — not wired up yet.

---

## PROMPT 3 — Interactivity + Live Data

> Clicking a city zooms the globe there and stops it. The right panel loads live data: current weather, 3 neighbourhoods with prices, UK visa info, monthly budget, and wifi/affordability stats. Loading spinner while it fetches.
>
> API logic goes in netlify/functions/city-info.js — OpenWeatherMap for weather, Anthropic for everything else. Keys: ANTHROPIC_API_KEY and OPENWEATHER_API_KEY from .env.local.

---

## PROMPT 4 — AI Recommendation Wizard

> Wire up the "Find My Perfect City" button — opens a wizard with 3 steps, each with 4 big clickable cards:
>
> Budget: Under $1k / $1k-$1.5k / $1.5k-$2.5k / $2.5k+
> Vibe: Beach and nature / City energy / Culture / Chill and slow
> Region: Southeast Asia / Europe / Latin America / Anywhere
>
> Final step: free text box — "Tell us a bit about yourself."
>
> On finish, send answers to /api/find-match — AI picks the best city, globe flies there, right panel shows the reasoning. Backend at netlify/functions/find-match.js, Anthropic primary with OpenAI as fallback.
