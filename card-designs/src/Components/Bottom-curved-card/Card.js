import React from "react";
import { Card, Container, Box, Text } from "./Styled";
import Engineer from "../../Images/Engineer.svg"
import Notes from "../../Images/notes.svg";
import Tutor from "../../Images/Tutor.svg"


function BottomCurvedCard(){

    return(
        <Container>
            <Card>
                <Box>
                    <img src={Engineer} alt="Robot"/>
                </Box>

                <Text>        
                <h2>Engineering</h2>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </Text>
            </Card>

            <Card>
                <Box>
                    <img src={Notes} alt="Robot"/>
                </Box>

                <Text>        
                <h2>Lecture Slides</h2>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </Text>
            </Card>

            <Card>
                <Box>
                    <img src={Tutor} alt="Robot"/>
                </Box>

                <Text>        
                <h2>Tutoring</h2>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </Text>
            </Card>

        </Container>
    )

}

export default BottomCurvedCard;