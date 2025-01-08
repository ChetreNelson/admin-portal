import { Suspense } from "react";
import Sidebar from "../organisms/Sidebar";
import Pageheder from "../organisms/PageHeader";

const PrivateLayout = () => {

  return (
    <div className="bg-slate-200 h-screen overflow-hidden">
      <div className="flex h-full gap-3 p-3 shadow-lg">
        <Sidebar />
        <div className="flex h-full w-full flex-col overflow-hidden ">
          <div className="flex-1 overflow-auto">
            <Suspense fallback={<p>Loading..</p>}>
              <Pageheder />
            </Suspense>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// const Layout = ({ children }: ViewsInterface) => {
//   const pathname = usePathname();
//   const title = navbarItems.filter((value) => value.link === pathname)[0]
//     ?.title;
//   return (
//     <>
//       <div className="bg-textPrimary/10 h-screen overflow-hidden">
//         <div className="flex h-full gap-3 p-3 shadow-lg">
//           <Navbar />
//           <div className="flex h-full w-full flex-col overflow-hidden ">
//             <div className="flex-1 overflow-auto">
//               <PageHeader title={title}>{children}</PageHeader>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default PrivateLayout;
