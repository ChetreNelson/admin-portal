import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../organisms/Sidebar";

const PrivateLayout = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex h-screen w-full flex-col overflow-x-hidden bg-gray-25">
          {/* <Navbar /> */}
          {/* <div className="flex min-h-screen flex-col overflow-hidden"> */}
          <Suspense fallback={<p>Loading..</p>}>
            <Outlet />
          </Suspense>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
