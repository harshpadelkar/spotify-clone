import React, { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, type, placeholder, ...props }, ref) => {
    return (
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={twMerge(
          "w-full rounded-md flex bg-neutral-700 border border-transparent p-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
