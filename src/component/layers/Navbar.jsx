import React, { useState } from "react";
import Container from "../layers/Container";
import logo from "/logo.png";
import { NavLink } from "react-router-dom";
import Li from "./Li";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handler = () => {
    setShow(!show);
  };

  return (
    <nav className="py-8 bg-[#fff] relative">
      <Container className="flex items-center justify-between">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Logo and Hamburger */}
          <div className="flex items-center justify-between w-full md:block md:w-auto">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
            <div className="hamburger md:hidden">
              <button
                className="text-xl border-none"
                onClick={handler}
              >
                {show ? <IoCloseSharp /> : <GiHamburgerMenu />}
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <ul
            className={`flex flex-col md:flex-row gap-x-[40px] w-full justify-center absolute left-0 top-[80px] z-[9999] md:static bg-slate-200 md:bg-transparent transition-all duration-300 ease-in-out md:opacity-100 md:pointer-events-auto p-3 ${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} z-[999999999]`}
          >
            <Li className="text-[#000] md:text-[#767676]" liText="Home" to="/home" />
            <Li className="text-[#000] md:text-[#767676]" liText="Shop" to="/shop" />
            <Li className="text-[#000] md:text-[#767676]" liText="About" to="/faq" />
            <Li className="text-[#000] md:text-[#767676]" liText="Contacts" to="/about" />
            <Li className="text-[#000] md:text-[#767676]" liText="Journal" to="/contact" />
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
