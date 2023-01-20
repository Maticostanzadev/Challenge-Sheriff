const { Router } = require('express');
const { getAllPokemons } = require('../utils/getAllPokemons')
const { getDetailPokemon } = require('../utils/getDetailPokemon')
const router = Router();

router.get('/', async (req, res) => {
  const { name } = req.query

  try {
    let allPokemons = await getAllPokemons(name)

    allPokemons.msgError
      ? res.status(400).json(allPokemons)
      : res.status(200).json(allPokemons)

  } catch (error) {
    res.status(400).json({ msgError: "Ha ocurrido un error" })
  }
})

router.get('/detail/:id', async (req, res) => {
  const { id } = req.params

  try {
    let detailPokemon = await getDetailPokemon(id)

    res.status(200).json(detailPokemon)
  } catch (error) {
    res.status(400).json({ msgError: `No se encontraron Pokemons con el ID: ${id}` })
  }
})

module.exports = router;
