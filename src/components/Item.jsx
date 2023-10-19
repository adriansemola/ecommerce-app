import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Item = ({ item }) => {
  const { getStock } = useContext(CartContext)
  return (<>
    <div className="col-12 col-lg-3 col-md-6 col-sm-12" style={{
      "@media (maxWidth: 500px)": {
        maxWidth: "90%",
        margin: "0 auto"
      }
    }}>
      <div className="card mb-4 shadow">
        <div className="card-body text-center">
          <span className="text-center fw-bold ">{item.name}</span>
          <img style={{
            overflow: "hidden",
            "@media (maxWidth: 767px)": {
              maxWidth: "90%",
              margin: "0 auto"
            }
          }} className="card-img-top p-2" loading="lazy" src={item.imgUrl} alt="Mi Imagen" />
          <p className="card-text d-flex flex-column">
            <span className="m-3">Stock {getStock(item)}</span>

            <span className="m-2"> Precio: {item.precio.toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
              currencyDisplay: 'symbol'
            })} </span>
          </p>
          <Link to={"/item/" + item.id} className="btn btn-block btn-dark bg-gradient w-100">Ver Detalle</Link>

        </div>
      </div>
    </div>
  </>)
}
export default Item