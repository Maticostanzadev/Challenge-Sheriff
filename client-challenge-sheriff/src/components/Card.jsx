import React from 'react'
import { GiCampfire } from 'react-icons/all'
import { DivContainer, DivTop, DivBottom, DivShadow, DivCenter, Img, H1, Pid, Pexp, DivExp } from '../styled-components/CardStyled'

export const Card = ({ name, id, types, setDetailId, exp }) => {
  const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`

  return (
    <DivContainer onClick={() => setDetailId(id)}>
      <DivCenter>
        <Img src={gif}></Img>
      </DivCenter>
      <DivTop>
        <H1>{name}</H1>
        <Pid>{id.toString().length === 1 ? `N°0${id}` : `N°${id}`}</Pid>
        <DivExp>
          <Pexp>{exp}</Pexp><GiCampfire></GiCampfire>
        </DivExp>
      </DivTop>
      <DivBottom>
        <p>Types:</p>
        {types?.map(type => <p key={type}>{type}</p>)}
      </DivBottom>
      <DivShadow></DivShadow>
    </DivContainer>
  )
}