const axios = require('axios');

async function getAllPokemons(name) {

  let allPokemons = []

  if (name) {
    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    allPokemons.push(pokemon.data)
  } else {
    let ids = []
    let infoApiPromises = []

    for (let i = 1; i < 26; i++) {
      ids.push(i)
    }

    for (const id of ids) {
      let resPromise = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

      infoApiPromises.push(resPromise.then(response => response.data))
    }

    allPokemons = await Promise.all(infoApiPromises)
  }

  if (!allPokemons.length) {
    return { msgError: "No se encontraron pokemones con ese nombre" }
  }

  return allPokemons.map(g => {
    return {
      name: g.name,
      image: g.sprites.front_default,
      id: g.id,
      types: g.types.map(t => t.type.name),
      exp: g.base_experience
    }
  })
}

module.exports = {
  getAllPokemons
}