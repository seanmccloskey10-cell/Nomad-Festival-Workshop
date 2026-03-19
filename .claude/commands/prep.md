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

5. Read `lesson/IMPLEMENTATION-GUIDE.md` → display the "Common Mistakes to Avoid" section so the presenter has it front of mind

6. Read `website-designer/SKILL.md` in full so you have the full visual system loaded and can apply it accurately in Prompt 2

Then output a concise day-of checklist:
- [ ] index.html deleted (clean slate)
- [ ] Backup snapshots: list which exist / which are missing
- [ ] .env present with all 3 keys: ANTHROPIC_API_KEY, OPENAI_API_KEY, OPENWEATHER_API_KEY (check file exists, don't read values)
- [ ] Claude Code open in VS Code, font size bumped up for projection
- [ ] Browser ready to preview index.html (open after Prompt 1)
- [ ] backup/prompt4-result.html open in a background browser tab (final fallback)
- [ ] Whispr Flow running — pre-load P4 demo answer: "software developer, sociable, love the beach. Like community and co-living if possible." (confirmed → recommends Bali or Chiang Mai)
- [ ] Wi-Fi tested (or hotspot ready)
- [ ] netlify dev ready to run for Prompt 3 onward: `netlify dev` (port 3999)

**Emergency recovery:** `git checkout solution -- index.html` then open index.html in the browser.
