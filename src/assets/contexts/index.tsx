import { RankFormProvider } from "./FieldControlContext";
import { RankProvider } from "./RankSetupContexts";

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <RankProvider>
      <RankFormProvider>{children}</RankFormProvider>
    </RankProvider>
  );
};
