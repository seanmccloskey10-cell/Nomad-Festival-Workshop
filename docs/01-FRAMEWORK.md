# The Prompt Pilot Framework

## A Simple Mental Model for Building Any Project with AI

---

## 🎯 What Is This?

When building projects with AI assistance, beginners often feel overwhelmed - where do I start? What do I ask for first? This framework gives you a clear, repeatable structure for any project.

**The core idea:** Break every project into 4 phases. Work through them in order (or flex the order as needed). Each phase has a checklist of common tasks to consider.

This framework works for websites, apps, games, dashboards - anything you build.

---

## The Framework Structure

Every project starts with a clear **OBJECTIVE** (1-2 sentences), then progresses through 4 phases:

```
┌─────────────────┐
│   OBJECTIVE     │  ← What are we building? (1-2 sentence goal)
└─────────────────┘
         ↓
┌─────────────────┐
│   FOUNDATION    │  ← What's the basic structure?
├─────────────────┤
│  FUNCTIONALITY  │  ← Does it work?
├─────────────────┤
│     POLISH      │  ← Does it look good?
├─────────────────┤
│      TEST       │  ← Does it work everywhere?
└─────────────────┘
```

**Note:** The order is flexible! You might do Polish before Functionality, or interweave them. The key is ensuring you cover all phases by the end.

---

## 📋 Using the Checklists

**These are high-impact suggestions, not mandatory requirements.**

Each checklist contains proven patterns that work for most projects. Your job:
- Pick what applies to your project
- Skip what doesn't fit
- Add project-specific items as needed

**Example:** "Add gradient at the top" helps most websites. Building a CLI tool? Skip it. Building an API? Skip hover animations, add clear error messages instead.

**The framework adapts to you, not the other way around.**

---

## 🎯 OBJECTIVE

**Always state the objective before starting Foundation.**

This gives Claude (and students) context for all subsequent prompts.

**Format:** 1-2 sentences describing what you're building and its main purpose.

**Examples:**
- "Build an AI roasting tool that accepts user input and generates witty, playful roasts using an AI API."
- "Create a Wordle clone with color-coded feedback, keyboard input, and win/lose detection."
- "Build a cryptocurrency price dashboard that displays live prices from multiple coins with auto-refresh."

---

## 🏗️ FOUNDATION

**Goal:** Set up the basic structure so you have something to build on.

### Checklist:
- [ ] Set up a simple layout for the project
- [ ] Add the main sections so the structure appears
- [ ] Add placeholder text so it isn't empty
- [ ] Create a basic page to build on

---

## ⚙️ FUNCTIONALITY

**Goal:** Make sure the project actually works and serves its purpose.

### Checklist:
- [ ] Make buttons actually do something
- [ ] Show results on the screen when submitting
- [ ] Get the main feature working in a simple way
- [ ] Show a small error message if something fails
- [ ] Update the page without refreshing when interacting

---

## ✨ POLISH

**Goal:** Make it visually appealing and professional.

### Checklist:
- [ ] Add a gradient at the top to improve look
- [ ] Add soft shadows to cards
- [ ] Increase spacing to reduce clutter
- [ ] Improve typography for readability
- [ ] Add hover animations for a modern feel

---

## 🧪 TEST

**Goal:** Verify it works everywhere and catch edge cases.

### Checklist:
- [ ] Fix the layout on mobile devices
- [ ] Stack sections vertically on small screens
- [ ] Increase text size on mobile
- [ ] Add fallback messages when data doesn't load
- [ ] Check issues on tablet and different browsers

---

## 🔄 The Framework in Action

Here's how a typical project flows:

```
Project: Portfolio Website

OBJECTIVE
└── Build a personal portfolio website showcasing projects, skills, and contact information ✓

FOUNDATION
├── Set up simple layout
├── Add About, Projects, Skills sections
├── Add placeholder text
└── Basic page visible ✓

FUNCTIONALITY
├── Contact form submits
├── Shows confirmation message
├── Buttons respond to clicks
└── Main features work ✓

POLISH
├── Gradient header
├── Soft shadows on cards
├── Better spacing throughout
├── Hover animations
└── Looks professional ✓

TEST
├── Fix mobile layout
├── Stack cards vertically
├── Increase mobile text size
├── Test on tablet/browsers
└── Works everywhere ✓

🚀 DEPLOY → Live on the internet!
```

---

## 💡 Why This Framework Works

**For Beginners:**
- Reduces overwhelm - you know exactly what phase you're in
- Prevents skipping steps - the checklist catches forgotten items
- Builds confidence - clear progress through defined phases

**For Any Project:**
- Universal - works for websites, apps, games, dashboards
- Flexible - phases can be reordered based on project needs
- Scalable - add more items to checklists as you learn

**For AI Prompting:**
- Better prompts - you know what to ask for at each stage
- Logical flow - AI responses build on previous work
- Complete projects - nothing major gets forgotten

---

## 🤖 For Claude Code Agents

**How to apply this framework during teaching:**

1. **Start with OBJECTIVE** - Always confirm what we're building (1-2 sentences) before Foundation
2. **Tag the phase** - Mention which phase: "Let's start with Foundation..."
3. **Suggest relevant checklist items** - Pick what applies: "For Polish, we could add a gradient header and improve spacing"
4. **Don't force irrelevant items** - CLI tool? Skip hover animations. API? Skip gradients.
5. **Allow flexibility** - Student wants Polish before Functionality? Ask if they're sure, then proceed

**Response pattern:**
- ❌ Don't: Rigidly apply entire checklist
- ✅ Do: "Let's move to Polish. I recommend: gradient header, better spacing, modern font. Sound good?"

**Remember:** Framework is a teaching tool. Use it to give direction, suggest proven patterns, but stay flexible.

---

## 🎓 Quick Reference Card

| Phase | Question | Focus |
|-------|----------|-------|
| **Objective** | What are we building? | 1-2 sentence goal statement |
| **Foundation** | What's the basic structure? | Layout, sections, structure |
| **Functionality** | Does it work? | Buttons, forms, features |
| **Polish** | Does it look good? | Gradients, shadows, spacing |
| **Test** | Does it work everywhere? | Mobile, tablets, browsers |

---

## 📥 How to Use This

1. **Start every project** by stating the OBJECTIVE (1-2 sentences)
2. **Identify which phase** you're currently in
3. **Review the checklist** for that phase
4. **Pick what applies** - use logic and reasoning for your project type
5. **Skip what doesn't fit** - checklists are suggestions, not rules
6. **Move to next phase** when current phase feels solid
7. **Circle back** if you discover gaps in earlier phases

Remember: The framework is a guide, not a prescription. Adapt it to your project's needs.

---

**Created by The Prompt Pilot**
*A framework for building anything with AI assistance*
