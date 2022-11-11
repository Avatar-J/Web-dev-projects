import styled from "styled-components";


export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
`
export const BodyWrapper = styled.div`
    margin: 100px auto;
    width: 1200px;
    height: auto;
    /* background-color: #dff1ed; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


  @media (max-width: 700px){
    width: 80%;
    height: auto;
  }
`
export const BodyCard = styled.div`
  height: 300px;
  margin: 40px 0;
  width: 80%;
  color: #FFA177FF;
  background-color: #fef1dc;
  box-shadow: 3px 4px 8px black;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 700px){
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
  }
  
`

export const CardLeft = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  
 

  img{
            width: 100%;
             height: 100%;
            object-fit: contain;
        }
  
  @media (max-width: 700px){
    width: 100%;
    height: 0px;
    overflow: hidden;
  }
  

`

export const CardRight = styled.div`


 @media (max-width: 700px){
    height: auto;
    margin: 10px 0;
     width: 100%;
    display: grid;
    place-content: center;
  }
`