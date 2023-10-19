import { useGetItems } from '../hooks/useGetItems';
import Item from '../components/Item';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {
  const { categoria } = useParams();

  const { items, isLoading, error } = useGetItems(categoria);

  return <>
    {isLoading ? <Spinner /> : error!==null ? <h2>Error:{error.message}</h2> :
      <div className="container" >
        <div className="row flex-wrap">
          {items.length !== 0 ? items.map((item, index) => (
            <Item key={index} item={item} />)) : <h3>Sin Stock</h3>}
        </div>
      </div>
    }</>
}
export default ItemListContainer