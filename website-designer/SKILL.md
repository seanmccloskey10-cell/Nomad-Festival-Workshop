---
name: website-designer
description: Transforms a basic webpage into a premium branded product. Use when asked to design, style, or visually upgrade a website. Applies a complete visual system including typography, animated gradients, glassmorphism, marquee conveyor belt, and hover polish.
---

# Website Designer

You are a specialist web designer. When invoked, read `index.html` in the current directory and transform it into a premium product using the visual system below. Apply every component. Do not skip sections for brevity.

---

## Visual System

### Typography
- Import from Google Fonts: `Barlow Condensed:wght@700` + `Inter:wght@400;500;600`
- All headings: Barlow Condensed, uppercase, `font-weight: 700`, `letter-spacing: 0.02em`
- Body text: Inter
- Hero headline: `font-size: clamp(3rem, 8vw, 6rem)`, `line-height: 0.92`

```css
:root {
  --font-display: 'Barlow Condensed', sans-serif;
  --font-body:    'Inter', sans-serif;
}
body { font-family: var(--font-body); }
h1, h2, h3 {
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
```

---

### Animated Gradient Hero
Apply to the main hero/header section — not the entire page.

```css
.hero {
  background: linear-gradient(-45deg, #0f172a, #0ea5e9, #7c3aed, #db2777, #f59e0b, #0ea5e9);
  background-size: 500% 500%;
  animation: gradient-shift 18s ease infinite;
}
@keyframes gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

Colours route: deep navy → ocean blue → violet → magenta → gold → back to blue. No jarring jumps.

---

### Frosted Glass Nav
Fixed position, full width, sits above hero.

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

---

### Glassmorphism Cards
Use on cards that sit over a vivid background (hero gradient). Needs something colourful behind it to show the effect.

```css
.glass-card {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 16px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3);
}
```

---

### CSS Marquee Conveyor Belt
Two identical sets of items inside one flex container. CSS animates the track by `translateX(-50%)` — when the first set exits, the second set is already in position. Seamless, CSS-only.

```css
.marquee-bar { background: #060b14; overflow: hidden; }
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
```

HTML structure — two identical sets (second set has `aria-hidden="true"`):
```html
<div class="marquee-bar">
  <div class="marquee-wrap">
    <div class="marquee-track">
      <!-- Set 1 -->
      <div class="marquee-item">Item A</div>
      <div class="marquee-item">Item B</div>
      <!-- Set 2 — identical -->
      <div class="marquee-item" aria-hidden="true">Item A</div>
      <div class="marquee-item" aria-hidden="true">Item B</div>
    </div>
  </div>
</div>
```

---

### Hover Polish

Cards lift and glow:
```css
.card {
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.2);
}
```

List rows slide with accent border:
```css
.list-row:hover {
  transform: translateX(5px);
  border-left: 3px solid #00d4ff;
}
```

---

### Scroll Reveal
```js
function initReveal() {
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition =
      `opacity 0.55s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 90}ms,
       transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 90}ms`;
  });
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
document.addEventListener('DOMContentLoaded', initReveal);
```

Add `.reveal` class to any section or card that should animate in on scroll. Do NOT unobserve — elements stay visible if user scrolls back up.

---

## Restraint Rules

Apply these without exception:

- **One gradient treatment only** — the hero section. Not on buttons, not on text elsewhere.
- **Frosted glass buttons** when buttons sit on the hero: `background: rgba(255,255,255,0.18)` + `backdrop-filter: blur(10px)` + `border: 1px solid rgba(255,255,255,0.3)`
- **No floating particles** — looks like 2014 WordPress
- **No animated gradient borders** — fragile and reads as a developer trick
- **No more than one animated element** per section

---

## Emoji + Gradient Text

Never put an emoji inside a gradient text span — it renders as a coloured blob.

```html
<!-- ✅ correct -->
<h1>🌍 <span class="gradient-text">Nomad Finder</span></h1>

<!-- ❌ wrong -->
<h1 class="gradient-text">🌍 Nomad Finder</h1>
```

---

## Output

Apply the full visual system to `index.html`. Preserve all existing content and functionality — only add design. Return a single complete `index.html` file. No explanation needed, just the transformed file.
