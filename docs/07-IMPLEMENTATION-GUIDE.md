# Implementation Guide: Wordle Clone

**⚠️ This is a PROJECT-SPECIFIC EXAMPLE, not a template.**

---

## 🚨 CRITICAL: This is a PATTERN Example, Not Content to Copy

**This document uses Wordle to TEACH you the documentation structure.**

### ✅ What to Learn (The PATTERN):
- **Structure:** How to organize by prompts (Prompt 1, Prompt 2, etc.)
- **Sections:** "What learner asks" → "What should be built" → "Files created" → "Key characteristics"
- **Progressive enhancement:** How to document incremental feature builds
- **Intentional limitations:** How to specify pedagogical bugs when needed
- **"What NOT to build yet":** How to prevent over-delivery

### ❌ What NOT to Copy (The CONTENT):
- **Wordle-specific features** (5x6 grids, keyboards, color feedback, word lists)
- **Wordle file names** (index.html, app.js, styles.css - yours will differ)
- **Wordle prompts** (Your project has different prompts)
- **Wordle bugs** (25-word list limitation - your project has different needs)

### 🎯 How to Use This:
1. **Read the Wordle example below** to understand the documentation pattern
2. **Create YOUR OWN implementation guide** with YOUR project's content
3. **Keep the structure** (sections, format, progressive enhancement approach)
4. **Replace the content** (your features, your files, your prompts, your limitations)

**Example:**
- ✅ Keep: "Prompt 1: [Phase Name]" structure
- ❌ Don't copy: "Build the Basic Game Layout"
- ✅ Keep: "What should be built:" section
- ❌ Don't copy: "5x6 grid of empty tiles"

---

## Wordle Example Below (Learn the Pattern)

---

## Purpose
This guide documents the incremental progression for teaching the Wordle Clone project. Each prompt builds specific features with **intentional limitations** that are fixed in later prompts for pedagogical purposes.

---

## Prompt 1: Build the Basic Game Layout (FOUNDATION)

**What the learner asks:**
> "Let's create the popular word-guessing game called Wordle. We need 5X6 boxes for the letters, keyboard under, Prompt Pilot Wordle Game as the header, keep it basic pls"

**What should be built:**
- Basic HTML file with 5x6 grid of empty tiles
- On-screen keyboard with QWERTY layout (Q-P, A-L, ENTER-Z-M-⌫)
- Simple header with title "Prompt Pilot Wordle Edition"
- Basic CSS styling (dark theme, bordered tiles, gray keyboard keys)
- **NO JavaScript functionality yet** - just visual structure
- Separate CSS file (styles.css) for organization

**Files created:**
- `index.html` - structure only
- `styles.css` - basic dark theme
- `app.js` - empty placeholder

**Key characteristics:**
- Clean, minimal structure
- Dark background (#121213)
- Tiles: 62px × 62px with 2px borders (#3a3a3c)
- Keyboard keys: gray background (#818384)

---

## Prompt 2: Make It Look Professional (POLISH)

**What the learner asks:**
> "Ok, make the site look more professional with a header, footer and how to play section for beginners. Improve the visual appearance where possible with transitions, hover etc"

**What should be built:**
- Enhanced header with gradient background
- Footer with copyright/credits
- "How to Play" section explaining game rules
- Visual improvements:
  - Gradients on header/footer
  - Hover effects on tiles and keyboard keys
  - Smooth transitions
  - Box shadows for depth
  - Animation effects (slide-down header, fade-in content)

**Files modified:**
- `index.html` - add header gradient, footer, about section
- `styles.css` - add transitions, hover effects, animations

**Still no functionality** - game looks professional but doesn't work yet

**Key additions:**
- Header gradient: `linear-gradient(to right, #2d2d30, #4a4a4f, #6e6e73)`
- Tile hover: scale(1.05), border color change
- Key hover: opacity/transform effects
- About section with game rules explanation

---

## Prompt 3: Make the Keyboard Work (FUNCTIONALITY)

**What the learner asks:**
> "Lets integrate the keyboard, allow users to type the letters in and use backspace. Then add logic to show errors for less than 5 letters, invalid words, duplicates etc"

**What should be built:**
- Keyboard functionality (on-screen clicking + physical keyboard)
- Letter input displayed in tiles
- Backspace functionality
- ENTER key submits guess
- Error validation:
  - Not enough letters (< 5)
  - Not in word list
  - Already guessed (duplicate prevention)
- Error message display with shake animation
- Game state tracking (currentRow, currentTile, guesses array)
- **INTENTIONAL LIMITATION: Small word list (~25 words)**

**Critical implementation details:**
```javascript
// MUST use a LIMITED word list (approximately 25 words)
// DO NOT include "MOVED" - this creates the bug for Prompt 4
const VALID_WORDS = [
    'ABOUT', 'ABOVE', 'ACTOR', 'ADMIT', 'AFTER', 'AGENT', 'AGREE', 'ALLOW',
    'BEGIN', 'BEING', 'BLACK', 'BOARD', 'BUILD', 'CATCH', 'CHAIR', 'CHECK',
    'CLEAN', 'CLEAR', 'COUNT', 'DAILY', 'DREAM', 'EARLY', 'ENTER', 'FIRST', 'FRAME'
];
```

**Files modified:**
- `app.js` - full keyboard implementation with **LIMITED** word list
- `styles.css` - error message styling, shake animation

**Why this matters:**
The limited word list is **pedagogically intentional**. When a learner tries common words like "MOVED", "THINK", "WATCH", etc., they'll encounter "Not in word list" errors. This creates the teaching moment for Prompt 4.

**What works:**
- Typing letters (on-screen and physical keyboard)
- Backspace removes letters
- ENTER validates and moves to next row
- Error messages with shake animation
- Can complete 6 guesses with valid words

**What doesn't work:**
- No color feedback (tiles don't turn green/yellow/gray)
- No win/lose detection
- Many common words missing from list

---

## Prompt 4: Fix the Word List Bug (FUNCTIONALITY)

**What the learner asks:**
> "Moved is not in the word list. Please debug and ensure we have a comprehensive list for user entries"

**The pedagogical moment:**
The learner has been using the game and encountered the frustrating "Not in word list" error when trying common words. This teaches:
- Real-world debugging (identifying insufficient data)
- The importance of comprehensive word lists
- How to expand/improve existing functionality

**What should be built:**
- Expand VALID_WORDS to 500-660+ comprehensive word list
- Must include commonly used words: MOVED, THINK, WATCH, WORLD, HOUSE, etc.
- **NO other code changes** - just replace the word list

**Files modified:**
- `app.js` - replace ~25 word array with 660+ word array

**Before (25 words):**
```javascript
const VALID_WORDS = [
    'ABOUT', 'ABOVE', 'ACTOR', ... // only ~25 words
];
```

**After (660+ words):**
```javascript
const VALID_WORDS = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', ... // 660+ words including MOVED
];
```

**The "a-ha" moment:**
"Oh! The code was working fine - we just needed more words in our dictionary. Now I understand data vs. logic bugs!"

---

## Prompt 5: Add Color Feedback & Winning (FUNCTIONALITY)

**What the learner asks:**
> "When a word is entered, add the iconic tile flipping, left to right animation and also highlight letters in amber, green or leave blank depending on letter placement versus the target word. Add winning messages and animations depending on the users score"

**What should be built:**
- Color feedback system:
  - Green (#538d4e): correct letter, correct position
  - Yellow/Amber (#b59f3b): correct letter, wrong position
  - Gray (#3a3a3c): letter not in word
- Tile flip animation (left to right, staggered)
- Keyboard key color updates (match tile colors)
- Win detection (guessed secret word)
- Lose detection (used all 6 rows)
- Victory messages based on score:
  - Row 1: "Genius!"
  - Row 2: "Magnificent!"
  - Row 3: "Impressive!"
  - Row 4: "Splendid!"
  - Row 5: "Great!"
  - Row 6: "Phew!"
- Bounce animation for winning row
- Game over state (block input after win/lose)

**Critical implementation details:**
- Handle duplicate letters correctly (Wordle-accurate color logic)
- Staggered flip animation: 300ms delay between tiles
- Keyboard priority: green > yellow > gray (don't downgrade colors)
- Show secret word on game over

**Files modified:**
- `app.js` - add color logic, animations, win/lose detection
- `styles.css` - add flip animation, color classes, bounce animation

**Key functions to implement:**
```javascript
function getColors(guess, secret) // Handles duplicate letters correctly
function colorTiles(guess, rowIndex) // Flip animation + coloring
function updateKeyboardColor(letter, color) // Keyboard feedback
function bounceRow(rowIndex) // Winning celebration
```

**What now works:**
- Full Wordle experience
- Color-coded feedback
- Win/lose detection
- Victory animations
- Keyboard visual feedback

---

## Bonus Prompts (Optional)

### Play Again Button
- Modal overlay on win/lose
- "Play Again" button resets game
- New random secret word
- Clear all tiles and keyboard colors

### Remove the Cheat Code
- Remove `console.log('Secret word:', secretWord)` from code

### Hard Mode
- Toggle switch for hard mode
- Enforce: revealed hints must be used in subsequent guesses
- Green letters must stay in same position
- Yellow letters must be included (but can move)

---

## File Structure Summary

### After Prompt 1:
```
index.html (basic structure)
styles.css (basic dark theme)
app.js (empty placeholder)
```

### After Prompt 2:
```
index.html (enhanced with header/footer/about)
styles.css (gradients, transitions, hover effects)
app.js (still empty)
```

### After Prompt 3:
```
index.html (unchanged)
styles.css (+ error messages, shake animation)
app.js (full keyboard, LIMITED 25-word list) ⚠️
```

### After Prompt 4:
```
index.html (unchanged)
styles.css (unchanged)
app.js (expanded to 660+ word list)
```

### After Prompt 5:
```
index.html (unchanged OR merged CSS inline)
styles.css (+ flip/bounce animations)
app.js (+ color system, win/lose, animations)
```

---

## Teaching Philosophy

**Progressive Enhancement:**
- Each prompt adds ONE major feature set
- Don't over-deliver (e.g., don't add colors in Prompt 3)
- Maintain intentional limitations until explicitly fixed

**Intentional Bugs:**
- Prompt 3's limited word list is NOT a mistake
- It creates a real debugging experience in Prompt 4
- Teaches: "Sometimes the code is fine, you need better data"

**A-ha Moments:**
- Prompt 1: "I made the layout!"
- Prompt 2: "It looks professional!"
- Prompt 3: "I can type and it validates!"
- Prompt 4: "I fixed a real bug by improving the data!"
- Prompt 5: "I built the full Wordle game!"

---

## Common Pitfalls to Avoid

❌ **Don't add comprehensive word list in Prompt 3** - Breaks the pedagogical flow for Prompt 4

❌ **Don't add color feedback in Prompt 3** - That's Prompt 5's job

❌ **Don't skip error messages in Prompt 3** - Critical for user experience

❌ **Don't over-engineer** - Keep each prompt focused on its specific goals

✅ **Do follow the documented progression during dry runs** - Each limitation is intentional, adapt for edge cases

✅ **Do test each prompt** - Ensure intentional bugs exist when expected

✅ **Do celebrate small wins** - Each prompt is a complete milestone
