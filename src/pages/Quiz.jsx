import { useState } from "react";
import { Option, Question, QuizHeader } from "../components/features/quiz";
import { Button } from "../components/shared";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div className="flex flex-col gap-8 w-[350px] sm:w-[400px] md:w-[450px] shadow-even-shadow-sm rounded-xl p-4 max-sm:p-2.5">
      <QuizHeader />
      <Question
        question={
          "What is the internal part of human body used as a digestive systems?"
        }
      />
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4]?.map((question, idx) => {
          return (
            <Option
              key={JSON.stringify(question)}
              option={idx}
              content="This is an option content for the question"
              optionSelected={selectedOption}
              onClick={() => setSelectedOption(idx)}
            />
          );
        })}
      </div>
      <Button disabled={true} className="bg-greeny py-3">
        Continue
      </Button>
    </div>
  );
};

export default Quiz;
