import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const { data, isLoading, error } = state;

  const getFetch = async () => {
    if (!url) return;

    setState({
      data: null,
      isLoading: true,
      error: null,
    });

    try {
      const res = await fetch(url);
      const data = await res.json();

      setState({
        data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error.message || "Ha ocurrido un error",
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};
