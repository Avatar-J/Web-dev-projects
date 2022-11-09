import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const MenuData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        clName: 'menu-text'
      },

      {
        title: 'Upload File',
        path: '/upload',
        icon: <FaIcons.FaFileUpload />,
        clName: 'menu-text'
      },

      {
        title: 'Delete File',
        path: '/delete',
        icon: <AiIcons.AiFillDelete />,
        clName: 'menu-text'
      },
]