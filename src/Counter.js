import React, { useEffect, useState } from "react";
const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterState");
  if (storage) return JSON.parse(storage).count;
  return { count: 0 };
};
const storeStateInLocalStorage = (count) => {
  localStorage.setItem("counterState", JSON.stringify({ count }));
  console.log(localStorage);
};

const Counter = () => {
  const [count, setCount] = useState(getStateFromLocalStorage());
  const increment = () => setCount(count + 1);

  const decrement = () => (count < 1 ? null : setCount(count - 1));
  const reset = () => setCount(0);
  useEffect(() => {
    storeStateInLocalStorage(count);
  }, [count]);
  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
