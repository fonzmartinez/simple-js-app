// adding IIFE

let pokemonRepository = (function () {

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
    ];

        function getAll() {
            return pokemonList;
        }
        function add(item) {
            pokemonList.push(item);
        } 

        return {
            getAll: getAll,
            add: add 
        }
})(); 

pokemonRepository.add({ name: 'Snorlax', height: 2.1, type: 'normal' });
console.log(pokemonRepository.getAll());

let pokemonList = pokemonRepository.getAll();


// adding conditional for pokemon height

/* for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height <=0.8) {
        document.write(pokemonList[i].name + ' ' + pokemonList[i].height + ' is a tiny pokemon.<br>');
    }
    else if (pokemonList[i].height >=.09 && pokemonList[i].height <=1.1) {
        document.write(pokemonList[i].name + ' ' + pokemonList[i].height + ' is a average size pokemon.<br>');
    }
    else 
        document.write(pokemonList[i].name + ' ' + pokemonList[i].height + ' is a large pokemon.<br>');
} */

// using forEach loop function

pokemonList.forEach(function(pokemonList) {
    if (pokemonList.height <=0.8) {
        document.write(pokemonList.name + ' ' + pokemonList.height + ' is a tiny pokemon.<br>');
    }
    else if (pokemonList.height >=.09 && pokemonList.height <=1.1) {
       document.write(pokemonList.name + ' ' + pokemonList.height + ' is a average size pokemon.<br>');
    }
    else 
        document.write(pokemonList.name + ' ' + pokemonList.height + ' is a large pokemon.<br>');
}); 

