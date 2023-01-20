import React from 'react'
import { useEffect } from 'react'
import { Card } from './Card'
import axios from 'axios'
import { useState } from 'react'
import { Detail } from './Detail'
import { DivLoaderContainer } from '../styled-components/DetailStyled'
import { SearchBar } from './SearchBar'
import { DivPokeCards, DivContainer, ImgTitle } from '../styled-components/CardsStyled'

export const Cards = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const [detailId, setDetailId] = useState(false)

  async function getPokemons() {
    let pokemons = await axios.get('http://localhost:3001/')
    setAllPokemons(pokemons.data)
  }

  useEffect(() => {
    if (allPokemons.length) return
    getPokemons()
  }, [])

  return (
    <div>
      {
        allPokemons.msgError
          ? <h1>{allPokemons.msgError}</h1>
          :
          <DivContainer>
            <ImgTitle src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png' ></ImgTitle>
            <SearchBar setAllPokemons={setAllPokemons} allPokemons={allPokemons}></SearchBar>
            {
              allPokemons.length ?
                <DivPokeCards>
                  {allPokemons.map(p =>
                    <Card key={p.id} name={p.name} image={p.image} types={p.types} id={p.id} exp={p.exp} setDetailId={setDetailId} />
                  )}

                </DivPokeCards>
                : <DivLoaderContainer></DivLoaderContainer>
            }
            {detailId ? <Detail id={detailId} setDetailId={setDetailId} /> : <></>}
          </DivContainer>
      }

    </div>


  )
}
