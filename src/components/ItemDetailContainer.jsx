import { useGetItem } from "../hooks/useGetItem";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";
const ItemDetailContainer = () => {

  const { id } = useParams();
  const { item, isLoading } = useGetItem(id);
  return <> {isLoading ? <Spinner /> : (
    item ?
      <div className="container">
        <div className="row flex-wrap justify-content-center align-items-center">
          <ItemDetail itemDetail={item} />
        </div>
      </div> :
      <div class="text-danger text-center">
        Error: No existe item con el id <strong>{id}</strong>
      </div>)}
  </>
}
export default ItemDetailContainer