const axios = require('axios');

const get = (endpoint) => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = async (names) =>
  Promise.all(
    names.map(async (name) => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      const abilities = await Promise.all(
        pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
          const { data: ability } = await get(`/ability/${abilityName}`);

          return ability;
        }),
      );
      return { ...pokemon, abilities };
    }),
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const { data } = await get('/pokemon?limit=10&offset=0');
  const { results } = data;
  const allPokemon = await getPokemonData(results.map((p) => p.name));

  // Create a page that lists all Pokémon.
  await createPage({
    path: `/pokemon`,
    component: require.resolve('./src/templates/all-pokemon.js'),
    context: { allPokemon },
  });

  // Create a page for each Pokémon.
  allPokemon.forEach(async (pokemon) => {
    await createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve('./src/templates/pokemon.js'),
      context: { pokemon },
    });

    // Create a page for each ability of the current Pokémon.
    pokemon.abilities.forEach(async (ability) => {
      await createPage({
        path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
        component: require.resolve('./src/templates/ability.js'),
        context: { pokemon, ability },
      });
    });
  });
};
