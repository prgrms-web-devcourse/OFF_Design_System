import { twMerge } from "tailwind-merge";

type TextareaPropsType = {
  size?: "small" | "medium" | "large";
  resize?: "horizontal" | "vertical" | "none";
  error?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({
  size = "medium",
  resize = "none",
  error = false,
  value,
  className,
  ...props
}: TextareaPropsType) => {
  const textareaDefaults =
    "w-full p-2 outline-none border border-gray-300 disabled:cursor-not-allowed";

  const textareaSizes = {
    small: "text-xs",
    medium: "text-base",
    large: "text-xl",
  };

  const classNames = twMerge(
    textareaDefaults,
    textareaSizes[size],
    error && "border-red-300",
    className
  );

  return (
    <textarea className={classNames} style={{ resize }} {...props}>
      {value}
    </textarea>
  );
};

export default Textarea;
