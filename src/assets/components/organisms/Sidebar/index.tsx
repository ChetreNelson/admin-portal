import { NavLink } from "react-router-dom";
import { sidebaritems } from "../constants/SidebarItems";

const Sidebar = () => {
  return (
    <div className="bg-gray-200">
      {sidebaritems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center h-16   m-2 rounded-md"
        >
          <ul>
            <NavLink to={item.link} className="flex items-center gap-2">
              <item.icon />
              <p className="w-full">{item.text}</p>
            </NavLink>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
