"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "../../utils/util";
import { FaChevronDown } from "react-icons/fa";

export default function SelectDropdown({
  // CURRENT PROPS (same as before)
  value = "",
  onChange = () => {},
  options = [],
  defaultLabel = "Select",
  variant = "default",

  // NEW FLEXIBLE PROPS
  height = "h-10",
  width = "w-full sm:w-60",
  bgColor = "bg-[#111111]",
  textColor = "text-white",
  placeholderColor = "text-gray-400",
  border = "border",
  borderColor = "border-gray-600",
  rounded = true,
  radius = "",
  padding = "px-3",

  textSize = "text-sm",
  fontWeight = "font-normal",

  icon = null, // left icon
  arrowIcon = <FaChevronDown className="w-4 h-4" />, // arrow icon

  menuBg = "bg-[#111111]",
  menuBorder = "border border-gray-600",
  menuRadius = "rounded-md",

  menuItemColor = "text-white",
  menuItemHover = "hover:bg-gray-700",

  extraClasses = "",
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const finalRadius = radius || (rounded ? "rounded-full" : "rounded-lg");

  return (
    <div className={`relative ${width}`} ref={wrapperRef}>
      {/* MAIN FIELD */}
      <div
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center justify-between cursor-pointer transition-all",
          bgColor,
          textColor,
          border,
          borderColor,
          height,
          padding,
          textSize,
          fontWeight,
          finalRadius,
          extraClasses
        )}
      >
        {/* LEFT ICON */}
        {icon && <span className="mr-2">{icon}</span>}

        <span className={cn(textSize, value ? textColor : placeholderColor)}>
          {selectedOption ? selectedOption.label : defaultLabel}
        </span>

        {/* RIGHT ICON */}
        <span className={open ? "rotate-180 transition" : "rotate-0 transition"}>
          {arrowIcon}
        </span>
      </div>

      {/* MENU */}
      {open && (
        <div
          className={cn(
            "absolute left-0 right-0 mt-1 max-h-40 overflow-y-auto shadow-xl z-30",
            menuBg,
            menuBorder,
            menuRadius
          )}
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left px-3 py-2 transition",
                textSize,
                menuItemColor,
                menuItemHover
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
