import { CardGroup } from 'react-bootstrap';
import Item from './Item';
import mockService from '../mock/mockService'
import { useState } from 'react';
import { useEffect } from 'react';
const ItemListContainer = ({ callback, contador, categoria = null }) => {
  const [items, setDatos] = useState(null);
  useEffect(() => {
    const response = mockService.getItems(categoria);
    setDatos(response);
  }, [categoria]);
  if (!items) {
    return <div>No hay datos disponibles.</div>;
  }
  return (
    <CardGroup className="container">
      {items.map((item, index) => (
        <Item key={index} item={item} callback={callback} contador={contador} />))}
    </CardGroup>
  )
}
export default ItemListContainer