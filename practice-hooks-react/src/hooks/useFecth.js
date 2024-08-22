import { useState, useEffect } from "react";

export const useFecth = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: false,
  });

  const getFecth = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        isLoading: false,
        errors: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    if (!url) return;
    getFecth();
  }, [url]);

  return {
    ...state,
  };
};
