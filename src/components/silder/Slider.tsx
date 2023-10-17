import React, {  useState, useCallback, useEffect, useRef } from 'react';

type SliderPropsType  = {
  min?: number;
  max?: number;
  trailColor?: 'red' | 'green' | 'blue'|'gray';
  trackColor?: 'red' | 'green' | 'blue'|'gray';
} & React.HTMLAttributes<HTMLDivElement> ;

const Slider = ({ min = 0, max = 100 ,trailColor = 'gray',trackColor='blue', ...props}: SliderPropsType ) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<number>(min);
  const [dragging,setDragging]=useState(false); 

  const handleMouseDown = useCallback(() => {
    setDragging(true);
  }, []); 

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []); 

  const trailStyle = {
    'red': 'bg-red-500',
    'blue': 'bg-blue-500',
    'green': 'bg-green-500',
    'gray': 'bg-gray-500',
  };


  const trackStyle = {
    'red': 'bg-red-500',
    'blue': 'bg-blue-500',
    'green': 'bg-green-500',
    'gray': 'bg-gray-500',
  };

  const percentage = ((value-min)/(max-min))*100;

useEffect(()=>{
  const handleMouseMove =(e: MouseEvent): void=>{
    if(!dragging)return;
    if (!sliderRef.current) return;
    const hadnleOffset = e.pageX-sliderRef.current.offsetLeft;
    const sliderWidth = sliderRef.current.offsetWidth;
    const track = hadnleOffset/sliderWidth;
    if(track<0){
      setValue(min);
    }else if(track>1){
      setValue(max);
    }else{
      const newValue = min+(max-min)*track;
      setValue(newValue);
    }
  }
    document.addEventListener('mousemove',handleMouseMove)
    document.addEventListener('mouseup',handleMouseUp)
  return ()=>{
    document.removeEventListener('mousemove',handleMouseMove)
    document.removeEventListener('mouseup',handleMouseUp)
  }
},[value,min,max,dragging,sliderRef,handleMouseUp])

return (
  <div className='SliderConatiner relative w-full h-[16px]'ref={sliderRef} {...props}>
    <div className={`Rail absolute top-[6px] w-full h-[4px] rounded-md ${trailStyle[trailColor]}`}>
    </div>
    <div className={`Track absolute top-[6px] h-[4px] rounded-md ${trackStyle[trackColor]}`} style={{ width: `${percentage}%` }}>
    </div>
    <div className={`Handle absolute top-[8px] w-[12px] h-[12px] -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500 bg-white cursor-grab`} style={{ left: `${percentage}%` }} onMouseDown={ handleMouseDown}>
    </div>
  </div>
 );
};
export default Slider;
