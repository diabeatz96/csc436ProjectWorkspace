// 🔍 Pokemon Gotta Fetch 'Em All! - Fetch API Demo
console.log("=== 🔍 Welcome to Pokemon API Adventure! ===\n");

// 🌟 Basic Fetch Function
async function fetchPokemon(pokemonName) {
    try {
        console.log(`🔍 Searching for ${pokemonName}...`);
        
        // Step 1: Fetch from API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        console.log(`📡 Response status: ${response.status} ${response.statusText}`);
        
        // Step 2: Check if request was successful
        if (!response.ok) {
            throw new Error(`Pokemon not found! Status: ${response.status}`);
        }
        
        // Step 3: Parse JSON data
        console.log("📦 Parsing JSON data...");
        const pokemon = await response.json();
        
        // Step 4: Extract useful information
        const pokemonInfo = {
            name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            id: pokemon.id,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types.map(type => type.type.name),
            abilities: pokemon.abilities.map(ability => ability.ability.name),
            sprite: pokemon.sprites.front_default,
            shiny: pokemon.sprites.front_shiny,
            stats: pokemon.stats.map(stat => ({
                name: stat.stat.name,
                value: stat.base_stat
            }))
        };
        
        return pokemonInfo;
    } catch (error) {
        console.log("❌ Error catching Pokemon:", error.message);
        return null;
    }
}

// 🎮 Demo 1: Catch a Pokemon!
console.log("--- 🎮 Demo 1: Catch Pikachu! ---");
fetchPokemon("pikachu").then(pokemon => {
    if (pokemon) {
        console.log("🎉 Pokemon caught!");
        console.log(`📊 Name: ${pokemon.name}`);
        console.log(`🆔 ID: #${pokemon.id}`);
        console.log(`📏 Height: ${pokemon.height / 10} m`);
        console.log(`⚖️ Weight: ${pokemon.weight / 10} kg`);
        console.log(`🏷️ Types: ${pokemon.types.join(", ")}`);
        console.log(`💪 Abilities: ${pokemon.abilities.join(", ")}`);
        console.log(`🖼️ Sprite: ${pokemon.sprite}`);
        console.log(`✨ Shiny: ${pokemon.shiny}`);
        console.log("📈 Stats:");
        pokemon.stats.forEach(stat => {
            console.log(`   ${stat.name}: ${stat.value}`);
        });
        console.log();
    }
});

// 🎯 Interactive Pokemon Finder
async function findRandomPokemon() {
    const randomId = Math.floor(Math.random() * 151) + 1; // Original 151 Pokemon
    console.log(`🎲 Looking for random Pokemon #${randomId}...`);
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const pokemon = await response.json();
        
        console.log(`🎊 Found: ${pokemon.name.toUpperCase()}!`);
        console.log(`🏷️ Types: ${pokemon.types.map(t => t.type.name).join("/")}`);
        
        return pokemon.name;
    } catch (error) {
        console.log("❌ Failed to find random Pokemon:", error);
        return null;
    }
}

// 🎮 Demo 2: Multiple Pokemon Hunt
setTimeout(async () => {
    console.log("--- 🎮 Demo 2: Pokemon Team Assembly ---");
    
    const pokemonTeam = ["charizard", "blastoise", "venusaur", "alakazam"];
    console.log("🎯 Building a Pokemon team...");
    
    // Sequential approach
    console.log("\n⏰ Catching Pokemon one by one...");
    console.time("Sequential Team Building");
    
    for (const pokemonName of pokemonTeam) {
        const pokemon = await fetchPokemon(pokemonName);
        if (pokemon) {
            console.log(`✅ ${pokemon.name} joined the team!`);
        }
    }
    
    console.timeEnd("Sequential Team Building");
    
}, 3000);

// 🚀 Demo 3: Parallel Pokemon Catching
setTimeout(async () => {
    console.log("\n--- 🚀 Demo 3: Parallel Pokemon Catching ---");
    
    const legendaryPokemon = ["mew", "mewtwo", "articuno", "zapdos", "moltres"];
    console.log("⚡ Catching legendary Pokemon simultaneously...");
    
    console.time("Parallel Team Building");
    
    const promises = legendaryPokemon.map(name => fetchPokemon(name));
    const team = await Promise.all(promises);
    
    console.timeEnd("Parallel Team Building");
    
    console.log("🏆 Legendary team assembled:");
    team.forEach(pokemon => {
        if (pokemon) {
            console.log(`   ⭐ ${pokemon.name} (${pokemon.types.join("/")})`);
        }
    });
    
}, 8000);

// 🌟 Demo 4: Advanced API Features
setTimeout(async () => {
    console.log("\n--- 🌟 Demo 4: Pokemon Battle Stats Comparison ---");
    
    async function comparePokemon(name1, name2) {
        try {
            console.log(`⚔️ ${name1.toUpperCase()} VS ${name2.toUpperCase()}`);
            
            const [pokemon1, pokemon2] = await Promise.all([
                fetchPokemon(name1),
                fetchPokemon(name2)
            ]);
            
            if (!pokemon1 || !pokemon2) {
                console.log("❌ Couldn't load both Pokemon for comparison");
                return;
            }
            
            console.log("\n📊 Battle Stats Comparison:");
            console.log("Stat".padEnd(15) + name1.padEnd(15) + name2);
            console.log("-".repeat(45));
            
            pokemon1.stats.forEach((stat, index) => {
                const stat1 = stat.value;
                const stat2 = pokemon2.stats[index].value;
                const winner = stat1 > stat2 ? "👑" : stat1 < stat2 ? "👑".padStart(16) : "🤝";
                
                console.log(
                    stat.name.padEnd(15) +
                    stat1.toString().padEnd(15) +
                    stat2.toString().padEnd(15) +
                    winner
                );
            });
            
            // Calculate total stats
            const total1 = pokemon1.stats.reduce((sum, stat) => sum + stat.value, 0);
            const total2 = pokemon2.stats.reduce((sum, stat) => sum + stat.value, 0);
            
            console.log("-".repeat(45));
            console.log("TOTAL".padEnd(15) + total1.toString().padEnd(15) + total2.toString());
            
            const winner = total1 > total2 ? pokemon1.name : total1 < total2 ? pokemon2.name : "It's a tie!";
            console.log(`\n🏆 Overall winner: ${winner}`);
            
        } catch (error) {
            console.log("❌ Battle comparison failed:", error);
        }
    }
    
    await comparePokemon("pikachu", "raichu");
    
}, 12000);

// 🎪 Demo 5: Error Handling Showcase
setTimeout(async () => {
    console.log("\n--- 🎪 Demo 5: Error Handling Examples ---");
    
    const testPokemon = ["ditto", "missingno", "arceus", "fakemon123"];
    
    for (const name of testPokemon) {
        const result = await fetchPokemon(name);
        if (result) {
            console.log(`✅ Successfully found ${result.name}`);
        } else {
            console.log(`❌ Could not find ${name}`);
        }
    }
    
}, 16000);

// 🎲 Interactive Random Pokemon Generator
setTimeout(() => {
    console.log("\n--- 🎲 Interactive Features ---");
    console.log("🎮 Try these functions in your browser console:");
    console.log("   findRandomPokemon() - Get a random Pokemon");
    console.log("   fetchPokemon('pokemon-name') - Get specific Pokemon");
    console.log("   comparePokemon('name1', 'name2') - Compare two Pokemon");
    
    // Let's demonstrate the random function
    findRandomPokemon().then(name => {
        if (name) {
            console.log(`🎊 Random Pokemon found: ${name}!`);
        }
    });
    
}, 18000);

// 🎯 Key Learning Points
setTimeout(() => {
    console.log("\n=== 🎯 Fetch API Key Points ===");
    console.log("1️⃣ fetch() returns a Promise that resolves to Response object");
    console.log("2️⃣ Always check response.ok before parsing");
    console.log("3️⃣ Use response.json() to parse JSON data");
    console.log("4️⃣ Wrap in try/catch for error handling");
    console.log("5️⃣ Use Promise.all() for parallel requests");
    console.log("6️⃣ Real APIs have rate limits - be respectful!");
    console.log("7️⃣ Always handle both network and parsing errors");
    
    console.log("\n🚀 Next: Build your own API-powered app!");
}, 20000);