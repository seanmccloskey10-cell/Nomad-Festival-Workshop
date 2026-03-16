# Project Setup Guide

**⚠️ ONLY RUN THIS ONCE when starting a brand new project.**

**Not needed for:**
- 2nd, 3rd, 4th... dry runs of the same project
- Continuing work on an existing project
- If branches already exist

**This is initial setup only.** For ongoing practice runs, see [06-DRY-RUN-GUIDE.md](06-DRY-RUN-GUIDE.md).

---

## Overview

**Purpose:** Create a clean, repeatable structure for teaching projects (one-time setup)

**Two branches:**
- **master** - Teaching materials only (stays clean)
- **solution** - Teaching materials + working code (reference)

---

## Setup Checklist

### 1. Create Teaching Documents on Master

**Create lesson/ directory:**
```bash
mkdir lesson
```

This folder will contain project-specific teaching materials.

**lesson/PROMPTS.md**
- Lesson script students will follow
- Phase-tagged prompts (🟧 Foundation, 🔸 Polish, 🔶 Functionality)
- See [02-PROMPT-STRUCTURE-EXAMPLE.md](02-PROMPT-STRUCTURE-EXAMPLE.md) for format

**lesson/IMPLEMENTATION-GUIDE.md**
- Step-by-step build specs for each prompt
- What to build (with specifics)
- What NOT to build yet
- Intentional limitations (pedagogical bugs)
- Common mistakes to avoid

**lesson/LESSONS-LEARNED.md**
- Template for improvement tracking
- Gets updated after each dry run
- See [08-LESSONS-LEARNED.md](08-LESSONS-LEARNED.md) for format

**README.md** (optional, at root)
- Framework overview
- Student-facing instructions

---

### 2. Create .gitignore on Master

Block build files so they can't be committed to master:

```gitignore
# Build files (customize for project type)

# Web projects
/index.html
/app.js
/styles.css
/script.js
/main.js

# Directories
/dist/
/build/
/node_modules/
/.next/
/.vite/

# Environment
/.env
/.env.local

# Project-specific (adjust as needed)
# /dashboard.html
# /crypto-api.js
```

**Key principle:** Master stays clean - only teaching materials, no implementation code.

---

### 3. Create Solution Branch

```bash
git checkout -b solution
```

**On solution branch:**

1. **Update .gitignore** - Allow build files:
   ```gitignore
   # Build files allowed on solution branch
   # (Comment out or remove the blocks from master's .gitignore)
   ```

2. **Build the working implementation:**
   - Complete, working code
   - Follows all prompts in PROMPTS.md
   - Reference for what the end result should look like

3. **Commit everything:**
   ```bash
   git add .
   git commit -m "Add complete working solution"
   git push origin solution
   ```

4. **Switch back to master:**
   ```bash
   git checkout master
   git push origin master
   ```

---

## Verify Structure

### Master Branch Should Have:
```
.gitignore (blocks build files)
lesson/
├── PROMPTS.md
├── IMPLEMENTATION-GUIDE.md
└── LESSONS-LEARNED.md
README.md (optional)
```

### Solution Branch Should Have:
```
.gitignore (allows build files)
lesson/
├── PROMPTS.md
├── IMPLEMENTATION-GUIDE.md
└── LESSONS-LEARNED.md
README.md (optional)
[all working code files]
```

---

## After Setup

**You're ready for dry runs.** See [06-DRY-RUN-GUIDE.md](06-DRY-RUN-GUIDE.md) for the practice workflow.

**Key points:**
- Master = clean starting point for each dry run
- Solution = reference showing the end goal
- Build files are gitignored on master (won't commit accidentally)
- Dry runs build locally on master, then clean up

---

## Common Project Types

### Web App (HTML/CSS/JS)
```gitignore
/index.html
/app.js
/styles.css
/node_modules/
```

### React/Next.js
```gitignore
/src/
/public/
/node_modules/
/.next/
/build/
```

### Python/Flask
```gitignore
/app.py
/templates/
/static/
/__pycache__/
/.venv/
```

### Node.js/Express
```gitignore
/server.js
/app.js
/routes/
/node_modules/
/.env
```

**Adjust .gitignore based on your project's file structure.**

---

## Quick Reference

| Task | Command/Action |
|------|----------------|
| Create solution branch | `git checkout -b solution` |
| Switch to master | `git checkout master` |
| Push both branches | `git push origin master && git push origin solution` |
| Verify master is clean | `git status` (should show no build files) |
| Check what's gitignored | `git check-ignore -v <filename>` |

---

## Remember

- **Master = teaching materials only** (blocks build files)
- **Solution = complete reference** (allows build files)
- **This structure enables repeatable dry runs** without branch accumulation
