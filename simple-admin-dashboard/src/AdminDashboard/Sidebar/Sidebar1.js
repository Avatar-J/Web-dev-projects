import React, {useState} from "react";
import { SidebarBox, NavBar, SidebarMenu, SidebarProfileIcon, NavLink } from "./styled";
import AdminProfile from "../../Images/Admin-pana.svg";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { motion } from "framer-motion";
import { UilBars } from "@iconscout/react-unicons";
// import * as FiIcons from 'react-icons/fi';

function Sidebar1(props) {

    // const [isopen, setIsopen] = useState(true);

    // const showSidebar=()=>{
    //     setIsopen(!isopen)
    // }
  const [open, setOpen] = useState(true)
    const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  function CloseSidebar(){
    setOpen(!open);
  } 

    return (
        <SidebarBox style={{width: open? "300px" : "50px"}} >

      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>{setExpaned(!expanded) }}>
        <UilBars onClick={CloseSidebar}/>
      </div>

            {/* <NavBar>
            </NavBar> */}
            {/* <GiHamburgerMenu className="hamburger" color="#ff652f" />     */}

            {/* <SidebarProfileIcon style={{ display: props.isopen ? "visible" : "hidden", height: props.isopen ? "200px" : "0px" }} >

                <img style={{ display: props.isopen ? "visible" : "hidden", width: props.isopen ? "150px" : "0px", height: props.isopen ? "150px" : "0px" }} src={AdminProfile} alt="Admin Profile" />
            </SidebarProfileIcon> */}

  <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >



            <SidebarMenu>




                <NavLink to="/dashboard">
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><AiIcons.AiFillHome /></span>
                    <span className="title" style={{display: open? "block": "none"}}>DashBoard</span>
                </NavLink>



                <NavLink to="/dashboard/upload">
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><FaIcons.FaFileUpload /></span>
                    <span className="title" style={{display: open? "block": "none"}} >Upload File</span>
                </NavLink>



                <NavLink to="/dashboard/delete" >
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><AiIcons.AiFillDelete /></span>
                    <span className="title" style={{display: open? "block": "none"}} >Delete File</span>
                </NavLink>

                <NavLink to="/users">
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><FaIcons.FaUsers /></span>
                    <span className="title" style={{display: open? "block": "none"}}>Users</span>
                </NavLink>

                <NavLink to="/logout">
                    <span className="icon" style={{ fontSize: props.isopen ? "20px" : "2rem" }}><AiIcons.AiOutlineLogout /></span>
                    <span className="title" style={{display: open? "block": "none"}}>Log Out</span>
                </NavLink>

                





            </SidebarMenu>

            </motion.div>

        </SidebarBox>
    )
}

export default Sidebar1;