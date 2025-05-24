import React from 'react';
import  { useState, useEffect } from 'react';

const TextEffect =() => {
  const text = ["Hello There !","I'm Ujjwal ."];
  const [currentText, setCurrentText] = useState("");
  const [endvalue, setEndValue] = useState(true);
  const [isforward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(text[index].substring(0,endvalue))
      if(isforward){
        setEndValue((prev) => prev + 1);
      }else{
        setEndValue((prev) => prev - 1);
      }
      if(endvalue > text[index].length+10){
        setIsForward(false);
      }if(endvalue<2.1){
        setIsForward(true);
        setIndex((prev) => (prev + 1) % text.length);
      }
    },50);
    return () => clearInterval(interval);
       
  },[endvalue, index, isforward, text]);

    return <div className=' transition ease duration-300'>{currentText} </div> ;
};

export default TextEffect;




