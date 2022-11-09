import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const Wrapper = styled.div`
    margin: 0 auto;
    width: 1200px;
    height: 500px;
    /* background-color: #dff1ed; */
    display: flex;
    justify-content: center;
    align-items: center;


  @media (max-width: 700px){
    width: 80%;
    height: auto;
  }
`
export const Card = styled.div`
  height: 300px;
  width: 80%;
  background-color: #fef1dc;
  box-shadow: 3px 4px 8px black;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 20px;

  @media (max-width: 700px){
    height: auto;
    display: grid;
    grid-template-columns: 1fr;
  }
  
`
export const ImageBorder = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #16231f;
    border-radius: 50%;
    position: absolute;
    top: -60px;
    left: 70px;     
    overflow: hidden;

    .deco{
        width: 190px;
        height: 190px;
        z-index: 1;
        border-radius: 50%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    &::before{
        content: "";
        position: absolute;
        background:linear-gradient(31deg,#d400d4, #f7a922) ;
        width: 80px;
        inset: -10px 65px;
        transition: 0.5s;
        animation: animate 4s linear infinite;
    }
  

    @keyframes animate {

        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
        
    }
    
`
export const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 700px){
    width: 100%;
    height: 200px;
  }
  

`
export const Name = styled.div`

position: absolute;
bottom: 20px;
left: 60px;

h2{
    
}

@media (max-width: 700px){
    height: 200px;
    margin-top: 170px;
     width: 100%;
     position: relative;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`
export const Right = styled.div`


 @media (max-width: 700px){
    height: auto;
    margin-top: 30px;
     width: 100%;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`