import { useGetItems } from '../hooks/useGetItems';
import Item from '../components/Item';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
const ItemListContainer = ({ modificaContador }) => {
  const { categoria } = useParams();

  const { items, setDatos, isLoading } = useGetItems(categoria);

  if (isLoading) {
    return <Spinner/>
  }
  const actualizaStock = (id, stockAux) => {
    setDatos(items.map((item) => {
      if (item.id === id) {
        return { ...item, stock: stockAux };
      }
      return item;
    }))

  };
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <div className="row flex-wrap">
        {items.map((item, index) => (
          <Item key={index} item={item} modificaContador={modificaContador} actualizaStock={actualizaStock} />))}
      </div>
    </div>
  )
}
export default ItemListContainer