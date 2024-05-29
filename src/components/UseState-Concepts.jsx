import { useState } from 'react';

const UseStateConcepts = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <div>{counter}</div>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};

export default UseStateConcepts;
