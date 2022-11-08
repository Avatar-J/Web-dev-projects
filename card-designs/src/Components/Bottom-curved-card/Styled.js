import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
`

export const Card = styled.div`
    width: 320px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border-radius: 20px;
    border-bottom-left-radius: 160px;
    border-bottom-right-radius: 160px;
    position: relative;

    &:nth-child(1){
        background-color: #a9fdf8;
    }
    &:nth-child(2){
        background-color: #e3a9fd;
    }
    &:nth-child(3){
        background-color: #fcea64;
    }
   
`
export const Box = styled.div`
    width: 180px;
    height: 180px;
    position: absolute;
    top: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 50%;

    img{
        width: 150px;
        height: 150px;
        
        border-radius: 50%;
    
    }
`
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    margin-top: 60px;
    color: #7e5204;
`
