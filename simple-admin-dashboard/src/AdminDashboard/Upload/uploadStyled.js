import styled from "styled-components";
import Admin from "../../Images/up.svg"


export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-image: url(${Admin});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom right;
`
export const Wrapper = styled.div`
   margin-top: 30px;
   width: 1200px;
   display: flex;
   flex-direction: column;
   display: grid;
    place-content: center;
   /* margin-left: 400px; */

   .Logo{
    display: grid;
    place-content: center;
   }

`
export const InputContainer = styled.div`
    margin-bottom: 20px; 
    margin-bottom: 30px;
    display: grid;
    place-content: center;

   
`

export const InputLabel = styled.label`
  color: #FF652F;
`
export const InputField = styled.input`
  width: 500px;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 28px;
  border: 2px solid rgba(0,0,0,0.5);
  text-align: center;
`
export const InputSelect = styled.select`
    width: 500px;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 28px;
  border: 2px solid rgba(0,0,0,0.5);
  text-align: center;
  background-color: white;
`
export const InputFile = styled.input`
    background-color: #a9fdf8;
`
export const UploadButton = styled.button`
   border-radius: 10px;
   width: 400px;
   padding: 10px;
   background-color: #FF652F;
   border: none;
   color: white;
   font-size: 1rem;

   &:hover{
    scale: 1.2;
   }

`