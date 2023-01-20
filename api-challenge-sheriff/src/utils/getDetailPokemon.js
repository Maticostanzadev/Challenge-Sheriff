const axios = require('axios');

async function getDetailPokemon(id) {
  let detailPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  let envolves = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

  detailPokemon = detailPokemon.data
  detailPokemon = {
    name: detailPokemon.name,
    images: [
      detailPokemon.sprites.back_default,
      detailPokemon.sprites.back_shiny,
      detailPokemon.sprites.front_default,
      detailPokemon.sprites.front_shiny,
    ],
    id: detailPokemon.id,
    types: detailPokemon.types.map(t => t.type.name),
    height: detailPokemon.height,
    weight: detailPokemon.weight,
    abilities: detailPokemon.abilities.map(ab => ab.ability.name),
    stats: detailPokemon.stats.map(s => {
      return {
        score: s.base_stat,
        name: s.stat.name
      }
    }),
    exp: detailPokemon.base_experience,
    envolve: envolves.data.evolves_from_species ? envolves.data.evolves_from_species.name : null
  }

  return detailPokemon
}

module.exports = {
  getDetailPokemon
}