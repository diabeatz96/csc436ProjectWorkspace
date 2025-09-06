// ✨ Async/Await Magic - Making Promises Beautiful!
console.log("=== ✨ Welcome to Async/Await Magic Show! ===\n");

// 🔄 Let's recreate our burger functions for comparison
function getIngredients() {
    return new Promise(resolve => {
        console.log("🛒 Getting ingredients...");
        setTimeout(() => resolve("🥬🍅 Fresh ingredients ready!"), 1000);
    });
}

function cookPatty() {
    return new Promise(resolve => {
        console.log("🔥 Cooking patty...");
        setTimeout(() => resolve("🍖 Perfect patty ready!"), 1500);
    });
}

function assembleBurger() {
    return new Promise(resolve => {
        console.log("🍔 Assembling burger...");
        setTimeout(() => resolve("🎉 Amazing burger complete!"), 500);
    });
}

// 😵 THE OLD WAY - Promise Chains (callback pyramid!)
console.log("--- 😵 The Old Way: Promise Chains ---");
function makeBurgerOldWay() {
    console.log("🍔 Starting burger preparation (old way)...");
    
    getIngredients()
        .then(ingredients => {
            console.log("✅", ingredients);
            return cookPatty();
        })
        .then(patty => {
            console.log("✅", patty);
            return assembleBurger();
        })
        .then(burger => {
            console.log("✅", burger);
            console.log("🏆 Old way complete!\n");
        })
        .catch(error => {
            console.log("❌ Error:", error);
        });
}

// ✨ THE NEW WAY - Async/Await (clean and readable!)
console.log("--- ✨ The New Way: Async/Await ---");
async function makeBurgerNewWay() {
    try {
        console.log("🍔 Starting burger preparation (new way)...");
        
        const ingredients = await getIngredients();
        console.log("✅", ingredients);
        
        const patty = await cookPatty();
        console.log("✅", patty);
        
        const burger = await assembleBurger();
        console.log("✅", burger);
        
        console.log("🏆 New way complete - so much cleaner!");
        return burger;
    } catch (error) {
        console.log("❌ Something went wrong:", error);
    }
}

// 🎬 Demo Time!
makeBurgerOldWay();

setTimeout(() => {
    makeBurgerNewWay();
}, 4000);

// 🎯 Key Concepts Demo
setTimeout(async () => {
    console.log("\n--- 🎯 Key Async/Await Concepts ---");
    
    // 1. Async functions always return a Promise
    async function returnSomething() {
        return "I'm a promise now! 🎁";
    }
    
    const result = returnSomething();
    console.log("1️⃣ Async functions return promises:", result);
    console.log("1️⃣ Resolved value:", await result);
    
    // 2. Await pauses execution
    async function demonstratePause() {
        console.log("2️⃣ Before await - " + new Date().toLocaleTimeString());
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log("2️⃣ After await - " + new Date().toLocaleTimeString());
        console.log("2️⃣ See how await paused for 1 second!");
    }
    
    await demonstratePause();
    
}, 8000);

// 🎪 Error Handling Comparison
setTimeout(() => {
    console.log("\n--- 🎪 Error Handling Showdown ---");
    
    function flakyFunction() {
        return new Promise((resolve, reject) => {
            const random = Math.random();
            setTimeout(() => {
                if (random > 0.5) {
                    resolve("🎉 Success! Lucky number: " + random.toFixed(2));
                } else {
                    reject("💥 Failed! Unlucky number: " + random.toFixed(2));
                }
            }, 1000);
        });
    }
    
    // Promise way
    console.log("🔗 Promise error handling:");
    flakyFunction()
        .then(success => console.log("✅", success))
        .catch(error => console.log("❌", error));
    
    // Async/await way
    setTimeout(async () => {
        console.log("\n✨ Async/await error handling:");
        try {
            const result = await flakyFunction();
            console.log("✅", result);
        } catch (error) {
            console.log("❌", error);
        }
    }, 1500);
    
}, 10000);

// 🚀 Parallel Processing with Async/Await
setTimeout(async () => {
    console.log("\n--- 🚀 Parallel Processing Magic ---");
    
    async function slowTask(name, duration) {
        console.log(`🔄 Starting ${name}...`);
        await new Promise(resolve => setTimeout(resolve, duration));
        console.log(`✅ ${name} complete!`);
        return `${name} result`;
    }
    
    // ❌ Sequential (slow way)
    console.log("⏰ Sequential approach:");
    console.time("Sequential");
    
    await slowTask("Task A", 1000);
    await slowTask("Task B", 1000);
    await slowTask("Task C", 1000);
    
    console.timeEnd("Sequential");
    
    // ✅ Parallel (fast way)
    console.log("\n⚡ Parallel approach:");
    console.time("Parallel");
    
    const [taskA, taskB, taskC] = await Promise.all([
        slowTask("Task X", 1000),
        slowTask("Task Y", 1000),
        slowTask("Task Z", 1000)
    ]);
    
    console.timeEnd("Parallel");
    console.log("🎊 All tasks:", taskA, taskB, taskC);
    
}, 13000);

// 🎓 Advanced Patterns
setTimeout(async () => {
    console.log("\n--- 🎓 Advanced Async/Await Patterns ---");
    
    // Pattern 1: Async in loops
    console.log("1️⃣ Processing items one by one:");
    const items = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
    
    for (const item of items) {
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log("   Processed:", item);
    }
    
    // Pattern 2: Async with array methods
    console.log("\n2️⃣ Processing items in parallel:");
    const processItem = async (item) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        return `✅ ${item} processed`;
    };
    
    const results = await Promise.all(items.map(processItem));
    console.log("   Results:", results);
    
    // Pattern 3: Conditional async
    console.log("\n3️⃣ Conditional async operations:");
    const needsProcessing = true;
    
    if (needsProcessing) {
        const result = await new Promise(resolve => 
            setTimeout(() => resolve("🎯 Special processing done!"), 800)
        );
        console.log("   " + result);
    }
    
}, 17000);

// 🎉 Summary
setTimeout(() => {
    console.log("\n=== 🎉 Async/Await Summary ===");
    console.log("✨ async/await makes promises look like synchronous code");
    console.log("🔄 'await' pauses function execution until promise resolves");
    console.log("🎯 Use 'try/catch' for error handling");
    console.log("⚡ Use Promise.all() for parallel operations");
    console.log("🏆 Much cleaner than .then() chains!");
    console.log("📚 Perfect for API calls, file operations, and databases!");
}, 20000);