# Systematic Dry Run Guide

**For ongoing practice runs** (after initial setup is complete)

**First time?** Run [05-PROJECT-SETUP-GUIDE.md](05-PROJECT-SETUP-GUIDE.md) once to create the branch structure, then come back here.

---

## What Are Dry Runs?

**Purpose:** Practice a lesson multiple times before the final recording (runs 1, 2, 3... up to ~10)

**The Process:**
1. Run lesson (dry run #1)
2. Note what worked/failed in lesson/LESSONS-LEARNED.md
3. Make it 10% better
4. Repeat
5. After ~10 runs: Seamless, polished lesson ready to record

## What "10% Better" Looks Like

**Real example from AI Roast Generator project:**

**Dry Run #1:**
- ✅ All prompts work
- ❌ 2 permission popups
- ❌ User confused about API keys

**Dry Run #2 (10% better):**
- ✅ Pre-approved commands → 0 popups
- ✅ Added API key explanation in Prompt 4

**Dry Run #3 (10% better):**
- ✅ Changed wording "authentication token" → "API key" (clearer)
- ✅ User had a-ha moment!

**Dry Run #4 (10% better):**
- ✅ Added fake div → real input transformation
- ✅ User feedback: "gave the video life" 🎉

**Result:** Each iteration fixed 1-2 small things. After 4 runs: Perfect, seamless lesson.

---

## The Two-Branch System

**How it works:**

```
master branch (clean starting point)
├── lesson/
│   ├── PROMPTS.md
│   ├── IMPLEMENTATION-GUIDE.md
│   └── LESSONS-LEARNED.md
├── README.md
└── .gitignore (blocks build files)

solution branch (reference/end goal)
├── Same teaching docs
└── Complete working code
```

**Master branch:**
- Teaching materials only
- Build files are gitignored
- Stays clean between dry runs

**Solution branch:**
- Shows what the final result should be
- Reference for Claude to know the end goal
- Gets updated with lessons learned

---

## Quick Workflow

### Before Dry Run

**1. Environment Cleanup (Critical for server projects):**

Kill old processes to avoid port conflicts:

```bash
# Windows
netstat -ano | findstr :8888
powershell -Command "Stop-Process -Id [PID] -Force"

# Mac/Linux
lsof -ti:8888 | xargs kill -9
```

**2. Pre-approve Commands (avoids popups):**

In Claude Code settings, pre-approve:
- File operations: `write`, `edit`
- Package managers: `npm install`, `npm init`
- Server commands: `netlify dev`, `python -m http.server`

**3. Read Context:**
1. lesson/PROMPTS.md (what to build)
2. lesson/IMPLEMENTATION-GUIDE.md (how to build it)
3. lesson/LESSONS-LEARNED.md (what worked/failed previously)

**4. Verify:**
- [ ] On master branch
- [ ] No build files present (clean slate)
- [ ] .env file exists (if needed)
- [ ] No processes running on required ports

---

### During Dry Run

**Build on master branch:**
- Follow prompts as a strong framework - adapt if issues arise
- Use proven copy from lesson/IMPLEMENTATION-GUIDE.md
- Build files exist locally but are gitignored (won't commit)

**Communication:**
- Only show ✅ for completed work (NO ❌ or future spoilers)
- After each prompt, briefly confirm what was built
- Follow [04-COMMUNICATION-STYLE.md](04-COMMUNICATION-STYLE.md)

**Note:** Some prompts take longer (npm install, server startup) - this is normal

---

### After Dry Run - BULLETPROOF COMPLETION WORKFLOW

**TRIGGER:** When user says any of:
- "dry run done/complete/finished"
- "save and commit"
- "that's it" / "we're done"
- Any phrase indicating completion

**If unclear, ask:** "Ready to complete dry run cleanup? I'll preserve files to solution branch, update docs, and clean master."

---

#### Step 0: Kill Background Processes ⚠️

```bash
# Kill any running servers FIRST
taskkill /F /IM node.exe /T 2>nul || echo "No node processes"
# Or use KillShell tool if server ID known
```

---

#### Step 1: PRESERVE Files FIRST ⚠️ DO THIS BEFORE ANY OTHER OPERATION

```bash
# Verify build files exist before preserving
ls -la index.html app.js netlify.toml package.json 2>/dev/null || echo "⚠️ Build files not found!"

# Switch to solution branch (files remain on disk - they're gitignored)
git checkout solution

# Copy all build files (project-specific - adjust per project)
cp -f index.html app.js netlify.toml package.json package-lock.json ./
cp -rf netlify/ ./

# Verify files copied
ls -la index.html app.js netlify/ package.json

# Commit to solution
git add index.html app.js netlify.toml package.json package-lock.json netlify/
git commit -m "Update solution with Dry Run #X working code"
git push

# Return to master
git checkout master
```

**Why this works:**
- ✅ Gitignored files remain on disk during branch switch
- ✅ Simple `cp` commands (no stash complexity)
- ✅ Preserves FIRST, deletes LAST (safety!)

---

#### Step 2: Get User Feedback & Update Documentation

1. **Get user feedback** - Ask: What worked? What didn't?

2. **Update lesson/LESSONS-LEARNED.md** with specifics:
   - What made user say "WOW"
   - What caused confusion or friction
   - Technical issues and solutions
   - Creative copy that resonated
   - Improvements made AFTER dry run

3. **Verify lesson/PROMPTS.md ↔ lesson/IMPLEMENTATION-GUIDE.md sync**
   - Check key prompts match
   - Verify teaching patterns documented

4. **Commit all documentation:**
   ```bash
   git add lesson/LESSONS-LEARNED.md lesson/PROMPTS.md lesson/IMPLEMENTATION-GUIDE.md
   git commit -m "Document Dry Run #X: [concise summary]"
   git push
   ```

---

#### Step 3: Clean Master Branch

```bash
# Remove ALL build files (project-specific - adjust per project)
rm -f index.html app.js netlify.toml package.json package-lock.json nul
rm -rf netlify/ node_modules/ .netlify/

# Verify master is clean
git status  # Must show "working tree clean"
ls -la      # Should only show: .claude/, .env, .env.example, .git/, .gitignore, docs/, lesson/
```

---

#### Step 4: Verify Completion

```bash
# Verify master is clean
echo "=== Master branch (should be clean) ==="
ls -la

# Verify solution has build files
git checkout solution
echo "=== Solution branch (should have build files) ==="
ls -la | grep -E "(index.html|app.js|netlify|package)"

# Return to master for next dry run
git checkout master
echo "✅ Ready for Dry Run #[X+1]!"
```

---

#### Key Safety Rules:

- ✅ **Preserve FIRST, delete LAST** - Never delete until files are on solution branch
- ✅ **Kill servers first** - Prevents file locks and port conflicts
- ✅ **Verify at each step** - Confirm files exist before operations
- ✅ **Be proactive** - If context suggests completion, offer to run cleanup
- ⚠️ **If build files already deleted** - Document in LESSONS-LEARNED that solution wasn't updated this run

---

#### Project-Specific File Lists

**AI Roast Generator:**
- **Preserve:** index.html, app.js, netlify.toml, package.json, package-lock.json, netlify/functions/roast.js
- **Delete:** node_modules/, .netlify/, nul
- **Keep:** .env, .env.example, .gitignore, docs/, lesson/, .claude/

**Adjust this list for each project!**

---

#### Ready for Next Iteration

Master branch is now clean and ready for next dry run with only teaching materials!

---

## Key Teaching Documents

### lesson/PROMPTS.md
**What students see** - Lesson script with phase tags

**Format:** See [02-PROMPT-STRUCTURE-EXAMPLE.md](02-PROMPT-STRUCTURE-EXAMPLE.md)

### lesson/IMPLEMENTATION-GUIDE.md
**Build blueprint** - Step-by-step what to build for each prompt

**Contains:**
- What to build (with specifics)
- What NOT to build yet
- Proven creative copy that works
- Intentional limitations (pedagogical bugs)
- Common mistakes to avoid

**Update after dry run:** Add creative wins, patterns that resonated

### lesson/LESSONS-LEARNED.md
**Improvement engine** - Gets better each dry run

**Structure:**
```markdown
## Dry Run #X

### ✅ What Worked Well
[Keep doing this]

### 🔧 What to Fix
[Problem → Solution → Implementation]

### 🎯 Action Items for Next Run
[Checklist of improvements]
```

**Update after each dry run** with user feedback

---

## Quality Standards

### Never:
- ❌ Spoil future prompts ("that's coming in Prompt 3!")
- ❌ Show ❌ crosses for incomplete features
- ❌ Leave build files on master between dry runs

### Always:
- ✅ Celebrate completions with ✅ checkmarks
- ✅ Use proven creative copy from lesson/IMPLEMENTATION-GUIDE.md
- ✅ Keep master clean (teaching materials only)
- ✅ Document what worked/failed in lesson/LESSONS-LEARNED.md
- ✅ Make each dry run 10% better

---

## Success Metrics

After each dry run, track:
- ✅ Did all prompts execute without errors?
- ✅ Did user say "WOW" or equivalent at any moment?
- ✅ Were there any permission popups? (should be zero)
- ✅ Any technical confusion? (document for next time)
- ✅ Did the a-ha moment land?

**Goal:** Each metric improves by ~10% per dry run

---

## Goal

After 5-10 dry runs: Perfect, seamless, zero-friction lesson with battle-tested prompts and copy.

---

## Appendix: Troubleshooting

### Port Conflicts (if using servers)

**Before starting server:**
```bash
# Check if port is in use (Windows)
netstat -ano | findstr :8888

# If found, kill the process
powershell -Command "Stop-Process -Id [PID] -Force"
```

**After dry run:** Kill background servers to avoid conflicts

### Pre-approve Commands

To avoid permission popups, pre-approve in Claude Code settings:
- File operations: `write`, `edit`
- Common bash: `npm install`, `npm init`, `mkdir -p`
- Server commands: `netlify dev`, `python -m http.server`
