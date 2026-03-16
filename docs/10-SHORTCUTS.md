# Shortcuts Reference

## How Slash Commands Work

Slash commands are `.md` files in `.claude/commands/` directory. Each file becomes a command.

**Example:** `.claude/commands/enter-teacher.md` → `/enter-teacher` command

When you type `/enter-teacher`, Claude reads the prompt from `enter-teacher.md` and executes it.

---

## Getting Started

**First time in a new project:**
1. Copy `docs/` folder to your project
2. Say: "Read all the documentation files in docs/ (files 01-10)"
3. Claude automatically creates shortcuts below

---

## Available Commands (Created Automatically)

### `/enter-teacher`
**Activates Teacher Mode** - Follow lesson script, no spoilers

**What it does:**
- Follow PROMPTS.md as a guide (adapt for edge cases)
- NEVER mention future prompts or features (no spoilers)
- Flag ALL errors immediately (unless explicitly documented as intentional)
- Only show ✅ for completed features
- Follow 04-COMMUNICATION-STYLE.md for tone and responses
- Build what's requested, celebrate completions only

**Created automatically** when Claude reads docs for the first time.

---

### `/exit-teacher`
**Exit to Meta Mode** - Full course design discussion

**What it does:**
- Full access to discuss future prompts and strategy
- Collaborative course design with teacher
- No teaching constraints
- Can discuss improvements, planning, documentation updates

**Created automatically** when Claude reads docs for the first time.

---

## Creating Additional Custom Commands

1. Add `your-command.md` to `.claude/commands/` directory
2. Write the prompt Claude should execute
3. Use `/your-command` in chat

**Note:** The `.claude/commands/` directory is created automatically when Claude reads your docs. You can add more commands as needed.
