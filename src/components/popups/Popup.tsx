import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

// Define the Props type
interface PopupExampleProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupExample: React.FC<PopupExampleProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Trigger Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
       

        {/* Popup Content */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Popup Title</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>This is the content of the popup.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PopupExample;
