import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import InputField from "assets/components/form/InputFiled";
import RankSetupSchema, { RankSetupSchemaType } from "./RankSetupValidation";

const RankSetupForm = () => {
  // const defaultValues: SetingsSchemaType = {
  //   currentPassword: "",
  //   newPassword: "",
  //   confirmPassword: "",
  // };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RankSetupSchemaType>({
    resolver: zodResolver(RankSetupSchema),
    // defaultValues,
  });

  const handleNewRank = (values: RankSetupSchemaType) => {
    console.log("🚀 ~ hanldePasswordChange ~ values:", values);
    reset();
  };

  return (
    <div className="bg-slate-200 w-96  rounded-lg px-4 mt-2 py-4">
      <form onSubmit={handleSubmit(handleNewRank)}>
        <div className="flex flex-col gap-2 ">
          <InputField
            label="Enter Rank Name"
            placeholder="Legend"
            {...register("newRank")}
            className="p-2 outline-none"
            error={errors.newRank ? errors.newRank.message : undefined}
          />
          <InputField
            label="Enter Rank Divisons"
            placeholder="Divisons 1"
            type="password"
            {...register("divisions")}
            className="mb-2 p-2 outline-none"
            error={errors.divisions ? errors.divisions.message : undefined}
          />
          <InputField
            label="Enter Rank Stars"
            placeholder="Star 1"
            type="password"
            {...register("stars")}
            className="mb-2 p-2 outline-none"
            error={errors.stars ? errors.stars.message : undefined}
          />
          <div className="w-full flex flex-col gap-1">
            <label className="font-medium text-gray-600">Rank Descriptions</label>
            <textarea
              className="w-full rounded-lg outline-none p-2"
              rows={4}
              {...register("rankDescriptions")}
            ></textarea>
          </div>
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

export default RankSetupForm;
