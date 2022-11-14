import styled from "styled-components";


export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom right;
  position: relative;
  

  .overlay{
    display: flex;
    flex-direction: row;
    background:rgba(333, 444, 331, 0.8);
    gap: 15px;

    @media screen and (max-width:500px){
       flex-direction: column;
        
    }
}

`

export const Wrapper = styled.div`
   margin-top: 30px;
   margin: 20px auto 20px auto;
   width: 100%;
   /* width: 1200px; */
   /* display: flex;
   flex-direction: column;
   display: grid;
    place-content: center; */


`
export const UserHeader = styled.div`
    font-size: 25px;
    color: #ff652f;
`