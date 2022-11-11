import styled from "styled-components";

export const AdminContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: row;
    
    .sidebar{
            visibility: visible;
    }
    @media (max-width: 700px){
        visibility: hidden;
    }
    
`
export const Wrapper = styled.div`
     width: 80%;
    margin: 0 auto;

    @media (max-width: 700px){
        width: 80%;
    }
    
`
export const TopBar = styled.div`
  height: 100px;
  width: 100%;
 display: flex;
 flex-direction: row;
 justify-content: flex-start;

 .hamburger{
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 h1{
    margin-left: 70px;
    position: absolute;
    top: 0;
 }
`
export const SectionInfo = styled.div`

margin-bottom: 20px;
 height: auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 gap: 20px;

 @media (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr ;
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
    }

`
export const SectionInfo2 = styled.div`
 height: auto;
 width: 60%;
 display: grid;
 grid-template-columns: 1fr 1fr;
 margin: 10px auto;
 gap: 20px;
 
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