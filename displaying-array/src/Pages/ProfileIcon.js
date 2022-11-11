import React from "react";
import Female from "../Images/female.png"
import Male from "../Images/man1.png"
import { CardLeft, Image } from "./Styling";

export const ProfileIcon = (props)=>{

     switch(props.icon){
        case "Female":
            return(
                
                <Image>
                               
                <img src={Female} /> 
               </Image>
            )

            case "Female":
            return(
                
                <Image>
                               
                <img src={Female} /> 
               </Image>
            )
     }
   
}


