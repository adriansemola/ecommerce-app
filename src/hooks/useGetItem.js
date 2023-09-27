import { useEffect, useState } from "react";
import { getItem } from '../mock/asynmock.js'
export const useGetItem = (id) => {
  const [item, setDato] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getItem(id).then((item) => { setDato(item); setLoading(false); console.log(item) });
  }, [id]);
  return { item, isLoading };
}
