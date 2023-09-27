import { Link } from "react-router-dom";

const Item = ({ item, modificaContador, actualizaStock }) => {
  return (
    <>
      <div className="col-12 col-lg-3 col-md-6 col-sm-12" style={{
        "@media (maxWidth: 500px)": {
          maxWidth: "90%",
          margin: "0 auto"
        }
      }}>
        <div className="card mb-4 shadow">
          <div className="card-body">
            <span>{item.name}</span>
            <img style={{
              overflow: "hidden",
              "@media (max-width: 767px)": {
                maxWidth: "90%",
                margin: "0 auto"
              }
            }} className="card-img-top" src={item.imgUrl} alt="Mi Imagen" />
            <p className="card-text d-flex flex-column">
              <span>Stock {item.stock}</span>

              <span>$ {item.precio}</span>
            </p>
            <Link to={"/item/" + item.id} className="btn btn-dark bg-gradient  w-100 m-1" >Ver Detalle</Link>

          </div>
        </div>
      </div>
    </>
  )
}
export default Item