import RankSetupCard from "assets/components/organisms/RankCard/RankSetupCard";
import React from "react";

const RankCards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      <RankSetupCard />
      <RankSetupCard />
      <RankSetupCard />
      <RankSetupCard />
      <RankSetupCard />
    </div>
  );
};

export default RankCards;
