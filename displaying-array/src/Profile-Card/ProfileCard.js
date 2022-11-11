import React from "react";
import { BodyContainer, BodyWrapper, BodyCard,  CardLeft, CardRight } from "./Styled";

import Man from "../Images/man1.png"
import Female from "../Images/female.png"
import { Data } from "../Data";


function ProfileCard(){

    return(
        <BodyContainer>

            <BodyWrapper>

                {
                    Data.map((data, index) => {
                        return(
                        <BodyCard>
                        <CardLeft>

                                
                                    <div className="deco">
                                       
                                         <img src={Female} /> 
                                    </div>
                                
    
                                
                        </CardLeft>
    
                        <CardRight>
                                 
                                    <h2>{data.Name}</h2>
                                    <h3>{data.Gender}</h3>
                                
                            <h3><span>Occupation:</span> {data.occupation}</h3>
                            <h3><span>Email: </span>{data.Email}</h3>
                            <h3><span>Phone:</span> {data.phone}</h3>
                            <h3>Courses:

                                    {
                                        data.courses.map((course, index ) => {
                                            return(
                                            <span>{course}</span>
                                            )
                                        })
                                    }
                            
                            
                            </h3>
                            
    
                        </CardRight>
                        
    
    
    
                    </BodyCard>
                        )

                    })
                }

              
            </BodyWrapper>



        </BodyContainer>
    )
}

export default ProfileCard;