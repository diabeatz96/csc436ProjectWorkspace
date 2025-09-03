/*
  JavaScript Utilities Showcase
  - Explore in the console via `Utils.*`
  - Each function has a brief description and quick example
*/

    // map: transform each item
    const arr = [1, 2, 3];
    const doubled = arr.map(x => x * 2); // [2, 4, 6]

    // filter: keep items that match
    const evens = arr.filter(x => x % 2 === 0); // [2]

    // reduce: accumulate a value
    const sum = arr.reduce((acc, x) => acc + x, 0); // 6

    // find: first matching item
    const found = arr.find(x => x > 1); // 2

    // includes: check for value
    const hasTwo = arr.includes(2); // true

    // sort: sort array
    const sorted = [3, 1, 2].sort(); // [1, 2, 3]

    // reverse: reverse array
    const reversed = arr.slice().reverse(); // [3, 2, 1]

    // concat: join arrays
    const combined = arr.concat([4, 5]); // [1, 2, 3, 4, 5]

    // slice: get part of array
    const part = arr.slice(1, 3); // [2, 3]

    // splice: change array in place
    const arr2 = [1, 2, 3];
    arr2.splice(1, 1, 99); // arr2 is now [1, 99, 3]

    // String Methods
    // ==============
    const str = "hello world";
    // split: string to array
    const words = str.split(" "); // ["hello", "world"]

    // join: array to string
    const joined = words.join("-"); // "hello-world"

    // replace: swap text
    const replaced = str.replace("world", "JS"); // "hello JS"

    // match: regex search
    const matched = str.match(/\w+/g); // ["hello", "world"]

    // startsWith/endsWith
    const starts = str.startsWith("hello"); // true
    const ends = str.endsWith("world"); // true

    // padStart/padEnd
    const padded = "5".padStart(3, "0"); // "005"
    const padEnd = "5".padEnd(3, "0"); // "500"

    // repeat
    const repeated = "ha".repeat(3); // "hahaha"

    // Object Methods
    // ==============
    const obj = { a: 1, b: 2 };
    // keys, values, entries
    const keys = Object.keys(obj); // ["a", "b"]
    const values = Object.values(obj); // [1, 2]
    const entries = Object.entries(obj); // [["a",1],["b",2]]

    // assign: merge objects
    const merged = Object.assign({}, obj, { c: 3 }); // {a:1, b:2, c:3}

    // freeze/seal
    const frozen = Object.freeze({ x: 1 }); // can't change x
    const sealed = Object.seal({ y: 2 }); // can't add/remove y

    // hasOwnProperty
    const hasA = obj.hasOwnProperty("a"); // true

    // Date Methods
    // ============
    const now = new Date();
    const parsed = new Date("2025-09-03");
    const locale = now.toLocaleString();
    const year = now.getFullYear();
    now.setFullYear(2020); // changes year

    // DOM Methods
    // ===========
// Add/remove/toggle class
const domDemo = document.createElement("div");
domDemo.id = "dom-demo";
domDemo.textContent = "DOM Demo Box";
domDemo.style.padding = "1rem";
domDemo.style.margin = "1rem 0";
domDemo.style.background = "#e0e7ef";
domDemo.style.color = "#222";
document.body.appendChild(domDemo);

function addClassDemo() {
  domDemo.classList.add("my-class");
  domDemo.textContent = "Class added!";
}
function removeClassDemo() {
  domDemo.classList.remove("my-class");
  domDemo.textContent = "Class removed!";
}
function toggleClassDemo() {
  domDemo.classList.toggle("my-class");
  domDemo.textContent = domDemo.classList.contains("my-class") ? "Class toggled ON" : "Class toggled OFF";
}

// Event listeners
window.addEventListener("resize", () => {
  domDemo.textContent = "Window resized!";
});

// querySelector/querySelectorAll
const h1 = document.querySelector("h1");
const allPs = document.querySelectorAll("p");

// Create/remove elements
function createDivDemo() {
  const div = document.createElement("div");
  div.textContent = "New div created!";
  div.style.background = "#fbbf24";
  div.style.margin = "0.5rem 0";
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 2000);
}

// Async Methods
// =============
function fetchDemo() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(r => r.json())
    .then(data => {
      domDemo.textContent = "Fetched: " + JSON.stringify(data);
    });
}

function promiseAllDemo() {
  Promise.all([Promise.resolve(1), Promise.resolve(2)])
    .then(res => {
      domDemo.textContent = "Promise.all: " + res.join(", ");
    });
}

function promiseRaceDemo() {
  Promise.race([Promise.resolve("first"), Promise.resolve("second")])
    .then(res => {
      domDemo.textContent = "Promise.race: " + res;
    });
}

async function asyncAwaitDemo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  domDemo.textContent = "Async/Await: " + JSON.stringify(data);
}

// Error Handling
// ==============
    try {
      throw new Error("Oops!");
    } catch (e) {
      console.error(e);
    }

    class CustomError extends Error {
      constructor(msg) {
        super(msg);
        this.name = "CustomError";
      }
    }

    // Type Checks
    // ===========
    typeof 123; // "number"
    123 instanceof Number; // false (primitive)
    Array.isArray([1,2,3]); // true
    isNaN("abc"); // true
    isFinite(10); // true

    // Math Methods
    // ============
    Math.abs(-5); // 5
    Math.max(1,2,3); // 3
    Math.min(1,2,3); // 1
    Math.pow(2,3); // 8
    Math.sqrt(9); // 3
    Math.floor(2.9); // 2
    Math.ceil(2.1); // 3
    Math.random(); // random between 0 and 1

    // JSON Methods
    // ============
    const jsonStr = JSON.stringify({ a: 1 }); // "{\"a\":1}"
    const jsonObj = JSON.parse(jsonStr); // { a: 1 }

    // Storage
    // =======
    localStorage.setItem("x", "123");
    localStorage.getItem("x");
    localStorage.removeItem("x");
    sessionStorage.setItem("y", "456");
    sessionStorage.getItem("y");
    sessionStorage.removeItem("y");


// Clipboard (async)
// navigator.clipboard.writeText("copied!");

