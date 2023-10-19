import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"
export const useGetItem = (id) => {
  const [item, setDato] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const collectionRef = doc(db, 'item', id)
    getDoc(collectionRef)
      .then((response) => {

        setDato(response.exists() ? { id: response.id, ...response.data() } : null)
      })

      .catch(error => { console.log("ERROR" + error) }).finally(() => {

        setLoading(false)
      });
  }, [id]);
  return { item, isLoading };
}
