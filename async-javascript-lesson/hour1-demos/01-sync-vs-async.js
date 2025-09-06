// 🚀 Async JavaScript Lesson - Hour 1: Sync vs Async Demo
console.log("=== 🎯 Welcome to Async JavaScript Adventure! ===\n");

// 🚫 THE BAD WAY - Blocking/Synchronous Code
console.log("--- ❌ The BLOCKING Way (Synchronous) ---");
console.log("🍕 Starting to cook pizza...");

// This simulates a long-running operation that BLOCKS everything
console.time("Pizza Cooking Time");
for(let i = 0; i < 1000000000; i++) {
    // Simulating heavy computation - this blocks the main thread!
    if (i % 100000000 === 0) {
        // Show progress every 100 million iterations
        console.log(`🔄 Pizza cooking... ${(i/1000000000 * 100).toFixed(0)}% done`);
    }
}
console.timeEnd("Pizza Cooking Time");

console.log("🎉 Pizza is ready!");
console.log("📋 Taking another order..."); // This had to wait!
console.log("😞 Customer is angry because they waited so long!\n");

// ✅ THE GOOD WAY - Non-blocking/Asynchronous Code
console.log("--- ✅ The NON-BLOCKING Way (Asynchronous) ---");
console.log("🍕 Starting to cook pizza...");

setTimeout(() => {
    console.log("🎉 Pizza is ready!");
    console.log("😊 Customer is happy - got their pizza hot and fresh!");
}, 2000); // Pizza takes 2 seconds to cook

console.log("📋 Taking another order..."); // This runs immediately!
console.log("📋 Taking yet another order..."); // This too!
console.log("📋 Helping other customers..."); // And this!
console.log("✨ Restaurant is running smoothly!\n");

// 🎮 INTERACTIVE DEMO - Let's see the timing!
console.log("--- 🎮 Interactive Timing Demo ---");
console.log("⏰ Watch the timestamps to see the order of execution!");

console.log("1️⃣ First log - " + new Date().toLocaleTimeString());

setTimeout(() => {
    console.log("3️⃣ This runs after 1 second - " + new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
    console.log("4️⃣ This runs after 2 seconds - " + new Date().toLocaleTimeString());
}, 2000);

console.log("2️⃣ Second log (immediate) - " + new Date().toLocaleTimeString());

// 🤔 PREDICTION GAME
console.log("\n--- 🤔 Prediction Game ---");
console.log("🎯 Can you predict the order of these console.logs?");
console.log("A) I run first");

setTimeout(() => console.log("B) I run second"), 0);

console.log("C) I run third");

Promise.resolve().then(() => console.log("D) I run fourth"));

console.log("E) I run fifth");

// The actual order will be: A, C, E, D, B
// Why? Because Promise.resolve().then() has higher priority than setTimeout!

setTimeout(() => {
    console.log("\n🎓 Answer: The order was A, C, E, D, B!");
    console.log("💡 Key insight: Promises have higher priority than setTimeout in the event loop!");
}, 100);