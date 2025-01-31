import { useState } from "react";
import { Button, Modal } from "../../shared";

const LaunchPortal = ({ onClose }) => {
  const [name, setName] = useState("");
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-4 py-5">
        <p>Ready to attend the quiz?</p>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="py-2 px-3 rounded-xl text-lg border-[2px] border-darky/30 focus:border-darky transition-all duration-300 ease-in-out"
        />
        <Button className="py-2 text-lg rounded-xl">Start Now!</Button>
      </div>
    </Modal>
  );
};

export default LaunchPortal;
