type TextareaPropsType = {
  size?: "small" | "medium" | "large";
  resize?: "horizontal" | "vertical" | "none";
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({
  size = "medium",
  resize = "none",
  value,
  className,
  ...props
}: TextareaPropsType) => {
  const textareaDefaults = "w-full outline-none border border-gray-300";

  const textareaSizes = {
    small: "text-xs",
    medium: "text-base",
    large: "text-xl",
  };

  return (
    <textarea
      className={`${textareaDefaults} ${textareaSizes[size]} ${className}`}
      style={{ resize }}
      {...props}>
      {value}
    </textarea>
  );
};

export default Textarea;
