import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-view">
      <button onClick={decrementCounter}>Decrement</button>
      {count}
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
