import { createContext, useContext, useState } from "react";

type RankContextProviderProps = {
  children: React.ReactNode;
};

type RankContext = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export const RankContext = createContext<RankContext | undefined>(undefined);

export const RankProvider = ({ children }: RankContextProviderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <RankContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </RankContext.Provider>
  );
};

export function useRankContext() {
  const context = useContext(RankContext);
  if (!context) {
    throw new Error("useRankContext must be used within a RankProvider");
  }
  return context;
}
