// 🍕 Pizza Promise Demo - Understanding Promises with Food!
console.log("=== 🍕 Welcome to Tony's Async Pizza Shop! ===\n");

// 🎯 Promise Constructor - Creating a Pizza Order
function orderPizza(type, difficulty = "easy") {
    return new Promise((resolve, reject) => {
        console.log(`📞 Order received: ${type} pizza`);
        console.log(`👨‍🍳 Chef is preparing your ${type} pizza...`);
        
        // Simulate cooking time based on difficulty
        const cookingTime = difficulty === "hard" ? 3000 : 2000;
        const successRate = difficulty === "hard" ? 0.7 : 0.8; // Harder pizzas fail more often
        
        setTimeout(() => {
            const success = Math.random() > (1 - successRate);
            
            if (success) {
                resolve(`🎉 Your delicious ${type} pizza is ready! Enjoy! 🍕`);
            } else {
                reject(`😞 Sorry, we ran out of ${type} ingredients. Try another pizza!`);
            }
        }, cookingTime);
    });
}

// 🎮 Demo 1: Basic Promise Usage
console.log("--- 🎮 Demo 1: Ordering a Margherita Pizza ---");
orderPizza("Margherita")
    .then(successMessage => {
        console.log("✅ Success:", successMessage);
        console.log("😋 Mmm, this pizza is amazing!\n");
    })
    .catch(errorMessage => {
        console.log("❌ Order failed:", errorMessage);
        console.log("😢 Guess I'll try something else...\n");
    });

// 🎮 Demo 2: Multiple Orders
console.log("--- 🎮 Demo 2: Ordering Multiple Pizzas ---");

setTimeout(() => {
    orderPizza("Pepperoni")
        .then(message => console.log("🍕 Pepperoni:", message))
        .catch(error => console.log("❌ Pepperoni failed:", error));

    orderPizza("Hawaiian", "hard")
        .then(message => console.log("🍕 Hawaiian:", message))
        .catch(error => console.log("❌ Hawaiian failed:", error));

    orderPizza("Supreme")
        .then(message => console.log("🍕 Supreme:", message))
        .catch(error => console.log("❌ Supreme failed:", error));
}, 1000);

// 🎓 Student Challenge Function - Make your own promise!
function makeMilkshake(flavor) {
    return new Promise((resolve, reject) => {
        console.log(`🥤 Making ${flavor} milkshake...`);
        
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% success rate
            
            if (success) {
                resolve(`🎉 ${flavor} milkshake is ready! So creamy! 🥤`);
            } else {
                reject(`😞 Oops! The milkshake machine broke while making ${flavor}`);
            }
        }, 1500);
    });
}

// Test the student challenge function
setTimeout(() => {
    console.log("\n--- 🎓 Student Challenge: Milkshake Promise ---");
    makeMilkshake("Chocolate")
        .then(result => console.log("✅", result))
        .catch(error => console.log("❌", error));
}, 3000);

// 🔗 Promise States Demo
console.log("\n--- 📊 Promise States Demonstration ---");

const pizzaOrder = orderPizza("Veggie");
console.log("🔄 Pizza promise state: PENDING");

pizzaOrder
    .then(result => {
        console.log("✅ Pizza promise state: FULFILLED");
        console.log("🎊 Result:", result);
    })
    .catch(error => {
        console.log("❌ Pizza promise state: REJECTED");
        console.log("💔 Error:", error);
    });

// 🎪 Fun with Promise Methods
setTimeout(() => {
    console.log("\n--- 🎪 Promise.resolve() and Promise.reject() Demo ---");
    
    // Instantly resolved promise
    Promise.resolve("🚀 This resolves immediately!")
        .then(message => console.log("✅", message));
    
    // Instantly rejected promise
    Promise.reject("💥 This rejects immediately!")
        .catch(error => console.log("❌", error));
        
}, 4000);

// 🎯 Key Takeaways
setTimeout(() => {
    console.log("\n=== 🎯 Key Promise Takeaways ===");
    console.log("1️⃣ Promises have 3 states: pending, fulfilled, rejected");
    console.log("2️⃣ Use .then() to handle success");
    console.log("3️⃣ Use .catch() to handle errors");
    console.log("4️⃣ Promises are like ordering food - you get a 'receipt' and wait!");
    console.log("5️⃣ Multiple promises can run at the same time! 🚀");
}, 6000);