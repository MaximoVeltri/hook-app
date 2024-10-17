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
    try {
      const res = await fetch(url);
      const data = await res.json();

      setState({
        data,
        isLoading: false,
        error: error,
      });
    } catch (error) {
      setState({
        data: null,
        error: error,
        isLoading: false,
      });
    }

    useState({
      data,
      isLoading: false,
      error: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};
