const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function pokemonToLi(pokemon) {
  return `
  <li class="pokemon">
        <span class="pokemon-id">#001</span>
        <h2>${pokemon.name}</h2>
        <div class="pokemon-detail">
          <ol class="types">
            <li class="type">Glass</li>
            <li class="type">Poison</li>
          </ol>
        </div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
      </li>
  `;
}

const pokemonList = document.getElementById("pokemonList");

fetch(url)
  .then((response) => response.json())
  .then((responseBody) => responseBody.results)
  .then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      pokemonList.innerHTML += pokemonToLi(pokemon);
    }
  })
  .catch((error) => console.log(error));
