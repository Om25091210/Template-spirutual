import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, title, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => ` 
                 flex py-2 pr-4 pl-3 duration-200 font-heading 
                ${
                  isActive
                    ? "text-white font-semibold  text-[50]"
                    : "text-gray-400 text-[43]"
                }
               lg:border-0 lg:p-0 hover:text-gray-00
       `}
  >
    <div className="flex flex-col">
      <span className="eff-hover">{title}</span>
      <span className="eff"></span>
    </div>

    {children}
  </NavLink>
);

export default CustomNavLink;