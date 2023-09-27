import { useEffect, useState } from "react";
import {getItems} from '../mock/asynmock.js'
export const  useGetItems = (categoria)=>{
const [items, setDatos] = useState(null);
const [isLoading, setLoading] = useState(true);

useEffect(() => {
  getItems(categoria).then((items)=>{setDatos(items);setLoading(false);}).finally(setLoading(true));
}, [categoria]);
return {items,setDatos,isLoading};
}
