import { useLocation } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import { Loader } from "../components/shared";
import { useEffect, useState } from "react";

const ResultDetail = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const { data: questions, loading } = useQuery(
    "https://api.jsonserve.com/Uw5CrX"
  );
  const nameParam = query.get("name");
  const responseParam = JSON.parse(query.get("response"));
  const [currentQuestion, setCurrentQuestion] = useState(null);

  if (!nameParam || !responseParam) {
    window.location.href = "/";
  }

  useEffect(() => {
    if (questions?.length > 0) {
      const idx = questions.findIndex(
        (question) => question.id == responseParam.correctAnswers[0]
      );
      setCurrentQuestion(idx);
    }
  }, [questions]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5 w-[60%] lg:w-[70%] md:w-[80%] sm:w-[90%] mx-auto max-sm:w-[95%]">
      <div className="p-5 max-sm:p-2 w-full flex flex-col gap-2">
        <div className="text-lg flex gap-5">
          <span className="font-semibold font-dmSans text-greenish">
            {responseParam.correct} Correct
          </span>
          <span className="font-semibold font-dmSans text-red-500">
            {responseParam.incorrect} Incorrect
          </span>
        </div>
        <div className="w-full overflow-x-auto flex gap-4">
          {responseParam?.correctAnswers?.map((answer) => {
            const idx = questions.findIndex(
              (question) => question.id == answer
            );
            return (
              <div key={answer}>
                <div
                  onClick={() => setCurrentQuestion(idx)}
                  className={`w-[40px] h-[40px] rounded-full border-[2px] border-greeny flex items-center justify-center text-lg font-semibold cursor-pointer hover:bg-greeny hover:text-white transition-all duration-300 ease-in-out active:scale-90 ${
                    currentQuestion === idx ? "bg-greeny text-white" : ""
                  }`}
                >
                  {idx + 1}
                </div>
              </div>
            );
          })}

          {responseParam?.incorrectAnswers?.map((answer) => {
            const idx = questions.findIndex(
              (question) => question.id == answer
            );
            return (
              <div key={answer}>
                <div
                  onClick={() => setCurrentQuestion(idx)}
                  className={`w-[40px] h-[40px] rounded-full border-[2px] border-red-500 flex items-center justify-center text-lg font-semibold cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out active:scale-90 ${
                    currentQuestion === idx ? "bg-red-500 text-white" : ""
                  }`}
                >
                  {idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 max-sm:p-2 w-full">
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Question:</p>
            <p className="text-lg text-darky font-poppins">
              {questions?.[currentQuestion]?.description}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-bold">Answer:</p>
            <p className="text-lg text-darky font-poppins">
              {questions?.[currentQuestion]?.detailed_solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDetail;
