import { useState } from "react";

const ConditionalRenderingTernaryOperator = () => {
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
      <div>{counter % 2 === 0 ? 'genap' : 'ganjil'}</div>
    </>
  );
};

export default ConditionalRenderingTernaryOperator;
