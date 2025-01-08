import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema, { LoginSchemaType } from "./LoginValidation";
import InputField from "assets/components/form/InputFiled";
const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const loginSubmit = (values: LoginSchemaType) => {
    console.log(values);
    navigate("/admin/dashboard");

    if (values) {
      localStorage.setItem("mythBoost", values.email);
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center  w-full">
      <h1 className="text-2xl font-bold my-6">Admin Login</h1>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <div className="flex flex-col w-96 gap-4 bg-slate-200 rounded-xl p-8">
          <InputField
            placeholder="Email"
            type="email"
            {...register("email")}
            className="mb-2 p-2 outline-none"
            error={errors.email ? errors.email.message : undefined}
          />
          <InputField
            placeholder="Password"
            {...register("password")}
            className="mb-2 p-2 outline-none"
            type="password"
            error={errors.password ? errors.password.message : undefined}
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
