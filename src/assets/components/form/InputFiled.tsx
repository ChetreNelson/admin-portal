import React, {
  forwardRef,
  InputHTMLAttributes,
  SVGProps,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "assets/lib/utils";
import { EmailIcon, EyeLockIcon, EyeShowIcon } from "../icons/FormIcons";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  extraClass?: string;
  type?: string;
  error?: boolean;
  labelClass?: string;
  icon?: React.FunctionComponent<SVGProps<SVGAElement>>;
  options?: { label: string; value: string }[];
}
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      icon: Icon,
      labelClass,
      extraClass,
      error,
      type,
      options,
      ...props
    },
    ref
  ) => {
    const [hidePassword, setHidePassword] = useState(true);
    const togglePassword = () => {
      setHidePassword((prev) => !prev);
    };
    const inputType = type === "password" && !hidePassword ? "text" : type;
    const containIcon = type === "password" || type === "email" || Icon;
    return (
      <div className="mt-1">
        {label && (
          <label className={twMerge("font-medium", labelClass)}>{label}</label>
        )}
        {type === "radio" && options ? (
          <div className="flex flex-col gap-4 mt-2">
            {options.map((option) => (
              <label
                key={option.value}
                className="items-center justify-start flex gap-2"
              >
                <input
                  type="radio"
                  ref={ref}
                  value={option.value}
                  {...props}
                  className="mt-1"
                />
                {option.label}
              </label>
            ))}
          </div>
        ) : (
          <div className="flex items-center">
            <input
              type={inputType}
              ref={ref}
              {...props}
              className={cn(
                "mt-1 text-gray-900 font-normal w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm",
                error && "border-red-700 focus:border-red-700",
                containIcon && "pr-10",
                extraClass
              )}
            />
            {type === "email" && (
              <div className="-ml-8">
                <EmailIcon />
              </div>
            )}
            {type === "password" && (
              <div
                className="-ml-8 cursor-pointer focus:outline-none"
                onClick={togglePassword}
              >
                {hidePassword ? <EyeLockIcon /> : <EyeShowIcon />}
              </div>
            )}
            {Icon && (
              <div className="-ml-8">
                <Icon />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);
export default InputField;
