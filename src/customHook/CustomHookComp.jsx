import useApiCall from "./useApiCall";

export default function CustomHookComp() {
  const { isError, isLoading, data } = useApiCall();

  return (
    <div>
      {isLoading && <h4>Loading .....</h4>}
      {isError && <h4>Network error {isError.msg}</h4>}
      {data && <h1>Data loaded successfully</h1>}
    </div>
  );
}
