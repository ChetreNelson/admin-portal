import React from "react";
import RankCards from "./RankSetupCard/RankCards";
import { useRankContext } from "assets/contexts/RankSetupContexts";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "assets/components/ui/dialog";
import RankSetupForm from "./RankSetupForm";

const Ranks = () => {
  const { showModal, setShowModal } = useRankContext();
  return (
    <>
      <RankCards />
      {showModal && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="w-fit flex flex-col items-center  ">
            <DialogHeader>
              <DialogTitle className="text-3xl ">Rank Setup</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p>Setup your Rank</p>
            </DialogDescription>

            <RankSetupForm setShowModal ={setShowModal}/>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Ranks;
