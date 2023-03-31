import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | undefined | '';
  size?: "sm" | "md" | "lg";
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}) => {
  const baseClasses =
    "px-4 py-2 font-semibold rounded-lg focus:outline-none transition-all duration-200 ease-in-out";
  let variantClasses = "";
  let sizeClasses = "";

  switch (variant) {
    case "primary":
      variantClasses = "text-white bg-blue-500 hover:bg-blue-600";
      break;
    case "secondary":
      variantClasses =
        "text-blue-500 bg-white border border-blue-500 hover:bg-blue-50";
      break;
    case "success":
      variantClasses = "text-white bg-green-500 hover:bg-green-600";
      break;
    case "warning":
      variantClasses = "text-white bg-yellow-500 hover:bg-yellow-600";
      break;
    case "danger":
      variantClasses = "text-white bg-red-500 hover:bg-red-600";
      break;
    default:
      variantClasses = "";
  }

  switch (size) {
    case "sm":
      sizeClasses = "text-sm";
      break;
    case "md":
      sizeClasses = "text-base";
      break;
    case "lg":
      sizeClasses = "text-lg";
      break;
    default:
      sizeClasses = "text-base";
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
