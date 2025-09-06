// 🍔 Burger Chain Demo - Promise Chaining Adventure!
console.log("=== 🍔 Welcome to Async Burger Builder! ===\n");

// 🥬 Step 1: Get Ingredients
function getIngredients() {
    return new Promise(resolve => {
        console.log("🛒 Going to get ingredients...");
        setTimeout(() => {
            console.log("✅ Got fresh lettuce, tomato, onion, and pickles!");
            resolve("🥬🍅 Fresh ingredients ready!");
        }, 1000);
    });
}

// 🍖 Step 2: Cook the Patty
function cookPatty() {
    return new Promise(resolve => {
        console.log("🔥 Putting patty on the grill...");
        setTimeout(() => {
            console.log("✅ Patty is perfectly grilled!");
            resolve("🍖 Juicy patty cooked to perfection!");
        }, 1500);
    });
}

// 🍞 Step 3: Toast the Buns
function toastBuns() {
    return new Promise(resolve => {
        console.log("🍞 Toasting burger buns...");
        setTimeout(() => {
            console.log("✅ Buns are golden and crispy!");
            resolve("🍞 Perfectly toasted buns!");
        }, 800);
    });
}

// 🍔 Step 4: Assemble the Burger
function assembleBurger() {
    return new Promise(resolve => {
        console.log("👨‍🍳 Master chef is assembling the burger...");
        setTimeout(() => {
            console.log("✅ Burger assembled with love!");
            resolve("🍔 Amazing burger ready to eat!");
        }, 500);
    });
}

// 📦 Step 5: Package the Order
function packageOrder() {
    return new Promise(resolve => {
        console.log("📦 Packaging your order...");
        setTimeout(() => {
            console.log("✅ Order packaged and ready for pickup!");
            resolve("🎁 Order ready for delivery!");
        }, 300);
    });
}

// 🎯 Demo 1: Sequential Burger Making (Promise Chain)
console.log("--- 🎯 Demo 1: Sequential Burger Chain ---");
console.log("⏰ Start time:", new Date().toLocaleTimeString());

getIngredients()
    .then(ingredients => {
        console.log("🎉", ingredients);
        console.log("⏰ After ingredients:", new Date().toLocaleTimeString());
        return cookPatty();
    })
    .then(patty => {
        console.log("🎉", patty);
        console.log("⏰ After patty:", new Date().toLocaleTimeString());
        return toastBuns();
    })
    .then(buns => {
        console.log("🎉", buns);
        console.log("⏰ After buns:", new Date().toLocaleTimeString());
        return assembleBurger();
    })
    .then(burger => {
        console.log("🎉", burger);
        console.log("⏰ After assembly:", new Date().toLocaleTimeString());
        return packageOrder();
    })
    .then(finalOrder => {
        console.log("🎉", finalOrder);
        console.log("⏰ End time:", new Date().toLocaleTimeString());
        console.log("🏆 BURGER CHAIN COMPLETE! Total time: ~4.1 seconds\n");
    })
    .catch(error => {
        console.log("❌ Something went wrong:", error);
    });

// 🚀 Demo 2: Parallel Processing (Some things can happen at the same time!)
setTimeout(() => {
    console.log("--- 🚀 Demo 2: Optimized Burger Making (Parallel) ---");
    console.log("💡 Pro tip: Some steps can happen at the same time!");
    console.log("⏰ Start time:", new Date().toLocaleTimeString());
    
    // Start ingredients and buns at the same time!
    Promise.all([getIngredients(), toastBuns()])
        .then(([ingredients, buns]) => {
            console.log("🎉 Got both:", ingredients, "and", buns);
            console.log("⏰ After parallel steps:", new Date().toLocaleTimeString());
            return cookPatty(); // Now cook the patty
        })
        .then(patty => {
            console.log("🎉", patty);
            return assembleBurger();
        })
        .then(burger => {
            console.log("🎉", burger);
            return packageOrder();
        })
        .then(finalOrder => {
            console.log("🎉", finalOrder);
            console.log("⏰ End time:", new Date().toLocaleTimeString());
            console.log("🏆 OPTIMIZED BURGER COMPLETE! Total time: ~3.3 seconds\n");
        });
}, 5000);

// 🎮 Interactive Demo: Build Your Custom Burger
function addCheese() {
    return new Promise(resolve => {
        console.log("🧀 Adding delicious melted cheese...");
        setTimeout(() => resolve("🧀 Extra cheesy goodness added!"), 400);
    });
}

function addBacon() {
    return new Promise(resolve => {
        console.log("🥓 Adding crispy bacon strips...");
        setTimeout(() => resolve("🥓 Crispy bacon perfection!"), 600);
    });
}

function addSpecialSauce() {
    return new Promise(resolve => {
        console.log("🥄 Adding secret special sauce...");
        setTimeout(() => resolve("🥄 Secret sauce makes everything better!"), 200);
    });
}

setTimeout(() => {
    console.log("--- 🎮 Custom Burger Builder ---");
    console.log("🍔 Building a DELUXE bacon cheeseburger!");
    
    getIngredients()
        .then(ingredients => {
            console.log("✅", ingredients);
            return Promise.all([cookPatty(), toastBuns()]); // Parallel cooking!
        })
        .then(([patty, buns]) => {
            console.log("✅", patty);
            console.log("✅", buns);
            return addCheese();
        })
        .then(cheese => {
            console.log("✅", cheese);
            return addBacon();
        })
        .then(bacon => {
            console.log("✅", bacon);
            return addSpecialSauce();
        })
        .then(sauce => {
            console.log("✅", sauce);
            return assembleBurger();
        })
        .then(burger => {
            console.log("✅", burger);
            console.log("🎊 DELUXE BURGER COMPLETE!");
            console.log("🤤 This is the most amazing burger ever created!");
        })
        .catch(error => {
            console.log("❌ Burger building failed:", error);
        });
}, 9000);

// 🎓 Key Learning Points
setTimeout(() => {
    console.log("\n=== 🎓 Promise Chaining Lessons ===");
    console.log("1️⃣ Chains let us do things in order: A → B → C → D");
    console.log("2️⃣ Each .then() gets the result from the previous step");
    console.log("3️⃣ Don't forget to 'return' the next promise in the chain!");
    console.log("4️⃣ Promise.all() lets multiple things happen at once");
    console.log("5️⃣ One .catch() at the end handles all errors in the chain");
    console.log("6️⃣ Real apps use this for: login → get data → update UI");
}, 12000);