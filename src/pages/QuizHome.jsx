import { useState } from "react";
import { Button } from "../components/shared";
import { LaunchPortal } from "../components/features/quiz";

const QuizHome = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <div className="flex flex-col max-xs:w-[350px] md:w-[500px] max-sm:p-2.5 p-4 gap-6  shadow-even-shadow-sm rounded-xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl lg:text-5xl max-sm:text-3xl font-poppins font-bold">
          Hi Learner 👋
        </h1>
        <p className="text-2xl max-sm:text-xl lg:text-3xl font-semibold font-dmSans">
          Are you excited for the quiz?🤩
        </p>
      </div>
      <div className="flex flex-col gap-2 text-xl max-md:text-lg font-dmSans max-xs:text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Subject</span>:<span>Biology</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Title</span>:
          <span>Genetics and Evolution</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Topic</span>:
          <span>The Molecular Basis of Inheritance</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Right Answer</span>:
          <span className="text-greenish font-bold">+4 Marks</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Wrong Answer</span>:
          <span className="text-red-500 font-bold">-1 Marks</span>
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
