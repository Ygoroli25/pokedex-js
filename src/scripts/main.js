const pokemonList = document.getElementById("pokemonList");
const loadMore = document.getElementById("loadMore");
const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit) {
  pokeApi
    .getPokemons(offset, limit)
    .then((pokemons = []) => {
      const newHtml = pokemons
        .map(
          (pokemon) =>
            `<li class="pokemon ${pokemon.type}">
      <span class="pokemon-id"># ${pokemon.id}</span>
      <h2>${pokemon.name}</h2>
      <div class="pokemon-detail">
        <ol class="types">
          ${pokemon.types
            .map(
              (type) => `
  <li class="type ${type}">${type}</li>
`
            )
            .join("")}
        </ol>
      </div>
      <img src="${pokemon.photo}" alt="${pokemon.name}">
    </li>
`
        )
        .join("");
      pokemonList.innerHTML += newHtml;
    })
    .catch((error) => console.log(error));
}

loadPokemonItens(offset, limit);

loadMore.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNextPage = offset + limit;

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);
    loadMore.parentElement.removeChild(loadMore)
  }else {
    loadPokemonItens(offset, limit)
  }
});
