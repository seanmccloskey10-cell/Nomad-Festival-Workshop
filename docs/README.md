# Claude Code Onboarding Documentation

This folder contains all the context files that new Claude Code agents should read at the start of each project session to understand how you work, your teaching structure, and project standards.

## 📚 Reading Order

When starting a new project chat, read these files in order:

### Core Methodology
**[01-FRAMEWORK.md](01-FRAMEWORK.md)** - The Prompt Pilot Framework
- 4-phase building approach (OBJECTIVE → Foundation → Functionality → Polish → Test)
- Universal structure for any project
- Checklists as high-impact suggestions (not mandatory)
- Claude-specific guidance on applying the framework

**[02-PROMPT-STRUCTURE-EXAMPLE.md](02-PROMPT-STRUCTURE-EXAMPLE.md)** - Prompt Pattern Example
- Shows HOW to structure prompts (not WHAT to build)
- Phase tagging with emojis
- Casual student voice examples
- Intentional pedagogical bugs
- Completion checklist + gamification

**[03-CLAUDE-GUIDE.md](03-CLAUDE-GUIDE.md)** - How Claude Should Operate
- Teacher Mode vs Meta Mode
- What to do (and NOT do) during lessons
- Error handling rules (intentional bugs vs real errors)
- Response patterns after `/read`

**[04-COMMUNICATION-STYLE.md](04-COMMUNICATION-STYLE.md)** - How to Communicate
- Response style (concise, bullet points, limited emojis)
- Decision making patterns
- Error handling tone
- Teaching-specific communication

### Workflow & Structure
**[05-PROJECT-SETUP-GUIDE.md](05-PROJECT-SETUP-GUIDE.md)** - Project Setup Guide
- Two-branch structure setup (master + solution)
- .gitignore configuration
- Teaching documents creation
- Common project type examples

**[06-DRY-RUN-GUIDE.md](06-DRY-RUN-GUIDE.md)** - Dry Run Workflow
- Practice iterations workflow
- Before/during/after dry run process
- LESSONS-LEARNED updates
- Quality standards

### Project-Specific Examples
**[07-IMPLEMENTATION-GUIDE.md](07-IMPLEMENTATION-GUIDE.md)** - Example: Wordle Clone
- Step-by-step build specs for each prompt
- Intentional limitations documented
- What to build AND what NOT to build yet
- Common pitfalls to avoid
- *Note: This is project-specific, will vary per lesson*

**[08-LESSONS-LEARNED.md](08-LESSONS-LEARNED.md)** - Continuous Improvement Log
- What worked well in previous dry runs
- Issues found and solutions implemented
- Action items for next runs
- Success metrics tracking
- *Note: Gets updated after each dry run*

### Optional Techniques
**[09-GOLDEN-PROMPT.md](09-GOLDEN-PROMPT.md)** - Optional Teaching Technique
- "Is my understanding correct?" learning style
- When to use (and when NOT to use)
- Example structure
- Key traits and characteristics

**[10-SHORTCUTS.md](10-SHORTCUTS.md)** - Quick Command Reference
- `/enter-teacher` - Activate Teacher Mode (created automatically)
- `/exit-teacher` - Exit to Meta Mode (created automatically)

## 🎯 Quick Start for New Claude Agent

**Copy `docs/` folder to your project, then say:**

```
Read all the documentation files in docs/ (files 01-10).
```

**Claude will:**
1. Read all 10 methodology files
2. Check for project-specific files in lesson/ directory
3. Automatically create `/enter-teacher` and `/exit-teacher` shortcuts
4. Enter the appropriate mode based on what exists

---

### 📁 Folder Structure

**docs/** - Generic methodology (copy to new projects)
- Contains framework, guides, examples, shortcuts
- Portable across all teaching projects

**lesson/** - Project-specific teaching materials
- Contains PROMPTS.md, IMPLEMENTATION-GUIDE.md, LESSONS-LEARNED.md
- Unique to each project
- Stays with the project permanently

---

### Path A: Existing Project (Dry Run Mode)
**If project has lesson/PROMPTS.md, lesson/IMPLEMENTATION-GUIDE.md:**
- ✅ Claude enters Teacher Mode
- ✅ Reads your project files
- ✅ Says: "Ready to build! Waiting for your first prompt."
- ✅ You execute the lesson following lesson/PROMPTS.md

**Use case:** Running dry runs 2, 3, 4... of an existing lesson

---

### Path B: Brand New Project (Setup Mode)
**If project has NO teaching files yet:**
- 🔧 Claude enters Setup/Meta Mode
- 🔧 Automatically creates lesson/ folder with template files:
  - lesson/PROMPTS.md (empty template)
  - lesson/IMPLEMENTATION-GUIDE.md (empty template)
  - lesson/LESSONS-LEARNED.md (Dry Run #1 template)
- 🔧 Asks what you're building to help populate templates
- 🔧 Can help create two-branch structure and .gitignore if needed

**Use case:** Starting Project #1, #2, #3... for the first time

**What happens next:**
- Tell Claude what you're building
- Claude helps populate the lesson templates
- OR delete lesson/ folder and build collaboratively without formal structure
- Follow [05-PROJECT-SETUP-GUIDE.md](05-PROJECT-SETUP-GUIDE.md) for complete setup

---

**⚠️ Important:** Files 07-08 use Wordle as an example project. Learn the documentation PATTERN (how to structure implementation guides, track lessons), not the Wordle-specific content. These patterns apply to ANY teaching project.

## 📋 File Purpose Summary

| File | Purpose | Update Frequency |
|------|---------|------------------|
| 01-FRAMEWORK | Core teaching methodology | Rarely (stable) |
| 02-PROMPT-STRUCTURE-EXAMPLE | Prompt pattern examples | Rarely (stable) |
| 03-CLAUDE-GUIDE | Claude operational rules | Occasionally (refine) |
| 04-COMMUNICATION-STYLE | Communication patterns | Rarely (stable) |
| 05-PROJECT-SETUP-GUIDE | New project setup | Rarely (stable) |
| 06-DRY-RUN-GUIDE | Dry run workflow | Occasionally (improve) |
| 07-IMPLEMENTATION-GUIDE | Project build specs | Per project |
| 08-LESSONS-LEARNED | Improvement tracking | After each dry run |
| 09-GOLDEN-PROMPT | Optional technique | Rarely (stable) |
| 10-SHORTCUTS | Command reference | As needed |

## 🔄 Maintenance

**After each dry run:**
1. Update [08-LESSONS-LEARNED.md](08-LESSONS-LEARNED.md) with insights
2. Refine [07-IMPLEMENTATION-GUIDE.md](07-IMPLEMENTATION-GUIDE.md) with proven copy
3. Adjust [03-CLAUDE-GUIDE.md](03-CLAUDE-GUIDE.md) if new patterns emerge

**When starting a new project:**
1. Follow [05-PROJECT-SETUP-GUIDE.md](05-PROJECT-SETUP-GUIDE.md) to set up branches
2. Create lesson/ directory with project-specific files
3. Create lesson/PROMPTS.md, lesson/IMPLEMENTATION-GUIDE.md, lesson/LESSONS-LEARNED.md
4. Begin dry runs using [06-DRY-RUN-GUIDE.md](06-DRY-RUN-GUIDE.md)

## 🎓 Goal

Give every new Claude Code agent complete context to deliver seamless, high-quality teaching sessions that follow your proven methodology.
