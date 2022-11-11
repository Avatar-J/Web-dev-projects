import styled from "styled-components";

export const AdminContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: row;
    position: grid;
    place-content: center;
    
    
`
export const Wrapper = styled.div`
     width: 80%;
    margin: 0 auto;

    @media (max-width: 700px){
        width: 80%;
    }
    
`


export const SectionInfo = styled.div`

 margin-bottom: 20px;
 height: auto;
 display: grid;
 grid-template-columns: 1fr 1fr  1fr;
 gap: 20px;
 margin-top: 100px;

 @media (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr ;
    place-content: center;

    }
   
 
`
export const BoxInfo = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #a9fdf8;

    .icon{
        color: #ff652f;
        font-size: 2rem;
    }

    @media (max-width: 1000px){
        height: 120px;
        width: 80%;
    }

`
export const SectionInfo2 = styled.div`
 height: auto;
 width: 60%;
 display: grid;
 grid-template-columns: 1fr 1fr;
 margin: 10px auto;
 gap: 20px;

 @media (max-width: 1000px){
    grid-template-columns: 1fr ;
}
 
`
export const NavBar = styled.nav`
    position: absolute;
    inset: 0 0 0 0;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;

   

   h1{
    font-size: 4rem;
    color: #FF652F;
   }

  
   @media (max-width: 700px){


    h1{
    font-size: 2rem;
    
   }
    }
   
`
export const BoxInfo2 = styled.div`
height: 300px;
display: flex;
flex-direction: row;
background-color: #1f2833;

img{
    width: 50%;
}
p{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #66fcf1;
}

`
export const ActiveUsers = styled.div`
  height: 500px;
  

`