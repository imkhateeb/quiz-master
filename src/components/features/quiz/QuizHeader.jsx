const QuizHeader = ({ questionNo = 1 }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full flex justify-between items-center">
        <span className="py-1 px-3 rounded-lg bg-gray-100 text-greenish font-semibold">
          +4 Marks
        </span>
        <span className="font-bold">Question #{questionNo}</span>
      </div>
    </div>
  );
};

export default QuizHeader;
