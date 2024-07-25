function pokemonToLi(pokemon) {
  return `
  <li class="pokemon ${pokemon.type}">
        <span class="pokemon-id"># ${pokemon.id}</span>
        <h2>${pokemon.name}</h2>
        <div class="pokemon-detail">
          <ol class="types">
            ${pokemon.types
              .map(
                (type) => `
    <li class="type">${type}</li>
  `
              )
              .join("")}
          </ol>
        </div>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
      </li>
  `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi
  .getPokemons()
  .then((pokemons = []) => {
    const newHtml = pokemons.map(pokemonToLi).join("");
    pokemonList.innerHTML = newHtml;
  })
  .catch((error) => console.log(error));
