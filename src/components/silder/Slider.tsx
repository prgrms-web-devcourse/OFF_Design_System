import React, { ChangeEvent, useState, useCallback } from 'react';

type SliderProps = {
  min?: number;
  max?: number;
  onValueChange?: (value: number) => void; 
} & React.InputHTMLAttributes<HTMLInputElement>;

const Slider = ({ min = 0, max = 100 , onValueChange, ...props }: SliderProps) => {
  const [value, setValue] = useState<number>(min);

  
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    
    if(onValueChange){
      onValueChange(newValue);
    }
    
  }, [onValueChange]); 

return (
    <div className="slider-container box-border flex" >
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className={`slider w-full rounded-full`} 
        onChange={handleChange}
        {...props}
      /> 
    </div>
 );
};
export default Slider;
