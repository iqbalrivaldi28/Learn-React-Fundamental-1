import { useState } from 'react';

const ConditionalRederingIfElse = () => {
  const [counter, setCounter] = useState(10);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if(counter > 0){
        setCounter(counter - 1);
    }
  };

  let info;

  if(counter <= 0){
    info = "Batas angka"
  } else if (counter % 2 === 0) {
    info = 'genap';
  } else {
    info = 'ganjil';
  }

  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <div>{counter}</div>
      <button onClick={handleIncrement}>+</button>
      <div>{info}</div>
    </>
  );
};

export default ConditionalRederingIfElse;
