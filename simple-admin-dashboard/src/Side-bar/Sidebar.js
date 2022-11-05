import React, { useState } from "react";
import "./sidebar1.css"
import {GiHamburgerMenu} from "react-icons/gi";
import { Link } from 'react-router-dom';
import { MenuData } from "./MenuData";


function Header(){
    const [menu, setMenu] = useState(false);

    const showMenu = ()=>{
        setMenu(prevValue => !prevValue);
    }

    return(
        <div className="Admin-dash">

                <div className="main">
                        <div className="Admin-header">

                            <div className="hamburger" onClick={showMenu}>
                            <GiHamburgerMenu />
                            </div>

                            <h2>ADMIN PAGE</h2>

                        </div>

                        <div className="Admin-body">

                            <div className="section1">
                                <div className="Admin-img">

                                </div>
                                <div className="admin-text">
                                    Upload and delete lecture slides and pdf with ease
                                </div>
                            </div>


                            <div className="section2">
                                    <div className="card">
                                            <div className="image card1-img">

                                            </div>
                                            <div className="card2-text">
                                                Upload and delete lecture slides and pdf with ease
                                            </div>
                                    </div>

                                    <div className="card">
                                            <div className="image card2-img">

                                            </div>
                                            <div className="card2-text">
                                                Upload and delete lecture slides and pdf with ease
                                            </div>
                                    </div>
                                
                            </div>

                        </div>

                        

                        

                </div>


        <div className={menu ? "sidebar active" : "sidebar"}>

            <ul>
                  {
                    MenuData.map((item, index) => {
                        return(
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    <span className="icon">{item.icon}</span>
                                    <span className="title">{item.title}</span>
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
