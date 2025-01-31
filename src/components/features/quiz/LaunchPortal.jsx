import { useState } from "react";
import { Button, Modal } from "../../shared";
import { useNavigate } from "react-router-dom";
import { errorToast } from "../../shared/Toast";

const LaunchPortal = ({ onClose }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  // handlers
  const handleStartQuiz = () => {
    if (name?.trim()?.length === 0) {
      errorToast("Please enter your name!");
      return;
    }
    navigate(`/quiz/${name}?que=1`);
  };
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
        <Button onClick={handleStartQuiz} className="py-2 text-lg rounded-xl">
          Start Now!
        </Button>
      </div>
    </Modal>
  );
};

export default LaunchPortal;
