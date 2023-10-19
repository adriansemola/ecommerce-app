import ItemCount from "./ItemCount";
const ItemDetail = ({ itemDetail }) => {


  return (
    <div className="col-12 col-lg-4 col-md-6 col-sm-12" style={{
      "@media (maxWidth: 500px)": {
        maxWidth: "90%",
        margin: "0 auto"
      }
    }}>
      <div className="card mb-4 shadow">
        <div className="card-body">
          <span className="fw-bold row justify-content-center">{itemDetail.name}</span>
          <img style={{
            width: "270px",
            height: "auto",
            overflow: "hidden",
            "@media (maxWidth: 767px)": {
              maxWidth: "90%",
              margin: "0 auto"
            }
          }} className="card-img-top" loading="lazy" src={itemDetail.imgUrl} alt="Mi Imagen" />
          <p className="card-text d-flex flex-column text-center">

            <span className="m-2">Precio:  {itemDetail.precio.toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
              currencyDisplay: 'symbol'
            })} </span>
          </p>
          <ItemCount item={itemDetail} />
        </div></div>
    </div>
  )
}
export default ItemDetail