import React from "react";

type BJButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
};

const BJButton = ({size='sm',...props}: BJButton ) => {
  const { className, ...restProps } = props;
  const baseStyle = `${className} bg-green-400 hover:bg-blue-700`;

    const sizeStyle = {
    'sm': 'py-1 px-2 text-sm',
    'md':'py-2 px-4 text-base',
    'lg':'py-3 px-6 text-lg',
  }
 
  return (
    <button {...restProps} className={`${baseStyle} ${sizeStyle[size]}`}>
    </button>
  );
}
export default BJButton;
