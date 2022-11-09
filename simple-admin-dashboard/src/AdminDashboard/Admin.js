import React from "react";
import {FaHome}  from "react-icons/fa";
import {BsCloudUploadFill}  from "react-icons/bs";
import {AiFillDelete} from "react-icons/ai";
import {RiLogoutCircleRFill} from "react-icons/ri";
import "./Admin.css"




function Admin(){

    return(
        <div className="Admin-container">

            <div className="navigation">

                <ul>
                   
                    <li>
                        <a href="Library">
                            <span className="icons"><FaHome size="2.5rem" color="#0a8f05"/></span>
                            <span>Virtual Library</span>
                        </a>
                    </li>

                    <li>
                        <a href="upload">
                            <span className="icons"><BsCloudUploadFill size="2rem" color="#0a8f05"/></span>
                            <span>Upload file</span>
                        </a>
                    </li>

                    <li>
                        <a href="delete">
                            <span className="icons"><AiFillDelete size="2rem" color="#0a8f05"/></span>
                            <span>Delete file</span>
                        </a>
                    </li>

                    <li>
                        <a href="Logout">
                            <span className="icons"><RiLogoutCircleRFill size="2rem" color="#0a8f05"/></span>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Admin;