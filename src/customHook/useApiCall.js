import { useEffect, useState } from "react";

export default function useApiCall() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((e) => {
        setIsError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { isLoading, isError, data };
}
