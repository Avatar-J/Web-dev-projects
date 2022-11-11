import React, { useState } from "react";

// import {GiHamburgerMenu} from "react-icons/gi";
// import { Link } from 'react-router-dom';
// import { MenuData } from "./MenuData";
import { SidebarBox, SidebarHeader, SidebarMenu, SidebarProfileIcon } from "./styled";
import AdminProfile from "../../Images/Admin-pana.svg";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';

function Sidebar1(){

    return(
        <SidebarBox>
            <SidebarHeader>
                {/* <GiHamburgerMenu className="hamburger" color="#ff652f"/> */}
                <h2 style={{color: "white"}}>Admin</h2>
            </SidebarHeader>

            <SidebarProfileIcon>
                <img className="Profile" src={AdminProfile} alt="Admin Profile"/>
            </SidebarProfileIcon>

            <SidebarMenu>

                    <ul>
                        <li>
                            <a href="/">
                                <span className="icon"><AiIcons.AiFillHome /></span>
                                <span className="title">DashBoard</span>
                            </a>
                        </li>

                        <li>
                            <a href="/upload">
                                <span className="icon"><FaIcons.FaFileUpload /></span>
                                <span className="title">Upload File</span>
                            </a>
                        </li>

                        <li>
                            <a href="/delete">
                                <span className="icon"><AiIcons.AiFillDelete /></span>
                                <span className="title">Delete File</span>
                            </a>
                        </li>

                        <li>
                            <a href="/delete">
                                <span className="icon"><FiIcons.FiSettings/></span>
                                <span className="title">Settings</span>
                            </a>
                        </li>

                        <li>
                            <a href="/delete">
                                <span className="icon"><AiIcons.AiOutlineLogout/></span>
                                <span className="title">Log Out</span>
                            </a>
                        </li>
                    </ul>

            

            </SidebarMenu>

        </SidebarBox>
    )
}

export default Sidebar1;