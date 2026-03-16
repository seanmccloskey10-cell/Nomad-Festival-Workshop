# Lessons Learned - Wordle Clone

**⚠️ This is a PROJECT-SPECIFIC EXAMPLE, not a template.**

---

## 🚨 CRITICAL: This is a PATTERN Example, Not Content to Copy

**This document uses Wordle dry runs to TEACH you the tracking structure.**

### ✅ What to Learn (The PATTERN):
- **Structure:** Dry Run #X → What Worked → What to Fix → Action Items → Metrics
- **Problem-solution format:** Problem → Impact → Solution → Result
- **Continuous improvement:** How to track 10% better each iteration
- **Success metrics:** What to measure (errors, a-ha moments, confusion points)
- **Template section:** Ready-to-use format for future dry runs

### ❌ What NOT to Copy (The CONTENT):
- **Wordle-specific issues** (word list bugs, color feedback, 5x6 grids)
- **Wordle dry run numbers** (Your project starts at Dry Run #1, not #6)
- **Wordle lessons** (branch structure issues, intentional bugs - your issues will differ)
- **Wordle metrics** (5 prompts executed - your project has different prompts)

### 🎯 How to Use This:
1. **Read the Wordle example below** to understand the tracking pattern
2. **Create YOUR OWN lessons-learned file** starting at Dry Run #1
3. **Keep the structure** (sections, problem-solution format, metrics tracking)
4. **Replace the content** (your issues, your solutions, your metrics, your learnings)

**Example:**
- ✅ Keep: "## Dry Run #X" structure
- ❌ Don't copy: "Dry Run #6"
- ✅ Keep: "### ✅ What Worked Well" section
- ❌ Don't copy: "Documented intentional bugs (25-word list)"

**For new projects:** Start with Dry Run #1 and YOUR project's actual issues.

---

## Wordle Example Below (Learn the Pattern)

---

## Purpose
This document tracks improvements after each dry run. Goal: Make each lesson 10% better than the last.

---

## Dry Run #6 (Current - In Progress)

### 🔧 Major Fix: Context/Memory Problem
**Problem:** New branch structure lost incremental teaching progression
**Impact:** Claude over-delivered on Prompt 3 (400+ words instead of 25)
**Root Cause:** No documentation of intentional limitations

**Solution Implemented:**
- ✅ Created IMPLEMENTATION-GUIDE.md with exact build specs
- ✅ Documented intentional bugs (25-word list creates Prompt 4's teaching moment)
- ✅ Added .gitignore to block build files on master
- ✅ Created LESSONS-LEARNED.md (this file)

**Result:** Context preserved in documentation, not branches

### 🔧 Issue #2: Spoiling Future Prompts After /read
**Problem:** After reading context files, Claude summarized by saying "Prompt 4: Fix the word list bug"
**Impact:** Takes away from the lesson - user shouldn't know what's coming next
**User feedback:** "Don't say what we do in the future. That takes away from the lesson."

**Solution:**
After `/read`, ONLY confirm:
- ✅ Files loaded
- ✅ Ready to start
- ❌ DON'T mention future prompt numbers or what they do
- ❌ DON'T list the roadmap

**Correct response after /read:**
> "Ready to build! Waiting for your first prompt."

**Incorrect response:**
> "Ready for: Prompt 1 (Layout), Prompt 2 (Polish), Prompt 3 (Keyboard)..."

### 🎯 Action Items for Next Dry Run
- [ ] Reference IMPLEMENTATION-GUIDE.md BEFORE starting each prompt
- [ ] Verify word list has exactly ~25 words in Prompt 3
- [ ] Confirm "MOVED" is NOT in Prompt 3's word list
- [ ] Test that Prompt 4's bug actually exists before building Prompt 5
- [ ] Only show ✅ for completed features (never ❌ or future spoilers)
- [ ] After /read: Just say "Ready to build!" - NO roadmap preview

---

## Dry Run #5 (Previous Runs)

### ✅ What Worked Well
- Restructured PROMPTS.md to match new 4-phase format
- Added Prompt Pilot Framework (FRAMEWORK.md)
- Clean separation: Foundation → Polish → Functionality
- Golden Prompt concept introduced (optional, don't force it)

### 🔧 What to Fix
**Issue:** Too many branches (master, solution, complete-wordle, dry-run-X)
**Fix:** Simplified to two-branch structure (master + solution)

**Issue:** Multiple "Complete Dry Run #X" commits cluttering history
**Fix:** .gitignore blocks build files, no cleanup commits needed

### 💡 Key Insights
- **Don't force methodologies** - Golden Prompt doesn't fit every project
- **Efficiency matters** - User feedback: "Seems inefficient" led to structure overhaul
- **Context is critical** - "Chat MUST HAVE CONTEXT/MEMORY" → led to IMPLEMENTATION-GUIDE.md

---

## General Lessons (Apply to All Dry Runs)

### ⚠️ Never Do This:
1. **Over-deliver on prompts** - Stick to exact specs in IMPLEMENTATION-GUIDE.md
2. **Spoil future prompts** - Don't say "that's coming in Prompt 4!"
3. **Show incomplete features** - Never use ❌ crosses in progress updates
4. **Skip intentional limitations** - They create teaching moments

### ✅ Always Do This:
1. **Read IMPLEMENTATION-GUIDE.md first** - Know what to build AND what NOT to build
2. **Celebrate completions only** - Use ✅ for what's done, ignore what's not
3. **Follow incremental progression** - Each prompt builds ONE major feature set
4. **Preserve pedagogical bugs** - Limited word list in Prompt 3 is INTENTIONAL
5. **Test at each step** - Verify the teaching moment exists (e.g., "MOVED" fails in Prompt 3)

### 🎨 Creative Copy That Works
- *(Add proven phrases/explanations from successful dry runs)*
- *(Examples of user "a-ha" moments)*
- *(Wording that resonated well)*

---

## Success Metrics Tracking

### Dry Run #6 Goals:
- [ ] All 5 prompts execute without errors
- [ ] User experiences "a-ha" moment at Prompt 4 (fixing word list bug)
- [ ] Zero permission popups (pre-approved commands)
- [ ] No technical confusion requiring clarification
- [ ] Prompt 5 delivers "I built real Wordle!" satisfaction

**Target:** 90%+ success rate on all metrics

---

## Template for Future Dry Runs

```markdown
## Dry Run #X (Date)

### ✅ What Worked Well
- [Keep doing this]

### 🔧 What to Fix
- **Problem:** [Description]
- **Impact:** [How it affected the lesson]
- **Solution:** [What we changed]
- **Result:** [Outcome]

### 🎯 Action Items for Next Run
- [ ] Specific improvement #1
- [ ] Specific improvement #2

### 💬 User Feedback Highlights
- "[Direct quote of positive feedback]"
- "[Area that caused confusion]"

### 📊 Metrics
- Prompts executed successfully: X/5
- A-ha moments: Yes/No
- Permission popups: X
- Technical clarifications needed: X
```

---

## Next Update

After completing Dry Run #6, document:
1. What made the user say "WOW" or "I love that"
2. Any friction points or confusion
3. Creative copy that resonated
4. Technical issues and solutions
5. Updated action items for Dry Run #7
