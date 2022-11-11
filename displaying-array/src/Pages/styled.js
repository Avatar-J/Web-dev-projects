import styled from "styled-components";
import Tutorimg from "../Images/Profiling.svg"


export const Container = styled.div`
    height: 500px;
    width: 100%;
    background-color: #FFA177FF;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 700px){
        height: auto;
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
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
        object-fit: contain;
    }

    @media (max-width: 700px){
        height: 300px;
        width: 100%; 
        
    }
`
export const HeaderButton = styled.button`
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    background-color: #fef1dc;
    font-size: 1rem;

    &:hover{
        cursor: pointer;
        scale: 1.5;
    }
`