import { RankProvider } from "./RankSetupContexts";

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <RankProvider>{children}</RankProvider>;
};
