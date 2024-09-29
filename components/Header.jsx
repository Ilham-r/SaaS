"use client";
import Image from "next/image";

import Button from "./Button";
import { useState } from "react";
import { Link } from "react-scroll";
const NavLink = ({ text, to }) => (
  <Link
    className=" cursor-pointer text-grayText max-lg:text-navText transition-colors duration-300 hover:text-[#516dcf] hover:font-bold"
    to={to}
    smooth
    spy
    activeClass="!text-[#516dcf] !font-bold"
  >
    {" "}
    {text}
  </Link>
);
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <header className="w-full fixed z-20 p-4">
      <div className=" flex items-center justify-between">
        <div className="gradient cursor-pointer ">
          <Image src="/images/logo.png" width={40} height={40} alt="saas" />
        </div>
        <div
          className={`max-lg:fixed max-lg:top-0 max-lg:bg-bgColor  max-lg:left-0 max-lg:w-full ${
            isOpen ? "max-lg:disaply" : "max-lg:hidden"
          }`}
        >
          <div className="w-full max-lg:items-start max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:justify-center  max-lg:p-6 max-lg:overflow-hidden max-md:px-4 sidebar-before">
            <ul className="flex items-center z-[1] gap-6 max-lg:block ">
              <li className="nav-li">
                <NavLink text="About" to="hero" />
              </li>
              <li className="nav-li">
                <NavLink text=" Features" to="product" />
              </li>
              <li className="nav-li">
                <NavLink text=" Customers" to="offers" />
              </li>
              <li className="nav-li">
                <NavLink text="Updates" to="prices" />
              </li>
              <li className="nav-li">
                <NavLink text=" Help" to="hero" />
              </li>
              <li className="nav-li">
                <Button title="Get for free" />
              </li>
            </ul>
          </div>
        </div>
        <div
          className=" lg:hidden cursor-pointer z-20"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <Image
            src={`/images/${isOpen ? "close" : "hamb"}.png`}
            width={30}
            height={30}
            alt="toggle"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
