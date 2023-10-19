import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'
export const useGetItems = (categoria,) => {
  const [items, setDatos] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
      const collectionRef = categoria ? query(collection(db, 'item'), where('categoria', '==', categoria)) : collection(db, 'item')
      getDocs(collectionRef)
        .then(response => {
          console.log(response.docs)
          setDatos(response.docs.map((doc) => { return { id: doc.id, ...doc.data() } }));
        }).catch((error) => {
          alert("ERROR" + error); setError(error)
        }).finally(() => {
          setLoading(false)
        });
  }, [categoria]);
  return { items, setDatos, isLoading, error };
}
