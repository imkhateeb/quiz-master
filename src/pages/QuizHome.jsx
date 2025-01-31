import { useState } from "react";
import { Button } from "../components/shared";
import LaunchPortal from "../components/features/quiz/LaunchPortal";

const QuizHome = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <div className="flex flex-col w-[400px] md:w-[500px] max-sm:w-[350px] p-4 gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl lg:text-5xl max-sm:text-3xl font-poppins font-bold">
          Hi Learner 👋
        </h1>
        <p className="text-2xl max-sm:text-xl lg:text-3xl font-semibold font-dmSans">
          Are you excited for the quiz?🤩
        </p>
      </div>
      <div className="flex flex-col gap-2 text-xl max-sm:text-lg">
        <div className="flex items-center gap-2">
          <span className="font-semibold font-dmSans">Subject</span>:
          <span className="font-dmSans">Biology</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold font-dmSans">Topic</span>:
          <span className="font-dmSans">
            aklsdnf slfksdf lsjzxflj sdflkdszjxf ls
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold font-dmSans">Title</span>:
          <span className="font-dmSans">
            aklsdnf slfksdf lsjzxflj sdflkdszjxf ls
          </span>
        </div>
      </div>
      <div className="w-full">
        <Button
          onClick={() => {
            setStartQuiz(true);
          }}
          className="w-full py-4 rounded-xl text-xl font-bold"
        >
          Launch Quiz 🚀
        </Button>
      </div>

      {/* Modals */}
      {startQuiz ? <LaunchPortal onClose={() => setStartQuiz(false)} /> : ""}
    </div>
  );
};

export default QuizHome;
