import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CardWidget = ({ cartCount }) => {
  return (
    <>
      <Link to="/carrito" className="bg-ligth position-relative p-2" >
        <FaShoppingCart style={{ color: "white", fontSize: '30px' }} />
        <span style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          transform: 'translate(30%,30%)',
        }} className="badge bg-secondary bg-gradient text-black rounded-circle" >{cartCount}</span>
      </Link>
    </>
  )
}
export default CardWidget