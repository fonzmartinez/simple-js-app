let pokemonList = [
    {name: 'zubat', 
    height: 0.8, 
    type: ['poison', 'flying']
    }, 
    {name: 'slowpoke',
    height: 1.2,
    type: ['poison', 'flying']
    }, 
    {name: 'scrafty',
    height: 1.1,
    type: ['dark', 'fighting']
    }
]
// adding conditional for pokemon height
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height <=0.8) {
        document.write(pokemonList[i].name + ' ' + pokemonList[i].height + ' is a tiny pokemon.');
    }
    else if (pokemonList[i].height >=.09 && pokemonList[i].height <=1.1) {
        document.write(pokemonList[i].name + ' ' + pokemonList[i].height + ' is a average size pokemon.');
    }
    else 
        document.write(pokemonList[i].name + ' ' + pokemonList[i].height + ' is a large pokemon.');
}
