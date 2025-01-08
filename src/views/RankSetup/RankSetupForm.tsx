import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import InputField from "assets/components/form/InputFiled";
import RankSetupSchema, { RankSetupSchemaType } from "./RankSetupValidation";
import { Dispatch, SetStateAction } from "react";
import { Button } from "assets/components/ui/button";

type RankSetupFormProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const RankSetupForm = ({ setShowModal }: RankSetupFormProps) => {
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
    setShowModal(false);
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
            <label className="font-medium text-gray-600">
              Rank Descriptions
            </label>
            <textarea
              className="w-full rounded-lg outline-none p-2"
              rows={4}
              {...register("rankDescriptions")}
            ></textarea>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setShowModal(false)}
              className=" mt-4 w-full  p-2 rounded"
            >
              Cancel
            </Button>
            <Button
              variant="ghost"
              type="submit"
              className="bg-blue-500 hover:bg-blue-500 mt-4 w-full text-white p-2 rounded"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RankSetupForm;
