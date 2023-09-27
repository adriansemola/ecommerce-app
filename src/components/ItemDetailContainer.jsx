import { useGetItem } from "../hooks/useGetItem";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
const ItemDetailContainer = ({ modificaContador }) => {

  const { id } = useParams();
  const { item, isLoading } = useGetItem(id);

  if (isLoading) {
    return <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh"  }}>
    <div className="spinner-border spinner-border-md" role="status">
    </div>
  </div>
  }
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "5rem" }}> 
      <ItemDetail itemDetail={item} modificaContador={modificaContador}/>
    </div>

  )
}
export default ItemDetailContainer