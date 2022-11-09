import styled from "styled-components";


export const SidebarBox = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');

    width: 300px;
    background-color: #1f2833;
    height: 100vh;
    font-family: 'Nunito', sans-serif;;
`
export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    /* .hamburger{
        width: 50px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
    } */
`
export const SidebarProfileIcon = styled.div`
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
    /* height: calc(100% - 400px); */
    position: relative;

    li{
        list-style: none;
        margin-bottom: 10px;
        
    }
    li:nth-child(1){
    margin-top: 30px;
    }
    li:hover{
    background-color: white;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    }

    a{
      display: block;
      color: #66fcf1;
      cursor: pointer;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      margin-left: 10px;
     
    }
    a:hover{
      color: #ff652f;
      
    }
    /* a::before{
        content: "";
        position: absolute;
        top: -50px;
        right: 0;
        width: 50px;
        height: 50px;
        background-color: white;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: 35px 35px 0 10px white; 
    } */
    /* .sidebar ul li:hover a::after{
    content: "";
    position: absolute;
    bottom: -50px;
    right: 0;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 35px -35px 0 10px white;
 } */


    .icon{
        display: block;
        width: 60px;
        height: 60px;
        line-height: 60px;
        font-size: 1.7em;
    }
    .title{
        display: block;
        height: 60px;
        line-height: 60px;
        
    }
    
   
`

