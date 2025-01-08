import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SettingsSchema, { SetingsSchemaType } from "./SettinsValidaition";
import InputField from "assets/components/form/InputFiled";
import { useEffect } from "react";

const Settings = () => {
  const defaultValues: SetingsSchemaType = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SetingsSchemaType>({
    resolver: zodResolver(SettingsSchema),
    defaultValues,
  });
  const userEmail = localStorage.getItem("mythBoost");

  const hanldePasswordChange = (values: SetingsSchemaType) => {
    console.log("🚀 ~ hanldePasswordChange ~ values:", values);
    reset();
  };

  return (
    <div className="bg-slate-200 w-96  rounded-lg px-4 mt-2 py-4">
      <h1 className="text-2xl text-center text-gray-500 font-bold  py-3 px-2">
        Email:<span>{userEmail}</span>
      </h1>
      <form onSubmit={handleSubmit(hanldePasswordChange)}>
        <div className="flex flex-col gap-2 ">
          <InputField
            label="Current Password"
            placeholder="Current Password"
            type="password"
            {...register("currentPassword")}
            className="p-2 outline-none"
            error={
              errors.currentPassword
                ? errors.currentPassword.message
                : undefined
            }
          />
          <InputField
            label="New Password"
            placeholder="New Password"
            type="password"
            {...register("newPassword")}
            className="mb-2 p-2 outline-none"
            error={errors.newPassword ? errors.newPassword.message : undefined}
          />
          <InputField
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            {...register("confirmPassword")}
            className="mb-2 p-2 outline-none"
            error={
              errors.confirmPassword
                ? errors.confirmPassword.message
                : undefined
            }
          />

          <button
            type="submit"
            className="bg-blue-500 mt-4 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
