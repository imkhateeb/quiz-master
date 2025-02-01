const QuizHeader = ({
  totalQuestions,
  currentQuestion,
  positiveMarks,
  negativeMarks,
}) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="h-[30px] w-[30px] rounded-full bg-gray-100 text-greenish font-semibold flex items-center justify-center">
            +{positiveMarks}
          </span>
          <span className="h-[30px] w-[30px] rounded-full bg-gray-100 text-red-500 font-semibold flex items-center justify-center">
            -{negativeMarks}
          </span>
        </div>
        <span className="font-bold">Question #{currentQuestion + 1}</span>
      </div>
      <div className="w-full flex gap-2 items-center">
        <progress
          className="w-full text-white"
          value={(currentQuestion + 1) / totalQuestions}
        />
        <span className="font-semibold text-sm text-gray-600">
          {currentQuestion + 1}/{totalQuestions}
        </span>
      </div>
    </div>
  );
};

export default QuizHeader;
