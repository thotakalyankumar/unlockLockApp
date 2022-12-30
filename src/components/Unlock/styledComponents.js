import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom, #161617, #3c2940);
  height: 100vh;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: white;
  font-weight: bold;
`
export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 20px;
  color: white;
  font-weight: bold;
  background-color: #06b6d4;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`
export const Image = styled.img`
  height: 100px;
  width: 100px;
`
