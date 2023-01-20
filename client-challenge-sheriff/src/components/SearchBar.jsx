import React, { useState } from 'react'
import axios from "axios";
import Swal from 'sweetalert2'
import { Form, Input, Button } from '../styled-components/SearchBarStyled'

export const SearchBar = ({ setAllPokemons, allPokemons }) => {
  const [search, setSearch] = useState("")

  function handleChange(e) {
    setSearch(e.target.value)
  }

  async function handleClick(e) {
    e.preventDefault()
    if (search.length) {
      let pokemons
      try {
        pokemons = await axios.get(`http://localhost:3001/?name=${search}`)
        setAllPokemons(pokemons.data)
        setSearch("")
      } catch (error) {
        setSearch("")
        setAllPokemons(pokemons.data)
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Debes escribir algo para buscar! Asegúrate de escribir un nombre correctamente',
      })
    }

  }

  async function handleReset(e) {
    e.preventDefault()
    if (allPokemons.length < 25) {
      let pokemons = await axios.get('http://localhost:3001/')
      setAllPokemons(pokemons.data)
    }
  }

  return (
    <Form>
      <Input placeholder='Busca un Pokemon por su nombre' type="text" value={search} onChange={handleChange}></Input>
      <Button onClick={handleClick}>Buscar</Button>
      <Button onClick={handleReset}>Resetear</Button>
    </Form>
  )
}
