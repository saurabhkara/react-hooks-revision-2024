/* eslint-disable react/prop-types */

import { useCallback, memo, useState } from "react";

function Square({ handleClick }) {
  console.log("Square Component rendering");
  return (
    <div
      style={{ backgroundColor: "cyan", height: "100px", width: "100px" }}
      onClick={handleClick}
    ></div>
  );
}

export default function UseCallbackComp() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((preD) => preD + 1);
  }, []);

  return (
    <div>
      <MemoizedSquare handleClick={handleClick} />
      <h3 onClick={handleClick}>{count}</h3>
    </div>
  );
}

const MemoizedSquare = memo(Square);
