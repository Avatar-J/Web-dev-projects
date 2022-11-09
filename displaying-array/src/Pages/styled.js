import styled from "styled-components";


export const Container = styled.div`
    height: 500px;
    width: 100%;
    background-color: #fef1dc;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 700px){
        height: auto;
        display: grid;
        grid-template-columns: 1fr;
    }
`
export const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 700px){
        height: 300px;
        
    }
`
export const Right = styled.div`
    width: 50%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 700px){
        height: 200px;
        width: 100%; 
        
    }
`