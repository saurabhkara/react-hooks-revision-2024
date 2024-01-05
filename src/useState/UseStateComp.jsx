import { useState } from "react";

export default function UseStateComp() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
