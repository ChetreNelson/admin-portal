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
          <DialogContent className="w-full flex flex-col items-center outline-none  max-h-[90vh] ">
            <DialogHeader>
              <DialogTitle className="text-3xl text-gray-400">
                Rank Setup
              </DialogTitle>
            </DialogHeader>
            <RankSetupForm setShowModal={setShowModal} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Ranks;
