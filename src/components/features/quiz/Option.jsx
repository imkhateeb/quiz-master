const Option = ({ option, content, isCorrect, optionSelected }) => {
  return (
    <div className="py-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer px-3 rounded-lg bg-white flex gap-2 items-center">
      <span className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-creamy text-sm font-semibold">
        {option === 0 ? "A" : option === 1 ? "B" : option === 2 ? "C" : "D"}
      </span>
      <span>{content}</span>
    </div>
  );
};

export default Option;
