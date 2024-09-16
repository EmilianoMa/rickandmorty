import { useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [state, setState] = useState();
  const [hasError, setHasError] = useState(false);

  const getApi = () => {
    axios
      .get(url)
      .then((res) => {
        setHasError(false);
        setState(res.data);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  };
  return [state, getApi, hasError];
};

export default useFetch;
