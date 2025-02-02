import { useEffect, useState } from "react";
import {
  Option,
  Question,
  QuizButton,
  QuizHeader,
} from "../components/features/quiz";
import { Loader } from "../components/shared";
import useQuery from "../hooks/useQuery";
import buildResponse from "../utils/buildResponse";

const Quiz = () => {
  const { data: questions, loading } = useQuery("/api/quiz");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (questions?.length > 0) {
      setCurrentQuestion(0);
      setResponse(buildResponse(questions));
    }
  }, [questions]);
  return (
    <div className="flex flex-col gap-8 w-[350px] sm:w-[400px] md:w-[450px] shadow-even-shadow-sm rounded-xl p-4 max-sm:p-2.5">
      {!loading ? (
        <>
          <QuizHeader
            totalQuestions={questions?.length}
            currentQuestion={currentQuestion}
            positiveMarks={4}
            negativeMarks={1}
          />
          <Question question={questions?.[currentQuestion]?.description} />
          <div className="flex flex-col gap-4">
            {questions?.[currentQuestion]?.options?.map((option, idx) => {
              return (
                <Option
                  key={JSON.stringify(option)}
                  option={idx}
                  content={option?.description || "Example Option"}
                  isSelected={
                    option?.id ===
                    response?.[questions?.[currentQuestion]?.id]?.selectedOption
                  }
                  onClick={() =>
                    setResponse({
                      ...response,
                      [questions?.[currentQuestion]?.id]: {
                        ...response[questions?.[currentQuestion]?.id],
                        selectedOption: option?.id,
                      },
                    })
                  }
                />
              );
            })}
          </div>
          <QuizButton
            disabled={
              response?.[questions?.[currentQuestion]?.id]?.selectedOption ===
              -1
            }
            className="py-3"
            onClick={() => {
              setCurrentQuestion(currentQuestion + 1);
            }}
            isLastQuestion={currentQuestion === questions?.length - 1}
            quizResponse={response}
          />
        </>
      ) : (
        <div className="flex justify-center items-center h-[500px]">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Quiz;
