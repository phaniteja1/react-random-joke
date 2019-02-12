import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url, method, options = {}, trigger) {
  const [response, setResponse] = useState({
    response: null,
    error: null,
    loading: true
  });

  useEffect(
    () => {
      axios({ url, method, ...options })
        .then(res => {
          setResponse({ response: res, error: null, loading: false });
        })
        .catch(error => {
          setResponse({ response: null, error, loading: false });
        });
      return setResponse({ loading: true });
    },
    [trigger]
  );

  return response;
}
