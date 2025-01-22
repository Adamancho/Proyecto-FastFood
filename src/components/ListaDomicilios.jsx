import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Domicilio from './Domicilio';
import classes from './Domicilio.module.css'
import { CardGroup } from 'react-bootstrap';

function ListaDomicilio(props) {

  return (
      <CardGroup className='classes.domicilios'>
        {props.domicilios.map((domicilioActual)=>
            <ListGroup.Item  key={domicilioActual.id} >
              <Domicilio direccion={domicilioActual.direccion} 
                id={domicilioActual.id} 
                precio={domicilioActual.precio} 
                pedido={domicilioActual.pedido}
                marcarComoEntregado={props.marcarComoEntregado}
                marcarComoEliminado={props.marcarComoEliminado}
                eliminado={props.eliminado}
                entregado={props.entregado}/>
            </ListGroup.Item>
        )}
      </CardGroup>
    
  );
}

export default ListaDomicilio;