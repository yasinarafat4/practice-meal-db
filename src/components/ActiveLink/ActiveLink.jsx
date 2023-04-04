import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "bg-sky-600 p-1 rounded-md" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
