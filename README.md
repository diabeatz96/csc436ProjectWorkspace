# CSC 436 — Class Workspace

This repository is the central space for all lessons, demos, in-class activities, and assignments for CSC 436. Use it to follow along in class, review examples, and track your work.

## What’s Inside
- `in-class-assignments/` — Daily plans, PDFs, and activity materials
  - `wed-sep10/` — Open source group discussion & voting plan
  - `sep-10-class-plan.md` — Sep 10 in-class work plan (tracks for async review, Project 1, CSI CS website work)
  - `AsyncPractice.pdf` — Async/Promises practice reference
- `web-showcase/` — A simple HTML/CSS/JS playground used in class
  - `index.html` — Minimal page with DOM + Async demo buttons
  - `styles.css` — Basic styling
  - `script.js` — Commented examples for arrays, strings, objects, dates, DOM, async, types, errors, math, JSON, storage, clipboard

## How to Use This Repo
- Follow the daily plan in `in-class-assignments/` for what to do during class.
- Open `web-showcase/index.html` in your browser and use the buttons or DevTools console to explore examples.
- Add your own notes, snippets, and experiments in separate folders or branches as needed.

## Quick Start
1. Open the `web-showcase/index.html` file in your browser (double-click or drag into a tab).
2. Open DevTools (Option+Command+I on macOS) and try snippets from `script.js`.
3. Click the DOM/Async demo buttons on the page to see behavior in real time.

## Contributing (Students)
- Make small, focused commits with clear messages.
- Keep examples self-contained and well-commented.
- If you add new in-class materials, place them under `in-class-assignments/<date-or-topic>/`.

## Git Remotes (Optional)
If you created a remote on GitHub and want to link it:
```zsh
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```
Verify:
```zsh
git remote -v
```

## Notes
- No build step required — everything runs in the browser.
- If you find issues or want enhancements, open an issue or leave a note in class.
