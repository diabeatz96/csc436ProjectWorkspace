// 🌐 Multiple APIs Demo - Combining Different Data Sources
console.log("=== 🌐 Multiple APIs Adventure - Data Mashup! ===\n");

// 🎯 API Collection - Different types of data
const APIS = {
    quotes: 'https://api.quotable.io/random',
    jokes: 'https://official-joke-api.appspot.com/random_joke',
    facts: 'https://uselessfacts.jsph.pl/random.json?language=en',
    advice: 'https://api.adviceslip.com/advice',
    images: 'https://picsum.photos/300/200',
    weather: 'https://api.openweathermap.org/data/2.5/weather' // (needs API key)
};

// 🎨 Utility function to create random image URL
function getRandomImage(width = 400, height = 300) {
    return `https://picsum.photos/${width}/${height}?random=${Date.now() + Math.random()}`;
}

// 📝 Fetch Quote API
async function getInspirationalQuote() {
    try {
        console.log("📝 Fetching inspirational quote...");
        const response = await fetch(APIS.quotes);
        
        if (!response.ok) {
            throw new Error(`Quote API failed: ${response.status}`);
        }
        
        const data = await response.json();
        return {
            text: data.content,
            author: data.author,
            tags: data.tags
        };
    } catch (error) {
        console.log("❌ Quote fetch failed:", error.message);
        return {
            text: "The best time to plant a tree was 20 years ago. The second best time is now.",
            author: "Chinese Proverb",
            tags: ["wisdom"]
        };
    }
}

// 😂 Fetch Joke API
async function getFunnyJoke() {
    try {
        console.log("😂 Fetching funny joke...");
        const response = await fetch(APIS.jokes);
        
        if (!response.ok) {
            throw new Error(`Joke API failed: ${response.status}`);
        }
        
        const data = await response.json();
        return {
            setup: data.setup,
            punchline: data.punchline,
            type: data.type
        };
    } catch (error) {
        console.log("❌ Joke fetch failed:", error.message);
        return {
            setup: "Why don't scientists trust atoms?",
            punchline: "Because they make up everything!",
            type: "programming"
        };
    }
}

// 🤓 Fetch Random Fact
async function getRandomFact() {
    try {
        console.log("🤓 Fetching random fact...");
        const response = await fetch(APIS.facts);
        
        if (!response.ok) {
            throw new Error(`Facts API failed: ${response.status}`);
        }
        
        const data = await response.json();
        return {
            text: data.text,
            source: data.source_url || "Unknown"
        };
    } catch (error) {
        console.log("❌ Fact fetch failed:", error.message);
        return {
            text: "Honey never spoils. Archaeologists have found edible honey in ancient Egyptian tombs!",
            source: "Ancient wisdom"
        };
    }
}

// 💡 Fetch Advice
async function getWiseAdvice() {
    try {
        console.log("💡 Fetching wise advice...");
        const response = await fetch(APIS.advice);
        
        if (!response.ok) {
            throw new Error(`Advice API failed: ${response.status}`);
        }
        
        const data = await response.json();
        return {
            text: data.slip.advice,
            id: data.slip.id
        };
    } catch (error) {
        console.log("❌ Advice fetch failed:", error.message);
        return {
            text: "Don't put off tomorrow what you can do today.",
            id: "fallback"
        };
    }
}

// 🎮 Demo 1: Sequential API Calls
console.log("--- 🎮 Demo 1: Sequential Content Loading ---");
async function loadContentSequentially() {
    console.log("⏰ Loading content one by one...");
    console.time("Sequential Loading");
    
    const quote = await getInspirationalQuote();
    console.log("✅ Got quote:", quote.text.substring(0, 50) + "...");
    
    const joke = await getFunnyJoke();
    console.log("✅ Got joke:", joke.setup);
    
    const fact = await getRandomFact();
    console.log("✅ Got fact:", fact.text.substring(0, 50) + "...");
    
    const advice = await getWiseAdvice();
    console.log("✅ Got advice:", advice.text.substring(0, 50) + "...");
    
    console.timeEnd("Sequential Loading");
    
    return { quote, joke, fact, advice };
}

loadContentSequentially().then(content => {
    console.log("🎊 Sequential loading complete!\n");
});

// 🚀 Demo 2: Parallel API Calls
setTimeout(async () => {
    console.log("--- 🚀 Demo 2: Parallel Content Loading ---");
    
    async function loadContentParallel() {
        console.log("⚡ Loading all content simultaneously...");
        console.time("Parallel Loading");
        
        try {
            const [quote, joke, fact, advice] = await Promise.all([
                getInspirationalQuote(),
                getFunnyJoke(),
                getRandomFact(),
                getWiseAdvice()
            ]);
            
            console.timeEnd("Parallel Loading");
            
            console.log("✅ All content loaded simultaneously!");
            
            return { quote, joke, fact, advice };
        } catch (error) {
            console.log("❌ Parallel loading failed:", error);
            return null;
        }
    }
    
    const content = await loadContentParallel();
    
    if (content) {
        console.log("\n🎨 Creating content mashup:");
        console.log(`📝 Quote: "${content.quote.text}" - ${content.quote.author}`);
        console.log(`😂 Joke: ${content.joke.setup} ... ${content.joke.punchline}`);
        console.log(`🤓 Fact: ${content.fact.text}`);
        console.log(`💡 Advice: ${content.advice.text}`);
        console.log();
    }
    
}, 5000);

// 🎪 Demo 3: API Race (Promise.race)
setTimeout(async () => {
    console.log("--- 🎪 Demo 3: API Speed Race ---");
    
    // Create functions with artificial delays to show racing
    async function slowQuote() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return await getInspirationalQuote();
    }
    
    async function fastJoke() {
        await new Promise(resolve => setTimeout(resolve, 500));
        return await getFunnyJoke();
    }
    
    async function mediumFact() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return await getRandomFact();
    }
    
    console.log("🏁 Starting API race...");
    console.time("First API Response");
    
    try {
        const winner = await Promise.race([
            slowQuote().then(data => ({ type: 'quote', data })),
            fastJoke().then(data => ({ type: 'joke', data })),
            mediumFact().then(data => ({ type: 'fact', data }))
        ]);
        
        console.timeEnd("First API Response");
        console.log(`🏆 Winner: ${winner.type.toUpperCase()}!`);
        
        if (winner.type === 'quote') {
            console.log(`   "${winner.data.text}" - ${winner.data.author}`);
        } else if (winner.type === 'joke') {
            console.log(`   ${winner.data.setup} ... ${winner.data.punchline}`);
        } else {
            console.log(`   ${winner.data.text}`);
        }
        
    } catch (error) {
        console.log("❌ Race failed:", error);
    }
    
}, 9000);

// 🎯 Demo 4: Smart Content Generation
setTimeout(async () => {
    console.log("\n--- 🎯 Demo 4: Smart Content Generator ---");
    
    async function createDailyInspiration() {
        console.log("🌟 Creating daily inspiration package...");
        
        try {
            // Get multiple pieces of content
            const results = await Promise.allSettled([
                getInspirationalQuote(),
                getFunnyJoke(),
                getRandomFact(),
                getWiseAdvice()
            ]);
            
            // Process results, handling any failures gracefully
            const content = {
                quote: results[0].status === 'fulfilled' ? results[0].value : null,
                joke: results[1].status === 'fulfilled' ? results[1].value : null,
                fact: results[2].status === 'fulfilled' ? results[2].value : null,
                advice: results[3].status === 'fulfilled' ? results[3].value : null,
                image: getRandomImage(),
                timestamp: new Date().toLocaleString()
            };
            
            // Count successful fetches
            const successCount = results.filter(r => r.status === 'fulfilled').length;
            
            console.log(`✅ Successfully loaded ${successCount}/4 content types`);
            
            // Create a beautiful display
            console.log("\n🎨 === DAILY INSPIRATION PACKAGE ===");
            console.log(`📅 Generated: ${content.timestamp}`);
            console.log(`🖼️ Image: ${content.image}`);
            
            if (content.quote) {
                console.log(`\n📝 QUOTE OF THE DAY:`);
                console.log(`   "${content.quote.text}"`);
                console.log(`   — ${content.quote.author}`);
            }
            
            if (content.joke) {
                console.log(`\n😂 JOKE BREAK:`);
                console.log(`   ${content.joke.setup}`);
                console.log(`   ${content.joke.punchline}`);
            }
            
            if (content.fact) {
                console.log(`\n🤓 DID YOU KNOW?`);
                console.log(`   ${content.fact.text}`);
            }
            
            if (content.advice) {
                console.log(`\n💡 WISDOM FOR TODAY:`);
                console.log(`   ${content.advice.text}`);
            }
            
            console.log("\n=".repeat(40));
            
            return content;
            
        } catch (error) {
            console.log("❌ Inspiration generation failed:", error);
            return null;
        }
    }
    
    await createDailyInspiration();
    
}, 12000);

// 🔄 Demo 5: API Retry Logic
setTimeout(async () => {
    console.log("\n--- 🔄 Demo 5: Robust API Calls with Retry ---");
    
    async function fetchWithRetry(url, maxRetries = 3, delay = 1000) {
        let lastError;
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                console.log(`🔄 Attempt ${attempt}/${maxRetries} for ${url}`);
                
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
                
                console.log(`✅ Success on attempt ${attempt}!`);
                return await response.json();
                
            } catch (error) {
                lastError = error;
                console.log(`❌ Attempt ${attempt} failed:`, error.message);
                
                if (attempt < maxRetries) {
                    console.log(`⏳ Waiting ${delay}ms before retry...`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    delay *= 2; // Exponential backoff
                }
            }
        }
        
        throw lastError;
    }
    
    // Test with a reliable API
    try {
        const quote = await fetchWithRetry(APIS.quotes, 3, 500);
        console.log(`🎊 Retrieved quote: "${quote.content.substring(0, 50)}..."`);
    } catch (error) {
        console.log("💥 All retry attempts failed:", error.message);
    }
    
}, 16000);

// 🎯 Key Learning Points
setTimeout(() => {
    console.log("\n=== 🎯 Multiple APIs Key Lessons ===");
    console.log("1️⃣ Promise.all() - Wait for all APIs (fails if any fail)");
    console.log("2️⃣ Promise.allSettled() - Get all results (success + failures)");
    console.log("3️⃣ Promise.race() - Use the fastest API response");
    console.log("4️⃣ Always have fallback data for failed API calls");
    console.log("5️⃣ Implement retry logic for flaky APIs");
    console.log("6️⃣ Parallel loading is much faster than sequential");
    console.log("7️⃣ Handle partial failures gracefully in real apps");
    console.log("8️⃣ Combine different data sources for rich experiences");
    
    console.log("\n🚀 Ready to build amazing multi-API applications!");
}, 20000);