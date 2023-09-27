import ItemCount from "./ItemCount";
const ItemDetail = ({ modificaContador,itemDetail }) => {

  return (
 <div className="col-12 col-lg-3 col-md-6 col-sm-12" style={{
      "@media (maxWidth: 500px)": {
        maxWidth: "90%",
        margin: "0 auto"
      }
    }}>
      <div className="card mb-4 shadow">
        <div className="card-body">

          <img style={{
            overflow: "hidden",
            "@media (maxWidth: 767px)": {
              maxWidth: "90%",
              margin: "0 auto"
            }
          }} className="card-img-top" src={itemDetail.imgUrl} alt="Mi Imagen" />
          <p className="card-text d-flex flex-column">
            <span>{itemDetail.name}</span>
            <span>$ {itemDetail.precio}</span>
          </p>
          <ItemCount id={itemDetail.id} modificaContador={modificaContador} stock={itemDetail.stock} />
        </div></div>
    </div>
  )
}
export default ItemDetail