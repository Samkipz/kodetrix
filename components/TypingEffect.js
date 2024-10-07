import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [text, speed]);

  return <div>{displayText}</div>;
};

export default TypingEffect;
