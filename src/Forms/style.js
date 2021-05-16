import styled from "styled-components";

export const NavigationContainer = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: burlywood;
    display: flex;
    align-items: center;
`
export const NavTitleContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column
`
export const NavTitle = styled.div`
    color: white;
    margin-left: 4px;
    font-size: initail; 
    @media (min-width: 558px) { 
        margin-left: 12px;
        font-size: x-large;
    }
`
export const NavItemsContainer = styled.div`
    align-self: flex-end;
    display: flex;
    margin : auto 4px auto auto;
    @media (min-width: 558px) {
        margin : auto 12px auto auto;
    }
`
export const NavItems = styled.div`
    margin: 4px;
    padding: 8px;
    background-color: #ffa31a;
    border: 3px solid white;
    color: white;
    @media (min-width: 558px) { 
        margin: 4px 12px;
        padding: 8px 16px;
        border: 3px solid white;
    }
`
export const BackDrop = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1px;
`
export const BackDropBlur = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    backdrop-filter: blur(5px);
    z-index: 5px;
`
export const ModalContent = styled.div`
    margin: 96px auto 8px;
    position: relative;
    width: 80%;
    height: auto;
    padding: 4px;
    z-index: 10px;
    border: 3px solid burlywood;
    border-radius: 12px;
    @media (min-width: 558px) {
        margin: 132px auto 8px;
        padding: 8px;
        width: 50%;
    }
`
export const SignupHeadder = styled.h2`
    margin: 8px 16px 72px;
    color: #ffa31a;
`
export const InputCover = styled.div`
  display:flex;
  width: 280px;
  margin: 8px auto 21px;
  border-bottom: ${props => props.error ? '3px solid red' :  '1px solid #bfbfbf'};
  &:focus-within {
    border-bottom: 2px solid #ffa31a;
  }
`
export const InputImg = styled.img`
  height: 18px;
  width: 18px;
  margin: 4px;
`
export const TestInput = styled.input`
  border: none;
  outline: none;
  margin-left:8px;
  width:85%;
`
export const SingleCTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SingleCTA = styled.button`
  outline: none;
  border: none;
  margin: 16px auto;
  padding: 8px;
  color: white;
  background-color: #ffa31a;
  border-radius: 8px;
  font-size: medium;
  &:hover {
    cursor: pointer;
  }
`