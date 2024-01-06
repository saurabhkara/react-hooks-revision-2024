import useApiCall from "./useApiCall";
import useTheme from "./useTheme";
import "./pp.css";

export default function CustomHookComp() {
  const { isError, isLoading, data } = useApiCall();
  const { theme, toggleButton } = useTheme("dark");
  console.log(theme);
  return (
    <div className={`${theme}`}>
      <button onClick={toggleButton}>Toogle Theme</button>
      {isLoading && <h4>Loading .....</h4>}
      {isError && <h4>Network error {isError.msg}</h4>}
      {data && <h1>Data loaded successfully</h1>}
    </div>
  );
}
