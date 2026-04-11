import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function SearchInput({
  placeholder = "Search...",
  type = "text",
  // NEW FLEXIBLE PROPS (but with safe defaults)
  height = "h-[44px]",
  width = "w-full",
  bgColor = "bg-[#111111]",
  textColor = "text-white",
  placeholderColor = "placeholder-gray-400",
  border = "border",
  borderColor = "border-gray-600",
  rounded = false,
  radius = "",
  padding = "px-5 py-3",

  textSize = "text-[16px]",
  fontWeight = "font-normal",

  icon = <IoIosSearch size={20} />,
  iconPosition = "left",

  extraClasses = "",
}) {
  // Backward compatible radius
  const defaultRadius = rounded ? "rounded-full" : "rounded-xl";
  const finalRadius = radius || defaultRadius;

  return (
    <div
      className={`
        flex items-center gap-3
        ${bgColor}
        ${textColor}
        ${border}
        ${borderColor}
        ${height}
        ${width}
        ${padding}
        ${textSize}
        ${fontWeight}
        ${finalRadius}
        ${extraClasses}
      `}
    >
      {/* LEFT ICON */}
      {icon && iconPosition === "left" && (
        <span className="text-gray-400">{icon}</span>
      )}

      {/* INPUT */}
      <input
        placeholder={placeholder}
        className={`
          bg-transparent outline-none w-full
          ${textColor}
          ${placeholderColor}
          ${textSize}
        `}
      />

      {/* RIGHT ICON */}
      {icon && iconPosition === "right" && (
        <span className="text-gray-400">{icon}</span>
      )}
    </div>
  );
}
