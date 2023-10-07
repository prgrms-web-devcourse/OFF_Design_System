import { useRef, useState } from 'react';

type InputPropsType = {
  inputName?: string;
  inputType?: string;
  placeholder?: string;
};

const Input = ({
  inputName = 'ID',
  inputType = 'text',
  placeholder = '아이디',
}: InputPropsType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState('');

  const handleRemoveButtonClick = () => {
    setInputValue('');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <span className='block text-sm font-medium text-slate-700'>
        {inputName}
      </span>
      <div className='flex relative w-60 items-center'>
        <input
          className='mt-1 block w-60 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
          type={inputType}
          placeholder={placeholder}
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
