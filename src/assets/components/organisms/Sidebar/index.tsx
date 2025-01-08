import { NavLink, useLocation } from "react-router-dom";
import { sidebaritems } from "../constants/SidebarItems";
import { cn } from "assets/lib/utils";
import AppLogo from "assets/components/icons/AppLogo";

const Sidebar = () => {
  const path = useLocation().pathname;
  return (
    <div className="flex flex-col items-center w-60 rounded-lg">
      <NavLink
        to="/"
        className="w-full rounded-lg flex bg-white  items-center justify-center mb-4 *:w-44 *:h-14 "
      >
        <AppLogo />
      </NavLink>

      <div className="p-2  rounded-lg flex bg-white flex-col w-full h-full justify-between">
        <div className="w-full">
          {sidebaritems.map((item, index) => (
            <ul
              key={index}
              className="flex items-center justify-center h-12   m-2 rounded-md"
            >
              <li
                className={cn(
                  " px-2  py-2 w-full text-lg  font-medium rounded-lg my-2 bg-slate-300 text-textPrimary hover:bg-slate-500 hover:text-white",
                  path === item.link && "bg-slate-500 text-white"
                )}
              >
                <NavLink to={item.link} className="flex items-center gap-2">
                  <item.icon />
                  {item.text}
                </NavLink>
              </li>
            </ul>
          ))}
        </div>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
