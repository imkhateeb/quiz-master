import { Check } from "@phosphor-icons/react";

const Option = ({ option, content, optionSelected, onClick }) => {
  const isSelected = optionSelected === option;
  return (
    <div
      onClick={onClick}
      className={`py-2 transition-all duration-300 ease-in-out px-3 rounded-lg flex gap-2 items-center ${
        isSelected
          ? "bg-greeny text-white cursor-default"
          : "bg-white hover:scale-105 text-black cursor-pointer"
      }`}
    >
      {isSelected ? (
        <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-white text-greeny">
          <Check size={20} weight="bold" />
        </div>
      ) : (
        <span className="w-[35px] h-[35px] rounded-full flex items-center justify-center bg-creamy text-sm font-semibold">
          {option === 0 ? "A" : option === 1 ? "B" : option === 2 ? "C" : "D"}
        </span>
      )}
      <span>{content}</span>
    </div>
  );
};

export default Option;
