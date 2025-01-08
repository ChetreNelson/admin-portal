import { cn } from "assets/lib/utils";
import { Outlet, useLocation } from "react-router-dom";
import { sidebaritems } from "../constants/SidebarItems";

interface PageHeaderProps {
  title?: string;
  extraClass?: string;
}
const Pageheder = ({ extraClass }: PageHeaderProps) => {
  const location = useLocation();
  const title = sidebaritems.find(
    (item) => item.link === location.pathname
  )?.text;
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <div
        className={cn(
          "sticky top-0 z-40 w-full   rounded-lg  items-center justify-between bg-white ",
          extraClass
        )}
      >
        <h1 className="text-2xl font-bold  py-3 px-2">{title}</h1>
      </div>
      <div className="bg-white rounded-lg px-2 py-2 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Pageheder;
