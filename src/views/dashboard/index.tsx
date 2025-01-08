import UsersTypeInfo from "./PieCharts/UsersTypes";

const Dashboard = () => {
  return (
    <div className=" grid grid-cols-2 gap-4 p-2">
      <div className="w-full h-96 col-start-1  bg-slate-100 rounded-lg">
        <UsersTypeInfo />
      </div>
      <div className="w-full h-96 col-start-2  bg-slate-100 rounded-lg">
        <UsersTypeInfo />
      </div>
      <p>charts</p>
    </div>
  );
};

export default Dashboard;
