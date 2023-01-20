import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DivLoaderContainer, DivTop, DivBottom, DivCenter, DivBackground, DivContainer, DivImgTop, ImgTop, DivImgPoke, ImgPoke, DivInfo, Id, Exp, Title, DivStats, DivInfoExtra, DivImages, Images, Close } from '../styled-components/DetailStyled'


export const Detail = ({ id, setDetailId }) => {
  const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`

  const [detail, setDetail] = useState("")

  async function getDetail() {
    let detailPokemon = await axios.get(`http://localhost:3001/detail/${id}`)
    setDetail(detailPokemon.data)
  }

  useEffect(() => {
    if (!id) return
    getDetail()
  }, [id])

  return (
    <DivBackground>
      {Object.keys(detail).length
        ?
        <DivContainer DivContainer >
          <Close onClick={() => setDetailId(false)}>X</Close>
          <DivImgTop>
            <ImgTop src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png' ></ImgTop>
            <DivImgPoke>
              <ImgPoke src={gif} alt="Imagen" />
            </DivImgPoke>
          </DivImgTop>
          <DivInfo>
            <Id>{detail.id.length === 1 ? `N°0${detail.id}` : `N°${detail.id}`}</Id>
            <Exp>{`Exp: ${detail.exp}`}</Exp>
            <Title>{detail.name}</Title>
            <DivInfoExtra>
              <p>Types: {detail.types.map(t => `${t}, `)}</p>
              <p>Abilities: {detail.abilities.map(ab => `${ab}, `)}</p>
              <p>{`Height: ${detail.height}`}</p>
              <p>{`Weight: ${detail.weight}`}</p>
              <p>{`Envolves to: ${detail.envolve ? detail.envolve : `Does not evolve`}`}</p>
              <DivImages>
                {detail.images.map(i => (
                  i ? <Images key={i} src={i}></Images> : <></>)
                )}
              </DivImages>
            </DivInfoExtra>
            <DivStats>
              {
                detail.stats.map(s => (
                  s.name !== "special-attack" && s.name !== "special-defense" ?
                    <div key={s.name}>
                      <h2>{s.name}</h2>
                      <h4>{s.score}</h4>
                    </div>
                    : <></>
                ))
              }
            </DivStats>
          </DivInfo>
        </DivContainer>
        : <></>
      }
      <DivLoaderContainer>
        <DivCenter>
        </DivCenter>
        <DivTop>
        </DivTop>
        <DivBottom>
        </DivBottom>
      </DivLoaderContainer>
    </DivBackground>
  )
}
