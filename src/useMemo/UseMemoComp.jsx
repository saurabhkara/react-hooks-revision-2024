import { useMemo, useState } from "react";

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function UseMemoComp() {
  const [count, setCount] = useState(0);

  const memoizedValue = useMemo(() => {
    console.log("use memo hook");
    return numArr.filter((item) => item % 2);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <h4 onClick={() => setCount(count + 1)}>Counter {count}</h4>
      {memoizedValue.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
}
