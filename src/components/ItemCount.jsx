import { useState } from "react";

const ItemCount = ({ stock = 0, modificaContador,id }) => {
  const [stockAux,setStock]=useState(stock)
  const [contador, setContador] = useState(1)
  const incrementarContador = () => {
    if (stockAux-contador>0) {
      setContador(contador + 1)
      
    }
  }
  
  const decrementarContador = () => {
    if (contador - 1 > 0) {
      setContador(contador - 1)
    }
  }
  const agregar = (id) => {
    setStock(stockAux-contador)
    modificaContador(contador)
    setContador(stockAux===0?0:1)
  }
  return (<>
    <div className="d-flex-row">
      <div className="mr-3">
      <span >Cantidad {contador} Stock {stockAux}</span>
      </div>
    </div>
    <div className="d-flex flex-row">

      <div className="d-flex flex-column">
        <button type="type" className="btn btn-secondary p-1 m-1" onClick={() => decrementarContador()}>-</button>
        <button type="type" className="btn btn-secondary p-1 m-1" onClick={() => incrementarContador()}>+</button>
      </div>
      <button type="type" className="btn btn-dark bg-gradient  w-100 m-1" disabled={stockAux===0? 'disabled' : null} onClick={() => agregar(id)}>Agregar al Carrito</button>
    </div>
  </>)
}
export default ItemCount