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

pokeApi
  .getPokemons()
  .then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(pokemonToLi).join("");
  })
  .catch((error) => console.log(error));
