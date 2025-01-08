import UsersTypeInfo from "./PieCharts/UsersTypes";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-2 gap-4 pt-2">
      <div className="w-full h-96 lg:col-start-1 col-span-full lg:col-span-1 bg-slate-100 rounded-lg">
        <UsersTypeInfo />
      </div>
      <div className="w-full h-96 lg:col-start-2 col-span-full lg:col-span-1   bg-slate-100 rounded-lg">
        <UsersTypeInfo />
      </div>
    </div>
  );
};

export default Dashboard;
