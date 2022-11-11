import {GiHamburgerMenu} from "react-icons/gi";
import Sidebar1 from "../Sidebar/Sidebar1";
import { AdminContainer, Section, TopBar, SectionInfo, BoxInfo, Wrapper, SectionInfo2, BoxInfo2 } from "./DashStyled";
import UploadFile from "../../Images/upload1.svg";
import Delete from "../../Images/delete.svg"
import { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';

function AdminBody(){

    const [sidebar, setSidebar] = useState(false)

    function showSidebar(){
        setSidebar(!sidebar)
    }

    return(
        <AdminContainer>
            {
                sidebar? <Sidebar1/> : " "
            }

           {/* <div className="sidebar">
           <Sidebar1/>
           </div> */}
            

            <Wrapper>
                
            <TopBar>
            <GiHamburgerMenu className="hamburger" color="#ff652f" onClick={showSidebar}/>
             <h1>DashBoard</h1>
            </TopBar>

           <SectionInfo>

                <BoxInfo>
                    
                    <p>Number of students signed up</p>
                </BoxInfo>


                <BoxInfo>
                <FaIcons.FaChalkboardTeacher className="icon"/>
                    Number of tutors
                </BoxInfo>

                <BoxInfo>
                    Total number of programmes
                </BoxInfo>

                <BoxInfo>
                    Number of Admins
                </BoxInfo>

           </SectionInfo>

           <SectionInfo2>

                <BoxInfo2>
                    <img src={UploadFile} alt="upload"/>
                    <p>Upload lecture files and pdfs</p>
                </BoxInfo2>

                <BoxInfo2>
                    <img src={Delete} alt="upload"/>
                    <p>Delete lecture files and pdfs</p>
                </BoxInfo2>
                

           </SectionInfo2>


           {/* <SectionInfo2>

                <BoxInfo2>
                    <img src={Upload} alt="upload"/>
                    <p>Upload lecture files and pdfs</p>
                </BoxInfo2>

                <BoxInfo2>
                    <img src={Upload} alt="upload"/>
                    <p>Upload lecture files and pdfs</p>
                </BoxInfo2>

                

           </SectionInfo2> */}


           </Wrapper>

        </AdminContainer>
    )
}

export default AdminBody;