
import Sidebar1 from "../Sidebar/Sidebar1";
import { AdminContainer,  SectionInfo, BoxInfo, Wrapper, SectionInfo2, BoxInfo2, NavBar } from "./DashStyled";
import UploadFile from "../../Images/upload1.svg";
import Delete from "../../Images/delete.svg"

import * as FaIcons from 'react-icons/fa';


function AdminBody(){

  

    return(
        <AdminContainer>

           <Sidebar1/>

           <NavBar>
                
                <h1>
                 Admin Dashboard
                </h1>
               
            </NavBar>
            

            <Wrapper>
                
            

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



           </Wrapper>

        </AdminContainer>
    )
}

export default AdminBody;