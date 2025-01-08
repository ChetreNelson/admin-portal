import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Mythic", value: 400 },
  { name: "Legend", value: 300 },
  { name: "Master", value: 300 },
  { name: "Warrior", value: 200 },
];

const data02 = [
  { name: "Grand Master", value: 2400 },
  { name: "Epic", value: 4567 },
  { name: "Elite", value: 1398 },
];

const UsersTypeInfo = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-500 text-center pt-2">
        Users types
      </h1>
      <ResponsiveContainer width="100%" height={400} className='pb-4'>
        <PieChart>
          <Pie
            dataKey="value"
            data={data01}
            cx="30%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          />
          <Pie
            dataKey="value"
            data={data02}
            cx="80%"
            cy="30%"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default UsersTypeInfo;
