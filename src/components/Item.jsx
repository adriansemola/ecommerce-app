import { Card} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Item=({item,callback,contador})=>{
    const incrementarContador=()=>{
      contador=contador+1;
      callback(contador)
    }
    return (
        <>
          <Card style={{ flex: '25%', maxWidth: '25%' }} >
            <Card.Img src={item.imgUrl} style={{  height: 'auto' }} alt="Mi Imagen"/>
            <Card.Text className="d-flex flex-column">
              <span>{item.name}</span>
              <span>$ {item.precio}</span>  </Card.Text>
            <Card.Footer className='d-flex'>
            <Button style={{width:'200px'}} onClick={()=>callback(contador-1<0?0:contador-1)}>-</Button>
            <Button style={{width:'200px'}} onClick={()=>incrementarContador()}>+</Button>
            </Card.Footer>
          </Card>
        </>
    )
}
export default Item