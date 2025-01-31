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
      className={`px-6 py-2 bg-greenish text-white rounded-lg font-semibold font-dmSans active:scale-95 hover:scale-105 transition-all duration-300 ease-in-out ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
