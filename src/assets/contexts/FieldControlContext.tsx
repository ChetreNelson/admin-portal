import { createContext, useContext, useState } from "react";

type RankFormProviderProps = {
  children: React.ReactNode;
};

type Field = {
  division: string;
  amount: string;
};

type Star = {
  star: string;
  amount: string;
};

type RankFormContextType = {
  fields: Field[];
  stars: Star[];
  rankLogo: string;
  setRankLogo: React.Dispatch<React.SetStateAction<string>>;
  addNewField: () => void;
  addNewStar: () => void;
  handleFieldChange: (index: number, key: keyof Field, value: string) => void;
  handleStarChange: (index: number, key: keyof Star, value: string) => void;
  resetForm: () => void;
};

// Create the context with a type or undefined for safety
export const RankFormContext = createContext<RankFormContextType | undefined>(
  undefined
);

export const RankFormProvider = ({ children }: RankFormProviderProps) => {
  const [fields, setFields] = useState<Field[]>([{ division: "", amount: "" }]);
  const [stars, setStars] = useState<Star[]>([{ star: "", amount: "" }]);
  const [rankLogo, setRankLogo] = useState<string>("");

  const addNewField = () =>
    setFields((prev) => [...prev, { division: "", amount: "" }]);

  const addNewStar = () =>
    setStars((prev) => [...prev, { star: "", amount: "" }]);

  const handleFieldChange = (
    index: number,
    key: keyof Field,
    value: string
  ) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handleStarChange = (index: number, key: keyof Star, value: string) => {
    const updatedStars = [...stars];
    updatedStars[index][key] = value;
    setStars(updatedStars);
  };
  const resetForm = () => {
    setFields([{ division: "", amount: "" }]);
    setStars([{ star: "", amount: "" }]);
    setRankLogo("");
  };

  return (
    <RankFormContext.Provider
      value={{
        fields,
        stars,
        rankLogo,
        setRankLogo,
        addNewField,
        addNewStar,
        handleFieldChange,
        handleStarChange,
        resetForm,
      }}
    >
      {children}
    </RankFormContext.Provider>
  );
};

// Custom hook to use the context
export function useRankFormContext() {
  const context = useContext(RankFormContext);
  if (!context) {
    throw new Error(
      "useRankFormContext must be used within a RankFormProvider"
    );
  }
  return context;
}
