import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the page from reloading
    console.log("Form Values:", formValues);
    navigate("/admin/dashboard");
  };

  return (
    <div className=" flex flex-col items-center justify-center  w-full">
      <h1 className="text-2xl font-bold my-6">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-96 gap-4 bg-slate-200 rounded-xl p-8">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            className="mb-2 p-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            className="mb-2 p-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
