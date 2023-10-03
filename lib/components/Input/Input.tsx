import { container } from "./input.css";

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...restProps } = props;

  return <input className={`${className} ${container}`} {...restProps} />;
};
