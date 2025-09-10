# Sep 10 — In-Class Work Plan

Today you have three productive tracks to choose from. Pick the one that serves you best right now. You can switch tracks during class as needed.

## 1) Async Review (Promises + Fetch)
- Read: `in-class-assignments/AsyncPractice.pdf`
- Goals:
  - Refresh Promise fundamentals: states, chaining, error handling.
  - Practice `fetch` basics, parsing JSON, and handling errors.
  - Use `Promise.all` and `Promise.race` on small examples.
- Try in the `web-showcase`:
  - `index.html` buttons under "Async Methods Demo" run live examples.
  - In the console, experiment with: 
    - `fetch('https://jsonplaceholder.typicode.com/todos/1').then(r=>r.json())`
    - `Promise.all([Promise.resolve(1), Promise.resolve(2)])`
    - `Promise.race([fetch('/slow'), fetch('/fast')])` (use any two URLs)
- Deliverable (optional): One code snippet showing a successful `fetch` with try/catch and a short note on what went wrong if you simulate a network error.

## 2) Project 1 — Work Time
- Milestones to aim for:
  - Define scope and feature list (MVP vs stretch).
  - Sketch data models or components.
  - Create rough UI wireframe.
  - Set up folder structure and basic pages/routes.
  - Integrate one API call end-to-end if your project needs it.
- Quick checks:
  - Can you run the app from a fresh clone? Are README instructions clear?
  - Do you have at least one meaningful commit with a clear message today?
- Deliverable: Push progress to your repo and write a brief status note (what’s done, what’s next, blockers).

## 3) CSI CS Website Rehaul — Contribution
- Pick an area:
  - Content cleanup (typos, outdated info)
  - Navigation/IA improvements
  - Component/layout refactor
  - Accessibility (ARIA labels, contrast, keyboard nav)
  - Performance (image optimization, code splitting)
- Getting started:
  - Identify an issue or create one with scope and acceptance criteria.
  - Make scoped changes and open a PR.
- Deliverable: PR link with a 1–2 sentence summary of what changed and why.

## Stretch Ideas (any track)
- Add unit tests for critical functions/components.
- Improve accessibility checks using Lighthouse/axe.
- Write a short README section summarizing your learnings.

## Check-out (last 10 minutes)
- Post a quick update:
  - What you worked on
  - What you finished
  - What’s next for you
