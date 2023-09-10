import { FaShoppingCart } from 'react-icons/fa'

const CardWidget = ({ cartCount }) => {
  return (
    <>
      <div href="carrito" className="p-2 bg-ligth position-relative" >
        <FaShoppingCart style={{ color: "white", fontSize: '30px' }} />
        <p style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          transform: 'translate(45%,85%)',
        }} className="badge  bg-primary rounded-circle" >{cartCount}</p>
      </div>
    </>
  )
}
export default CardWidget