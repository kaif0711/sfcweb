import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Video Gallery", path: "/video-gallery" },
    { name: "Recruiter Directory", path: "/recruitment" },
    { name: "Industry True Stories", path: "/podcasts" },
    { name: "Cleantech Fact Check", path: "/factcheck" },
  ];

  return (
    <header className="bg-yellow-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-25">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-35 h-auto" />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center">
            <ul className="flex gap-10">
              {navItems.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-black font-medium transition 
                      ${isActive ? "border-b-2 border-black pb-1" : "hover:opacity-70"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IoClose className="w-7 h-7" /> : <IoMenu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden bg-yellow-300 border-t border-yellow-400 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col py-4 px-6 space-y-4">
          {navItems.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block text-black font-medium py-2 px-3 rounded-lg 
                  ${isActive ? "bg-yellow-400" : "hover:bg-yellow-200"}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}



// import React from "react";
// import logo from "../assets/images/logo.png";
// import { IoMenu } from "react-icons/io5";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="bg-yellow-300">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-25">
//           {/* Left: logo */}
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-3">
//               <div className="w-30 h-30 rounded flex items-center justify-center">
//                 <img src={logo} alt="" />
//               </div>
//             </div>
//           </div>

//           {/* Center: nav links (hidden on small) */}
//           <nav className="flex items-center gap-4 max-auto">
//             <ul className="space-y-1">
//               <li>
//                 <NavLink
//                   to="/home"
//                   className={({ isActive }) => isActive ? "active-menu" : "rounded-full hover:bg-white/20 text-white" } // className={ isActive } 
//                 >
//                   <span className="font-medium">Home</span>
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/factcheck"
//                   className={({ isActive }) =>
//                     `flex items-center gap-3 px-5 py-3 cursor-pointer 
//                   ${
//                     isActive
//                       ? "active-menu"
//                       : "rounded-full hover:bg-white/20 text-white"
//                   }`
//                   }
//                 >
//                   <span className="font-medium">Fact Check</span>
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to="/podcasts"
//                   className={({ isActive }) =>
//                     `flex items-center gap-3 px-5 py-3 cursor-pointer 
//                   ${
//                     isActive
//                       ? "active-menu"
//                       : "rounded-full hover:bg-white/20 text-white"
//                   }`
//                   }
//                 >
//                   <span className="font-medium">Podcast</span>
//                 </NavLink>
//               </li>

//               {/* Fees */}
//               <li>
//                 <NavLink
//                   to="/recruitment"
//                   className={({ isActive }) =>
//                     `flex items-center gap-3 px-5 py-3 cursor-pointer 
//                   ${
//                     isActive
//                       ? "active-menu"
//                       : "rounded-full hover:bg-white/20 text-white"
//                   }`
//                   }
//                 >
//                   <span className="font-medium">Recruitment Directory</span>
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>

//           {/* Right: menu button for small screens */}
//           <div className="flex items-center">
//             <IoMenu className="w-6 h-6" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
