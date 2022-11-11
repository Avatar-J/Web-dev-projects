import React, { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import { SidebarBox, NavBar, SidebarMenu, SidebarProfileIcon, NavLink } from "./styled";
import AdminProfile from "../../Images/Admin-pana.svg";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';

function Sidebar1(){

    const [isopen, setIsopen] = useState(true);

    const showSidebar=()=>{
        setIsopen(!isopen)
    }

    return(
        <SidebarBox style={{width: isopen?  "300px" : "60px"}}>

            <NavBar onClick={showSidebar}>
            <GiHamburgerMenu className="hamburger" color="#ff652f" />    
            </NavBar>

            <SidebarProfileIcon style={{display: isopen? "visible": "hidden",height: isopen?  "200px" : "0px"}} >
               
                <img style={{display: isopen? "visible": "hidden", width: isopen?  "150px" : "0px",height: isopen?  "150px" : "0px" }}   src={AdminProfile} alt="Admin Profile"/>
            </SidebarProfileIcon>

            <SidebarMenu>

                    
                            <NavLink to="/">
                                <span className="icon" style={{fontSize: isopen?  "20px" : "2rem"}}><AiIcons.AiFillHome /></span>
                                <span className="title" style={{display: isopen? "block": "none"}} >DashBoard</span>
                            </NavLink>
                        

                        
                            <NavLink to="/upload">
                                <span className="icon" style={{fontSize: isopen?  "20px" : "2rem"}}><FaIcons.FaFileUpload /></span>
                                <span className="title" style={{display: isopen? "block": "none"}}>Upload File</span>
                            </NavLink>
                        

                        
                            <NavLink to="/delete" >
                                <span className="icon" style={{fontSize: isopen?  "20px" : "2rem"}}><AiIcons.AiFillDelete /></span>
                                <span className="title" style={{display: isopen? "block": "none"}}>Delete File</span>
                            </NavLink>
                        

                       
                            <NavLink to="/delete">
                                <span className="icon" style={{fontSize: isopen?  "20px" : "2rem"}}><FiIcons.FiSettings/></span>
                                <span className="title" style={{display: isopen? "block": "none"}}>Settings</span>
                            </NavLink>
                        

                        
                            <NavLink to="/delete">
                                <span className="icon" style={{fontSize: isopen?  "20px" : "2rem"}}><AiIcons.AiOutlineLogout/></span>
                                <span className="title" style={{display: isopen? "block": "none"}}>Log Out</span>
                            </NavLink>
                        
                    

            

            </SidebarMenu>

        </SidebarBox>
    )
}

export default Sidebar1;