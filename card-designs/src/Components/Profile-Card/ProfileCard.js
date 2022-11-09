import React from "react";
import { Container, Wrapper, Card, ImageBorder, Left, Name, Right } from "./Styled";
import turtle from "../../Images/turtle3.jpg"



function ProfileCard(){

    return(
        <Container>

            <Wrapper>

                <Card>
                    <Left>
                            <ImageBorder>
                                <div className="deco">
                                     <img src={turtle} /> 
                                </div>
                            </ImageBorder>

                            <Name>
                                <h2>Jummai Alhassan</h2>
                                <h3>Gender: Female</h3>
                            </Name>
                    </Left>

                    <Right>
                        <h3><span>Occupation:</span> Student</h3>
                        <h3><span>Email: </span>jummyhassan5@gmail.com</h3>
                        <h3><span>Phone:</span> 05924519</h3>

                    </Right>
                    



                </Card>
            </Wrapper>



        </Container>
    )
}

export default ProfileCard;