import styled from "styled-components";
import { Link } from "react-router-dom";



export const SidebarBox = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');

    /* width: 70px; */
    background-color: #1f2833;
    min-height: 100vh;
    margin-right: 10px;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    transition: all 300ms ease;
    width: 250px;
    /* position: fixed; */

    /* @media (max-width: 1000px){
        width: 70px !important;
    } */

     .bars{
    /* display: none; */
    width: 40px;
    background: #ff652f;
    color: #1f2833;
    border-radius: 10px;
    padding:10px;
    
  }

  @media (max-width: 768px) {
    
      position: fixed;
      z-index: 9;
      background: #1f2833;
      width: 300px;
      padding-right: 1rem;
      height: 100%;
    }

    /* .bars{
      display: flex;
      position: fixed;
      top: 2rem;
      left:60%;
      background: #ff652f;
      padding:10px;
      border-radius: 10px;
      z-index: 9;
      color: #1f2833;
    } */
    /* @media screen and (max-width:500px){
        min-height:0;
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        
        
    } */
`
export const NavBar = styled.nav`

   height: 100px;

   .hamburger{
     line-height: 100px;
     font-size: 2rem;
     display: flex;
     justify-content: center;
     align-items: center;
   }
  
   
`
export const SidebarProfileIcon = styled.div`
   margin-top: 50px;
   margin-bottom: 20px;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   

    .Profile{
        border-radius: 50%;
        background-color: #66fcf1;
        width: 150px;
        height: 150px;
        
    }
`
export const SidebarMenu = styled.div`
    
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    /* @media screen and (max-width:500px){
        flex-direction: row;
        
    } */
    .icon{
        /* font-size: 20px; */
        /* width: 60px; */
        /* padding-right:10px; */
        
    }

   /* .title{
        font-size: 20px;
       
    }

    @media (max-width: 1200px) {
    .title{
      display: none;
    }
    @media (max-width: 768px) {
        display: block;
    }
   
  }
   */
    
   
`
export const NavLink = styled(Link)`
      
     color: #ff652f;
     margin-top: 30px;
    display: flex;
    padding: 5px 5px;
    /* gap: 2px; */
    /* transition: all 0.5s; */
    cursor: pointer;
    text-decoration: none;
    transition: all 300ms ease;

    .icon{
        font-size: 20px; 
         width: 60px; 
         height: 60px;
         line-height: 60px;
         padding-right:10px; 
        
    }

   .title{
        
        height: 50px;
        line-height: 70px;
       
    } 

    @media screen and (max-width:500px){
        padding-right: 50px;
        
    }
    
    &:hover{
      color: #ff652f;
      background:white;
     transition: all 0.5s;
      
    }
    &:active{
        color: #ff652f;
        background-color: white;
    

    }
`

