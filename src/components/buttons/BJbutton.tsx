import React from "react";

type BJButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: 'sm' | 'md' | 'lg';
  btnName:string;
};

const BJButton = ({size,btnName,...props}: BJButton ) => {
  const { className, ...restProps } = props;
  const baseStyle = `${className} bg-green-400 hover:bg-blue-700`;

  let sizeStyle = 'sm';
  switch(size) {
    case 'sm':
      sizeStyle = 'py-1 px-2 text-sm';
      break;
    case 'md':
      sizeStyle = 'py-2 px-4 text-base';
      break;
    case 'lg':
      sizeStyle = 'py-3 px-6 text-lg';
      break;
    default:
      break;
  }
  return (
    <button {...restProps} className={`${baseStyle} ${sizeStyle}`}>
        {btnName}
    </button>
  );
}
export default BJButton;
