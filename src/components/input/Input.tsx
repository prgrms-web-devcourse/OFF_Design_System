import { useRef, useState } from 'react';

type InputPropsType = {
  inputLabel?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ inputLabel, style, ...props }: InputPropsType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState('');

  const handleLabelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleRemoveButtonClick = () => {
    setInputValue('');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <label
        className='text-sm font-medium text-slate-700'
        onClick={handleLabelClick}
      >
        {inputLabel}
      </label>
      <div className='flex relative w-60 items-center'>
        <input
          className='mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={style}
          {...props}
        />
        {inputValue.length > 0 && (
          <img
            className='mt-1 absolute cursor-pointer right-2'
            src='src/assets/close.svg'
            alt='remove'
            onClick={handleRemoveButtonClick}
          />
        )}
      </div>
    </>
  );
};

export default Input;
