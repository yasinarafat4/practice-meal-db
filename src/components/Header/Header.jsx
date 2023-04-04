import React, { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" bg-cyan-700 pb-20 pl-4 text-white">
      <button onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-cyan-400" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-cyan-400" />
          )}
        </span>
      </button>

      <ul
        className={`md:flex md:pt-10 gap-4 absolute md:static duration-500 ${
          open ? "top-6" : "-top-48"
        }`}
      >
        <li>
          {" "}
          <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink to="about">About</ActiveLink>
        </li>
        <li>
          <ActiveLink to="meals">Meals</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
