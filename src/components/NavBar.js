import React from "react";

const NavBar = (props) => {

  return (
      <nav className="
        relative
        w-full
        flex flex-wrap
        items-center
        justify-center
        py-4
        tech-primary
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg
        navbar navbar-expand-lg navbar-light"
      >
        <div className="contents lg:block xl:justify-center justify-left justify-items-end items-center mt-2">
          <img className="pt-4 items-center top-0" src="/techanic/logo.png" width={120}></img>
        </div>
        <div className="container-fluid w-full flex flex-wrap items-center px-6 py-2 mt-2 md:w-4/5">
          <button className="
            navbar-toggler
            text-white
            border-0
            hover:shadow-none hover:no-underline
            pt-10
            pb-4
            px-2.5
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" 
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
              </path>
            </svg>
          </button>
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
            <ul className="navbar-nav flex flex-col pl-0 list-style-none ml-auto text-[14px] font-medium">
              <li className="nav-item px-2">
                <a className="nav-link text-white hover:text-gray-300 focus:text-gray-300 p-0" href="/">Home</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white hover:text-gray-300 focus:text-gray-300 p-0" href="/home">Portfolio</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white hover:text-gray-300 focus:text-gray-300 p-0" href="/academic">Service</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link text-white hover:text-gray-300 focus:text-gray-300 p-0" href="#footer">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;
