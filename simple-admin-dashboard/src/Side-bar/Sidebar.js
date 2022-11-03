import React, { useState } from "react";
import "./Sidebar.css"
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from 'react-router-dom';
import { MenuData } from "./MenuData";


function Header(){
    const [menu, setMenu] = useState(false);

    const showMenu = ()=>{
        setMenu(!menu);
    }

    return(
        <div className="Admin-dash">

        <div className="Admin-header">

            <div className="hamburger">
            <GiHamburgerMenu  color="#5d4e0d" onClick={showMenu}/>
            </div>
           
            <h2>ADMIN PAGE</h2>

        </div>

        <div className={menu? "menu active" : "menu"}>

            <ul>
                  {
                    MenuData.map((item, index) => {
                        return(
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    } )
                  }
            </ul>

        </div>

        </div>
    )
}

export default Header;
