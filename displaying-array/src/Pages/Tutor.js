import React from "react";
import { Container, Left, Right } from "./styled";
import Tutorimg from "../Images/Profiling.svg"


function Tutor(){

    return(
        <Container>
            <Left>
                <h1>Hello there, you can sign up to be a tutor</h1>
                <button>Sign Up</button>
            </Left>

            <Right>
                <img src={Tutorimg}/>
            </Right>
            

        </Container>
    )
}

export default Tutor;