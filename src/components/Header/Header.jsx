import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav className=" bg-cyan-700 p-4 text-white">
      <ul className="md:flex gap-4">
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
