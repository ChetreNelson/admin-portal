import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema, { LoginSchemaType } from "./LoginValidation";
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

  const loginSubmit = (values: LoginSchemaType) => {
    navigate("/admin/dashboard");
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });
  return (
    <div className=" flex flex-col items-center justify-center  w-full">
      <h1 className="text-2xl font-bold my-6">Admin Login</h1>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <div className="flex flex-col w-96 gap-4 bg-slate-200 rounded-xl p-8">
          <input
            placeholder="Email"
            {...register("email")}
            className="mb-2 p-2 outline-none"
          />
          <input
            placeholder="Password"
            {...register("email")}
            className="mb-2 p-2 outline-none"
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
