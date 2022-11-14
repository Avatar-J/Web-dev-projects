
import React, { useState } from "react";
import { motion } from "framer-motion";
import { UilBars } from "@iconscout/react-unicons";
// import "./Sidebar.css"
import { LinksData } from "./LinksData";


function  Sidebar(){


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

  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>


    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >

    <div className="menu">
        {LinksData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.title}</span>
            </div>
          );
        })}
        
        
      </div>

    </motion.div>
    </>
  )
}

export default Sidebar;