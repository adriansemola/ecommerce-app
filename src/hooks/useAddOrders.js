import { useState } from "react";
import { addDoc, collection, doc, getDoc,updateDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const useAddOrder = () => {
  const [isLoading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const { cart, limpiar,montoFinal } = useContext(CartContext);

  const save = async (nombre, email, telefono) => {
    setLoading(true);

    try {
        for (const item of cart) {
          const itemRef = doc(db, 'item', item.id);
          const itemSnap= await getDoc(itemRef)
          console.log(itemSnap)
          if (itemSnap!=null && itemSnap.data().stock >= item.cantidad) {
            const nuevoStock = itemSnap.data().stock - item.cantidad;
            await updateDoc(itemRef, { stock: nuevoStock });

          } else {
            throw new Error('No hay suficiente stock disponible para ' + item.nombre);
          }
        }
        const ordenRef = collection(db, 'order');

        const orderData = {
          buyer: {
            nombre1: nombre,
            telefono1: telefono,
            mail1: email
          },
          date: new Date(),
          total:montoFinal(),
          items: cart
        };
        console.log("asdasd");

        await addDoc(ordenRef, orderData).then(({ id }) => setOrderId(id));
        limpiar();
        setLoading(false);
        return;
      
      
    } catch (error) {
      console.log('Error al guardar la orden y actualizar el stock:', error);
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, save, orderId, cart };
};
