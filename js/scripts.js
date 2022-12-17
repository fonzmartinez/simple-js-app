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
        function addListItem(pokemon) {
            let pokemonBox = document.querySelector(".pokemon-list");
            let listpokemon = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add("button-class");
            listpokemon.appendChild(button);
            pokemonBox.appendChild(listpokemon);
            button.addEventListener('click', function(){
                showDetails(pokemon);
            });
        }
        //new function added
        function showDetails(pokemon) {
            console.log(pokemon);
        }

        return {
            getAll: getAll,
            add: add,
            addListItem: addListItem,
            showDetails: showDetails
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

pokemonList.forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    pokemonRepository.showDetails(pokemon);
}); 

