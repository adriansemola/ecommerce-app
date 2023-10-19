import { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useEffect } from 'react'
import { useState } from 'react'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)
  const [contador, setContador] = useState(0);
  useEffect(() => {
    setContador(cantidadTotal)
  }
    , [cantidadTotal])
  if(contador===0)  
  return null
  return (
    <>
      <Link to="/cart" className="bg-ligth position-relative p-2 " >
        <FaShoppingCart style={{ color: "white", fontSize: '30px' }} />
        <span style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          transform: 'translate(30%,30%)',
        }} className="badge bg-secondary bg-gradient text-black rounded-circle" >{contador}</span>
      </Link>
    </>
  )
}
export default CartWidget