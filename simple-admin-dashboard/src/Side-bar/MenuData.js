import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const MenuData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'menu-text'
      },

      {
        title: 'Upload File',
        path: '/upload',
        icon: <FaIcons.FaFileUpload />,
        className: 'menu-text'
      },

      {
        title: 'Delete File',
        path: '/delete',
        icon: <AiIcons.AiFillDelete />,
        className: 'menu-text'
      },
]