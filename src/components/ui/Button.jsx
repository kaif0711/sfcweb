import "./Button.css";

export default function Button({
  text = "Click Me",
  height = "h-[44px]",
  width = "w-full",
  bgColor = "bg-yellow-300",
  hover = "hover:bg-transparent",
  textColor = "text-black",
  textColorHover = "hover:text-yellow-300",
  textSize = "text-[16px]",
  fontWeight = "font-normal",
  border = "border border-yellow-300",
  borderColor = "border-transparent",
  rounded = false,
  radius = "",
  isLoading = false,
  disabled = false,
  type = "button",
  icon = null,
  iconPosition = "left",
  padding = "px-6 py-2",
  onClick = () => {},
  extraClasses = "",
}) {
  const defaultRadius = rounded ? "rounded-full" : "rounded-xl";
  const finalRadius = radius || defaultRadius;
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
      className={`
        btn-default-shine
        flex items-center gap-2 justify-center
        ${bgColor}
        ${hover}
        ${textColor}
        ${textColorHover}
        ${height}
        ${width}
        ${textSize}
        ${fontWeight}
        ${border}
        ${borderColor}
        ${radius}
        ${padding}
        ${icon}
        ${iconPosition}
        ${finalRadius}
        transition-all duration-300
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${extraClasses}
      `}
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {text}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </button>
  );
}
