import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  function countNumber() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countNumber}>Count Number</button>
    </div>
  );
};
