import { Link } from "react-router-dom";
import { useState } from "react"; // Importa useState

import "./style.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación

  return (
    <div>
      <nav className="dark:bg-zinc-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to={"/"}>
            <img
              id="imgLogo"
              className="h-16 w-auto"
              src="/src/assets/images/logo.png"
              alt="Logo Amazing Events"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              id="hamburgerButton"
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2.5 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  id="iconsNavMobile"
                  to={"/"}
                  className="text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  <i
                    className="fa-solid fa-house"
                    style={{ color: "#ffffff" }}
                  ></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/upcoming"}
                  className="text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  <i
                    className="fa-solid fa-calendar"
                    style={{ color: "#ffffff" }}
                  ></i>
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to={"/past"}
                  className="text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  <i
                    className="fa-solid fa-calendar-check"
                    style={{ color: "#fcfcfc" }}
                  ></i>
                  Past Events
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  <i
                    className="fa-solid fa-envelope"
                    style={{ color: "#ffffff" }}
                  ></i>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={"/stats"}
                  className="text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  <i
                    className="fa-solid fa-chart-line"
                    style={{ color: "#ffffff" }}
                  ></i>
                  Stats
                </Link>
              </li>
              {isLoggedIn ? (
            // Si está autenticado, no renderizamos el enlace de Login
            <>
              {/* ... Otros enlaces para usuarios autenticados ... */}
            </>
          ) : (
            // Si no está autenticado, renderizamos el enlace de Login
            <li>
             <Link
                  to={"/login"}
                  className="text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  <i
                    className="fa-solid fa-user"
                    style={{ color: "#ffffff" }}
                  ></i>
                  Login
                </Link>
              </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Header;