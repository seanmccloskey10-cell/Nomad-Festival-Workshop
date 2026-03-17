Prepare the Nomad Workshop for a clean dry run.

Do the following steps in order:

1. Kill any running node processes to clear port conflicts:
   - Run: `taskkill //F //IM node.exe //T` (suppress errors if none running)

2. Delete `index.html` if it exists in the project root (clean slate so Claude builds from scratch)

3. Check backup snapshots in `backup/` — list which ones exist and flag any missing ones:
   - backup/prompt1-result.html
   - backup/prompt2-result.html
   - backup/prompt3-result.html
   - backup/prompt4-result.html

4. Read `lesson/PROMPTS.md` and display all 4 prompts clearly, formatted and ready to copy-paste or dictate

Then output a concise day-of checklist:
- [ ] index.html deleted (clean slate)
- [ ] Backup snapshots: list which exist / which are missing
- [ ] .env.local present with all 3 keys: ANTHROPIC_API_KEY, OPENAI_API_KEY, OPENWEATHER_API_KEY (check file exists, don't read values)
- [ ] Claude Code open in VS Code, font size bumped up for projection
- [ ] Browser ready to preview index.html (open after Prompt 1)
- [ ] backup/prompt4-result.html open in a background browser tab (final fallback)
- [ ] Whispr Flow running — pre-load P4 demo answer: "I'm a burnt-out designer, been in London four years. I need warmth, a beach nearby, good coffee shops, and decent WiFi. Budget around £1,200 a month, want somewhere I can actually slow down."
- [ ] Wi-Fi tested (or hotspot ready)
- [ ] netlify dev ready to run for Prompt 3 onward
