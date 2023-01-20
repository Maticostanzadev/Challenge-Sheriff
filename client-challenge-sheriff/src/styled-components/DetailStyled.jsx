import styled, { keyframes } from 'styled-components'

export const loaderAnimation = keyframes`
  0% { 
    transform: rotate(0deg);
    opacity: 100;
  }

  75% { 
    transform: rotate(1080deg);
    opacity: 75;
  }

  90% { 
    opacity: 50;
  }

  100% { 
    transform: rotate(1080deg);
    opacity: 0;
  }
`

export const DivLoaderContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 17rem;
  height: 17rem;
  padding: 0;
  animation-name: ${loaderAnimation};
  animation-duration: 1.75s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  top: 13.3rem;
  z-index: 600;
  opacity: 0;
`

export const DivTop = styled.div`
  background: -webkit-radial-gradient(bottom, #ca1515 45%, #932121 60%, transparent 75%);
  border-radius: 20rem 20rem 0 0;
  width: 100%;
  height: 50%;
  margin: 0;
  padding-top: 2.25rem;
  border-bottom: 0.25rem solid #131313;
`

export const DivBottom = styled.div`
  background: #EEEEEE;
  background: -webkit-radial-gradient(top, #d7d7d7 45%, #9b9b9b 60%, transparent 75%);
  border-radius: 0 0 20rem 20rem;
  width: 100%;
  height: 50%;
  margin: 0;
  padding-top: 4rem;
  border-top: 0.25rem solid #131313;
  overflow: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 20;
`

export const DivCenter = styled.div`
  position: absolute;
  background: -webkit-radial-gradient(center, #e9e9e9 30%, #e2e2e2 50%, #b0b0b0 85%);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.5rem solid #131313;
  padding: 1.5rem;
  z-index: 30;
  transition: 2.5s;
`

export const DivBackground = styled.div`
  background-color: #000002b6;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const detailAnimation = keyframes`
  0% { 
    opacity: 0;
  }

  50% { 
    opacity: 0;
    width: 5rem;
  }

  75% { 
    opacity: .5;
    width: 30rem;
  }

  100% {
    opacity: 1;
    width: 40rem;
  }
`

export const DivContainer = styled.div`
  background-color: #EEEEEE;
  z-index: 300;
  position: absolute;
  height: 50rem;
  width: 40rem;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2.5rem;
  border: 5px solid black ;
  animation-name: ${detailAnimation};
  animation-duration: 0.25s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  overflow: hidden;
`

export const DivImgTop = styled.div`
  background-color: #b51616;
  border-radius: 2rem 2rem 0 0;
  border-bottom: 5px solid black ;
  height: 35%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const ImgTop = styled.img`
  width: 70%;
  object-fit: cover;
`

export const DivImgPoke = styled.div`
  background-color: #EEEEEE;
  border: 5px solid black;
  height: 17rem;
  width: 17rem;
  top: 8.7rem;
  border-radius: 50%;
  position: absolute;
  padding: 3rem;
  z-index: 60;
`

export const ImgPoke = styled.img`
  width: 100%;
  object-fit: cover;
`

export const DivInfo = styled.div`
  height: 100%;
  position: relative;
  z-index: 10;
  padding: 1rem 0.5rem;
`

export const Id = styled.h3`
  position: absolute;
  margin-left: 10%;
  font-size: 2rem;
`

export const Exp = styled.h3`
  position: absolute;
right: 7%;
font-size: 2rem;
`
export const Title = styled.h1`
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0);
  font-size: 3rem;
  text-decoration: underline;
`

export const DivStats = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  left: 0;
  bottom: 17rem;
  padding: 1rem 0.5rem;
  border-top: 1px solid black;
`

export const DivInfoExtra = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  top: 13.5rem;
  z-index: 200;
`

export const DivImages = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  justify-content: space-around;
`

export const Images = styled.img`
  width: 6.8rem;
`

export const Close = styled.h1`
  position: absolute;
  right: 0rem;
  top: 0.3rem;
  font-size: 3.5rem;
  cursor: pointer;
  width: 3.5rem;
`