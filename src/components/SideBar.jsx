// import React from "react";
// import {FaCog, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt} from 'react-icons/fa';
// import { NavLink } from "react-router-dom";

// const SideBar = ({sidebarToggle}) => {
//     const menuItems = [
//         { icon: <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Home", path: "/" },
//         { icon: <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Blogs", path: "/blogs" },
//         { icon: <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Reports", path: "/reports" },
//         { icon: <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Inbox", path: "/inbox" },
//         { icon: <FaCog className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Settings", path: "/setting" }
//       ];
    
//   return (
//     <div className={`${sidebarToggle ? "hidden ":"block"} w-64 bg-gray-800 fixed h-full px-4 py-2 transform transition-all duration-300`}>
//       <div className="my-2 mb-4">
//         <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
//       </div>
//       <hr />
//       <ul className="mt-3 text-white font-bold">
//         {
//             menuItems.map(({icon,text,path})=> <li className="mb-2 rounded hove:shadow hover:bg-blue-500 py-2" key={path}>
//             <NavLink className="px-3" to={path} >
//                 {icon}
//                 {text}
            
//             </NavLink>
//         </li>
            
//             )
//         }

//       </ul>
//     </div>
//   );
// };

// export default SideBar;
import React from "react";
import { FaCog, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const SideBar = ({ sidebarToggle }) => {
  const menuItems = [
    { icon: <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Home", path: "/" },
    { icon: <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Blogs", path: "/blogs" },
    { icon: <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Reports", path: "/reports" },
    { icon: <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Inbox", path: "/inbox" },
    { icon: <FaCog className="inline-block w-6 h-6 mr-2 -mt-2" />, text: "Settings", path: "/setting" }
  ];

  return (
    <div className={`${sidebarToggle ? "translate-x-0" : "-translate-x-full"} transform transition-all duration-300 fixed lg:static lg:translate-x-0 lg:duration-0 lg:block w-64 bg-gray-800 h-full lg:h-auto px-4 py-2`}>
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        {menuItems.map(({ icon, text, path }) => (
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2" key={path}>
            <NavLink className="px-3" to={path}>
              {icon}
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
