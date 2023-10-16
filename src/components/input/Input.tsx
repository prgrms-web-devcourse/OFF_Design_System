import { useRef, useState } from 'react';

type InputPropsType = {
  inputLabel?: string;
  inputType?: 'text' | 'password';
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ inputLabel, inputType, style, ...props }: InputPropsType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState('');

  const handleLabelClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleRemoveButtonClick = () => {
    setInputValue('');
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
          type={inputType}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={style}
          {...props}
        />
        {inputValue.length > 0 && (
          <button className='absolute cursor-pointer right-3 w-4'>
            <img
              // className='w-4'
              src='./src/assets/close.svg'
              alt='remove'
              onClick={handleRemoveButtonClick}
            />
          </button>
        )}
      </div>
    </>
  );
};

export default Input;
