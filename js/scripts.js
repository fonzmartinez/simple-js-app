// adding IIFE

let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
    //let modalContainer = document.querySelector('#modal-container'); removed from index.
    let pokemonListElement = $('.pokemon-list')

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
    /*    function addListItem(pokemon) {
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
        } */
        //new function added for bootstrap
        function addListItem(pokemon) {
            let listItem = $('<li class="list-group-item"></li>');
            let button = $('<button class="pokemon-button btn btn-primary" data-target="#pokemonModal" data-toggle="modal">' + pokemon.name + '</button>');
            listItem.append(button);
            pokemonListElement.append(listItem);
            button.on('click', function () {
                showDetails(pokemon);
            })
        }

        //new function added
        function showDetails(pokemon) {
            loadDetails(pokemon).then(function () {
        //    console.log(pokemon);
                showModal(pokemon);
        });
        }   
 /*       //adding modal code
        function showModal(pokemon) {           
            modalContainer.innerHTML = '';
            let modal = document.createElement('div');
            modal.classList.add('modal');
    
            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = 'Close';
            closeButtonElement.addEventListener('click', hideModal);
    
            let titleElement = document.createElement('h1');
            titleElement.innerText = pokemon.name;
    
            let contentElement = document.createElement('p');
            contentElement.innerText = "Height: " + pokemon.height;
    
            let imageElement = document.createElement('img');
            imageElement.src = pokemon.imageUrl;
    
            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modal.appendChild(imageElement);
            modalContainer.appendChild(modal);
            modalContainer.classList.add('is-visible');
        }

        function hideModal() {
            modalContainer.classList.remove('is-visible');
        }
    
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
              hideModal();  
            }
        });
    
        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
              hideModal();
            }
        });
    
        document.querySelector('#show-modal');  
        //emd of modal code */

        //adding bootstrap modal code
        function showModal(pokemon) {
            let modalTitle = $(".modal-title");
            let modalBody = $(".modal-body");

            modalTitle.empty();
            modalBody.empty();

            let nameElement = $("<hi>" + pokemon.name + "</h1>");
            let imageElement = $('<img class="modal.img" style="width:50%">')
            imageElement.attr("src", pokemon.imageUrl);
            let heightElement = $("<p>" + "Height: " + pokemon.height + "</p>");
            let weightElement = $("<p>" + "Weight: " + pokemon.weight + "</p>");

            modalTitle.append(nameElement);
            modalBody.append(imageElement);
            modalBody.append(heightElement);
            modalBody.append(weightElement);
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
                item.weight = details.weight;
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
            loadDetails: loadDetails,
            showModal: showModal
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

