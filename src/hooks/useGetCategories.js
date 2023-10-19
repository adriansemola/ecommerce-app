import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
export const useGetCategories = () => {
  const [categorias, setDatos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    const collectionRef = collection(db, 'categoria');
    getDocs(collectionRef)
      .then((response) => {
        setDatos(response.docs.map((doc) => { return doc.data().descripcion }));
      }).catch((error)=> console.log("ERROR:"+error))
      .finally(() => {
        setLoading(false)
      });
  }, []);
  return { categorias, isLoading };
}
