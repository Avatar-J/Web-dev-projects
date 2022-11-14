import React from "react";
import Sidebar1 from "../Sidebar/Sidebar1";
import { Container, Wrapper, UserHeader } from "./UsersStyled";
import BasicTable from "../Table/Table";


function Users(){

    return(

        <>
        <Container>

            <div className="overlay">
            <Sidebar1/>


            <Wrapper>
                 <UserHeader>Users</UserHeader>
                    <BasicTable/>
            </Wrapper>
            

            </div>
        </Container>


        </>
    )
}

export default Users;