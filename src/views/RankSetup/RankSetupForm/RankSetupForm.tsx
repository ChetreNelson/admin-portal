import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import InputField from "assets/components/form/InputFiled";
import RankSetupSchema, { RankSetupSchemaType } from "../RankSetupValidation";

import { Button } from "assets/components/ui/button";
import { useRankFormContext } from "assets/contexts/FieldControlContext";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRankContext } from "assets/contexts/RankSetupContexts";
import RankLogoUpload from "./RankLogoUpload";

type RankSetupFormProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const RankSetupForm = ({ setShowModal }: RankSetupFormProps) => {
  // const [fields, setFields] = useState([{ division: "", amount: "" }]);
  const [params] = useSearchParams();
  const [rankIconFile, setRankIconFile] = useState<File | null>(null);
  const {
    fields,
    stars,
    addNewField,
    addNewStar,
    handleFieldChange,
    handleStarChange,
    resetForm,
  } = useRankFormContext();
  const { showModal } = useRankContext();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RankSetupSchemaType>({
    resolver: zodResolver(RankSetupSchema),
  });
  const handleLogoFile = (files: FileList) => {
    setRankIconFile(files[0]);
  };

  const handleNewRank = (values: RankSetupSchemaType) => {
    const newValues = {
      ...values,
      ...(fields[0].division && { divisonAndAmount: fields }),
      ...(stars[0].star && { starAndAmount: stars }),
      ...(rankIconFile && { rankIcon: rankIconFile }),
    };
    console.log("🚀 ~ handleNewRank ~ newValues:", newValues)
 
    reset();
    setShowModal(false);
  };
  useEffect(() => {
    if (!params.get("rankId")) {
      resetForm();
    }
  }, [showModal]);

  return (
    <div className="bg-slate-200   rounded-lg px-4 mt-2 py-4 overflow-auto ">
      <form onSubmit={handleSubmit(handleNewRank)}>
        <div className="flex flex-col gap-2 ">
          <InputField
            label="Enter Rank Name"
            placeholder="Legend"
            {...register("newRank")}
            className="p-2 outline-none"
            error={errors.newRank ? errors.newRank.message : undefined}
          />
          <div className="flex gap-2 items-end">
            <div className="flex flex-col gap-2">
              {fields.map((field, index) => (
                <div key={index} className="flex gap-2">
                  <InputField
                    label="Enter Division"
                    type="text"
                    placeholder={`Division ${index + 1}`}
                    value={field.division}
                    onChange={(e) =>
                      handleFieldChange(index, "division", e.target.value)
                    }
                    className="p-2 border rounded"
                  />
                  <InputField
                    label="Enter Amount($)"
                    type="text"
                    placeholder={`Amount ${index + 1}`}
                    value={field.amount}
                    onChange={(e) =>
                      handleFieldChange(index, "amount", e.target.value)
                    }
                    className="p-2 border rounded"
                  />
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                addNewField();
              }}
            >
              +
            </Button>
          </div>
          <div className="flex gap-2 items-end">
            <div className="flex flex-col gap-2">
              {stars.map((star, index) => (
                <div key={index} className="flex gap-2">
                  <InputField
                    label="Enter Star"
                    type="text"
                    placeholder={`Rank ${index + 1}`}
                    value={star.star}
                    onChange={(e) =>
                      handleStarChange(index, "star", e.target.value)
                    }
                    className="p-2 border rounded"
                  />
                  <InputField
                    label="Enter Amount($)"
                    type="text"
                    placeholder={`Amount ${index + 1}`}
                    value={star.amount}
                    onChange={(e) =>
                      handleStarChange(index, "amount", e.target.value)
                    }
                    className="p-2 border rounded"
                  />
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                addNewStar();
              }}
            >
              +
            </Button>
          </div>
          <div>
            <RankLogoUpload handleLogoFile={handleLogoFile} />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="font-medium text-gray-600">
              Rank Descriptions
            </label>
            <textarea
              className="w-full rounded-lg  focus:outline-none border  focus:border-primary sm:text-sm p-2"
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
