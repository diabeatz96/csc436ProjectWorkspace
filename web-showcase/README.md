# Web Showcase

A simple workspace to showcase JavaScript, HTML, and CSS. You'll write the HTML and CSS in class; this repo provides clean boilerplate for them and a rich JavaScript utilities file to explore.

## Structure

- `index.html` — Minimal HTML5 boilerplate linking CSS and JS.
- `styles.css` — Basic reset and comments (you will expand this in class).
- `script.js` — A curated set of useful, commented JavaScript utility methods. Exposes `window.Utils` for easy access in the console and includes small demos.

## Quick Start

Open `index.html` directly in your browser (double-click or drag into a tab). Then open DevTools (Option+Command+I on macOS) and try:

```js
Utils.sum(1,2,3,4)
Utils.slugify('Hello World! This is neat.')
Utils.groupBy([{type:'a'},{type:'b'},{type:'a'}], x => x.type)
```

## Notes

- All functions in `script.js` are annotated with short comments and examples.
- No build tools required; pure HTML/CSS/JS. 
- Feel free to modify or remove any utilities you don't need.
