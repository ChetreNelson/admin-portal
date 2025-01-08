import { Button } from "assets/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "assets/components/ui/dialog";
import { useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setShowModal(false);
    localStorage.removeItem("mythBoost");
    navigate("/login");
  };

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setShowModal(true)}
        className="text-lg flex gap-2 justify-start mx-2 mb-2"
      >
        <HiOutlineLogout />
        Logout
      </Button>
      {showModal && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="w-fit flex flex-col items-center  ">
            <DialogHeader>
              <DialogTitle className="text-3xl rounded-full p-2 ring-2 ring-slate-200 bg-slate-100 size-fit">
                <HiOutlineLogout />
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p>Are you sure you want to logout?</p>
            </DialogDescription>
            <div className="flex gap-2 w-full">
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button variant="ghost" className="w-full" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Logout;
