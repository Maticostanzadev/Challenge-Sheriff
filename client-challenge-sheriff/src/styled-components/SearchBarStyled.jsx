import styled from 'styled-components'

export const Form = styled.form`
  margin-top: 1rem;
  width: 50rem;
  height: 3rem;
  padding: 0.2rem 1rem;
  display: flex;
  gap: 2rem;
`

export const Input = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  padding: 0 1rem;
  color: black;
`

export const Button = styled.button`
  background-color: #ca1515;
  border-radius: 0.5rem;
  width: 30%;
  height: 100%;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    transform: scale(1.05);
    border: 2px solid white;
  }

  &:active {
    transform: scale(0.95);
  }
`