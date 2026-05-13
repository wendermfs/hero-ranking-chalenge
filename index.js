const pokemon = [{ name: "Bulbasaur", xp: 800 }, { name: "Ivysaur", xp: 1100 }, { name: "Venusaur", xp: 3800 }, { name: "Charmander", xp: 800 }, { name: "Charmeleon", xp: 1100 }, { name: "Charizard", xp: 3600 }, { name: "Squirtle", xp: 700 }, { name: "Wartortle", xp: 1000 }, { name: "Blastoise", xp: 3300 }, { name: "Caterpie", xp: 500 }, { name: "Metapod", xp: 500 }, { name: "Butterfree", xp: 1300 }, { name: "Pidgey", xp: 600 }, { name: "Pidgeotto", xp: 900 }, { name: "Pidgeot", xp: 2800 }, { name: "Pikachu", xp: 2000 }, { name: "Raichu", xp: 2300 }];

const levelRank = [{ level: "Iron", lessXP: 0, maxXp: 1000 }, { level: "Bronze", lessXP: 1001, maxXp: 2000 }, { level: "Silver", lessXP: 2001, maxXp: 5000 }, { level: "Gold", lessXP: 5001, maxXp: 7000 }, { level: "Platinum", lessXP: 7001, maxXp: 8000 }, { level: "Ascendant", lessXP: 8001, maxXp: 9000 }, { level: "Immortal", lessXP: 9001, maxXp: 10000 }, { level: "Radiant", lessXP: 10001, maxXp: Infinity }];

pokemon.forEach(pokemon => {
    const currentRanking = levelRank.find(rank => pokemon.xp >= rank.lessXP && pokemon.xp <= rank.maxXp);

    if (currentRanking) {
        console.log
        (`The Pokémon called **${pokemon.name}** is at the level of **${currentRanking.level}**`);
    }
});