const Button = ({
  onClick = () => {},
  children = "Click me!",
  className = "",
  disabled = false,
  ...rest
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-6 py-2 ${
        disabled ? "bg-gray-400" : "bg-greeny"
      } text-white rounded-lg font-semibold font-dmSans ${
        !disabled && "hover:scale-105 active:scale-95"
      } transition-all duration-300 ease-in-out ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
