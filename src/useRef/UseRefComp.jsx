import { useRef } from "react";

export default function UseRefComp() {
  const ref = useRef();
  const countRef = useRef(0);

  function chnageColor() {
    const elem = ref.current;
    elem.style.color = "red";
  }

  function increaseCounter() {
    //It does not rerender the component, As it stores the reference outside of component
    console.log(countRef.current);
    countRef.current = countRef.current + 1;
  }
  return (
    <div>
      <h1 ref={ref}>Saurabh {countRef.current}</h1>
      <button onClick={chnageColor}>Change Color</button>
      <button onClick={increaseCounter}>Increase Counter using Ref</button>
    </div>
  );
}
