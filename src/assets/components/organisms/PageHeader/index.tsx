import { cn } from "assets/lib/utils";
import { Outlet, useLocation } from "react-router-dom";
import { sidebaritems } from "../constants/SidebarItems";
import { Button } from "assets/components/ui/button";
import { useRankContext } from "assets/contexts/RankSetupContexts";

interface PageHeaderProps {
  title?: string;
  extraClass?: string;
}
const Pageheder = ({ extraClass }: PageHeaderProps) => {
  const location = useLocation();
  const {  setShowModal } = useRankContext();
  const title = sidebaritems.find(
    (item) => item.link === location.pathname
  )?.text;

  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <div
        className={cn(
          "sticky top-0 z-40 w-full flex  rounded-lg  items-center justify-between bg-white ",
          extraClass
        )}
      >
        <h1 className="text-2xl font-bold  py-3 px-4 text-slate-500">
          {title}
        </h1>
        {title === "Rank Setup" && (
          <Button
            className="mx-4 font-semibold text-lg text-gray-700"
            variant="ghost"
            onClick={() => setShowModal(true)}
          >
            Create New Rank
          </Button>
        )}
      </div>
      <div className="bg-white overflow-auto rounded-lg px-4 py-2 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Pageheder;
