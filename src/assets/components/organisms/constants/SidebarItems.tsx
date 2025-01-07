import { MdSpaceDashboard } from "react-icons/md";
import { GiFrankensteinCreature } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { RANK_SETUP, SETTINGS } from "router/path";

export const sidebaritems = [
  {
    id: 1,
    text: "Dashboard",
    icon: MdSpaceDashboard,
    link: "/",
  },
  {
    id: 2,
    text: "Rank Setup",
    icon: GiFrankensteinCreature,
    link: RANK_SETUP,
  },
  {
    id: 3,
    text: "Settings",
    icon: IoIosSettings,
    link: SETTINGS,
  },
];
