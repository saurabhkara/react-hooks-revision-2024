import { useEffect, useState } from "react";

export default function UseEffectComp() {
  const [data, setData] = useState("empty Data");

  //componentDidMount
  useEffect(() => {
    console.log(data);
  });

  // componentDidUpdate
  useEffect(() => {}, [data]);

  //ComponentWillUnmount

  useEffect(() => {
    return () => {};
  });

  function handleUpdate(currentData) {
    return function () {
      setData((prevD) => prevD + currentData);
    };
  }

  return (
    <div>
      <div>
        <button onClick={handleUpdate("Saurabh")}>Update Data</button>
      </div>
    </div>
  );
}
