import styled from 'styled-components'

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Img = styled.img`
  height:300px;
  width:400px;
  margin: auto ;
  border-radius: 50px;
  @media (min-width: 558px) {
    height:500px;
    width:600px;  
  }
`
export const Text = styled.p`
color: #0099cc;
text-shadow: 0 0 9px #99ebff;
margin: 24px auto;
font-size: larger;
@media (min-width: 558px) {
    font-size: xx-large; 
  }
`
export const FormButtonUpdate = styled.button`
  margin: 27px auto;
  padding: 12px;
  border: none;
  border-radius:20px;
  color: white;
  outline: none;
  box-shadow:0 0 9px #99ebff;
  background-color: #0099cc;
  &:hover {
    cursor: pointer;
    box-shadow:0 0 15px #99ebff;
  }
`