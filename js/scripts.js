// adding IIFE

let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

        function add(pokemon) {
            if (
                typeof pokemon === "object" &&
                "name" in pokemon &&
                "detailsUrl" in pokemon
            ) {
                pokemonList.push(pokemon);
            } else {
                console.log("pokemon is not correct");
            }
        }
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
            loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
        }   
        function loadList() {
            return fetch(apiUrl).then(function (response) {
                return response.json();
            }).then(function (json) {
              json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);  
                console.log(pokemon); 
              });
            }).catch(function (e) {
                console.error(e);
            })
        }
        function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function(response) {
                return response.json();
            }).then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            }).catch(function (e) {
                console.error(e); 
            })
        }

        return {
            getAll: getAll,
            add: add,
            addListItem: addListItem,
            showDetails: showDetails,
            loadList: loadList,
            loadDetails: loadDetails
        }
})(); 

//pokemonRepository.add({ name: 'Snorlax', height: 2.1, type: 'normal' });
//console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

//let pokemonList = pokemonRepository.getAll();


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

/* pokemonList.forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    pokemonRepository.showDetails(pokemon);
}); */ 

