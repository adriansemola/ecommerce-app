import {Nav,Badge} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'

const CardWidget=({cartCount})=>{
    return (
        <>
        <Nav.Link  href="carrito" className="p-2 bg-ligth position-relative" >
          <FaShoppingCart  style={{ color:"white",fontSize: '30px' }} />
          <Badge style={{
          position: 'absolute',
          bottom:0,
          right:0,
          transform: 'translate(35%,35%)', 
        }} className="rounded-circle" >{cartCount}</Badge>
        </Nav.Link>    
        </>
    )
}
export default CardWidget