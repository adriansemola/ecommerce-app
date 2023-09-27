import { useEffect, useState } from "react";
import { getCategories } from '../mock/asynmock.js'
export const useGetCategories = () => {
  const [categorias, setDatos] = useState([]);
  const [isLoading,setLoading]= useState(true);
  useEffect(() => {
    getCategories().then((categorias)=>{setDatos(categorias);setLoading(false)});
  }, []);
  return { categorias,isLoading };
}
