import React, { useContext, useState } from "react";
import { context} from "../main";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logout from "../Pages/UserAuth/Logout";

function Headers() {
  const { isAuthenticated, setIsAuthenticated, setLoggedIn } =
    useContext(context);


  const navLinks = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/tourist",
      display: "Tourist",
    },
    {
      path: "/buddy",
      display: "Buddy",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
    {
      path: "/profile",
      display: "Profile",
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState("hiddenbox");

  const changeStyle = () => {
    // console.log(navbarOpen)
    if (navbarOpen !== "hiddenbox") setNavbarOpen("hiddenbox");
    else setNavbarOpen("openbox");
  };

  return (
    <div className="flex justify-center">
      <nav className="border-gray-200 bg-[#39a4c1] dark:bg-[#3898b2] dark:border-[#650808] w-[95%] mt-5 sticky">
        <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center ps-2 md:ps-5">
            <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Native Buddy
            </span>
          </a>
          <button
          
            type="button"
            className="inline-flex items-center p-2 me-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#205a6b] dark:hover:bg-[#25738a] dark:focus:ring-[#205a6b]"
            onClick={changeStyle}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={navbarOpen} id="navbar-solid-bg">
            <ul className="flex flex-col items-center justify-end font-medium mt-4 rounded-lg bg-[#3898b2] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-[#3898b2] md:dark:bg-[#3898b2] dark:border-gray-700">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-[#1a6478] text-[16px] leading-7 font-[400] font-hammersmith "
                        : "text-white text-[16px] leading-7 font-[100] hover:text-[#237085] font-hammersmith"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}

              {/* login logout  */} 
              {isAuthenticated ? (
                <Logout/>
              ) : (
                <div className="">
                  <Link
                    to="/login"
                    className="w-72 border text-white tracking-wider bg-[#2a7b94] p-2 font-sans me-3"
                  >
                    Login
                  </Link> 
                  <Link
                    to="/register"
                    className="w-72 border text-white tracking-wider bg-[#2a7b94] p-2 font-sans"
                  >
                    register
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Headers;
