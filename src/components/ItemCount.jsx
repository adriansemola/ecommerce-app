import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ item }) => {
  const { getStock, agregarItem, cantidadTotal } = useContext(CartContext)
  const [stockAux, setStock] = useState(getStock(item))
  const [contador, setContador] = useState(1)
  const incrementarContador = () => {
    if (stockAux - contador > 0) {
      setContador(contador + 1)
    }
  }

  const decrementarContador = () => {
    if (contador - 1 > 0) {
      setContador(contador - 1)
    }
  }
  const agregar = (item) => {
    agregarItem(item, contador)
    setStock(stockAux - contador)
    setContador(stockAux === 0 ? 0 : 1)
  }
  return (<>
    <div className="d-flex-row text-center" >
      <div className="mr-3">
        <span >Cantidad {contador} Stock {stockAux}</span>
      </div>
    </div>
    <div className="d-flex flex-row m-2 ">

      <div className="d-flex flex-column">
        <button type="type" className="btn btn-secondary p-1 m-1" onClick={() => decrementarContador()}>-</button>
        <button type="type" className="btn btn-secondary p-1 m-1" onClick={() => incrementarContador()}>+</button>
      </div>
      <button type="type" className="btn btn-dark bg-gradient  w-100 m-1" disabled={stockAux === 0 ? 'disabled' : null} onClick={() => agregar(item)}>Agregar al Carrito</button>

    </div>
    <div className="d-flex">
      {cantidadTotal() !== 0 ? <Link to="/cart" className="btn  btn-dark bg-gradient  w-100 " >Terminar Compra</Link> : ""}
    </div>
  </>)
}
export default ItemCount