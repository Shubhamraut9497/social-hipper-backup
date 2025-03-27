import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "minimal";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <input
        className={cn(
          // Apply default styles
          variant === "default" &&
            "w-64 pl-12 pr-6 py-2 rounded-full shadow-md dark:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 !bg-white ",
          // Apply minimal styles when variant is "minimal"
          variant === "minimal" &&
            "w-full max-w-[473px] h-14 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 ",
          " text-gray-900 placeholder-gray-500 bg-gray-100",
          "dark:bg-white dark:text-gray-100 dark:placeholder-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
