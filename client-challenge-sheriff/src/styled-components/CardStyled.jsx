import styled, { keyframes } from 'styled-components'

export const pokeAnimation = keyframes`
  0% { transform: scale(1) }
  50% { transform: scale(1.1) }
  100% { transform: scale(1) }
`

export const DivContainer = styled.div`
  position: relative;
  border-radius: 50%;
  width: 23rem;
  height: 23rem;
  padding: 0;
  cursor: pointer;

  &:hover {
  animation-name: ${pokeAnimation};
  animation-duration: 0.75s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  }
`

export const DivTop = styled.div`
  background: -webkit-radial-gradient(bottom, #ca1515 45%, #932121 60%, transparent 75%);
  border-radius: 20rem 20rem 0 0;
  width: 100%;
  height: 50%;
  margin: 0;
  padding-top: 2.25rem;
  border-bottom: 0.4375rem solid #131313;
`

export const DivBottom = styled.div`
  background: #EEEEEE;
  background: -webkit-radial-gradient(top, #d7d7d7 45%, #9b9b9b 60%, transparent 75%);
  border-radius: 0 0 20rem 20rem;
  width: 100%;
  height: 50%;
  margin: 0;
  padding-top: 4rem;
  border-top: 0.4375rem solid #131313;
  overflow: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 20;
`

export const DivShadow = styled.div`
    position: absolute;
    width: 23rem;
    height: 7rem;
    border-radius: 50%;
    background: radial-gradient(#151515 40%, #252525 70%,transparent 80% );
    top: 19rem;
    transform: rotatex(20deg);
    z-index: 10;
`

export const DivCenter = styled.div`
  position: absolute;
  background: -webkit-radial-gradient(center, #e9e9e9 30%, #e2e2e2 50%, #b0b0b0 85%);
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.875rem solid #131313;
  padding: 1.5rem;
  z-index: 30;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const H1 = styled.h1`
  font-size: 2rem;
`

export const Pid = styled.p`
  font-size: 1.7rem;
  position: absolute;
  top: 40%;
  left: 9%;
`

export const Pexp = styled.p`
    font-size: 1.7rem;
`

export const DivExp = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  right: 5%;
  font-size: 1.5rem;
`
