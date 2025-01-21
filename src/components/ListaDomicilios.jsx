import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Domicilio from './Domicilio';


function ListaDomicilio(props) {

  return (
      <ListGroup variant="flush">
        {props.domicilios.map((domicilioActual)=>
            <ListGroup.Item  key={domicilioActual} >
              <Domicilio direccion={domicilioActual.direccion} 
              id={domicilioActual.id} 
              precio={domicilioActual.precio} 
              pedido={domicilioActual.pedido}
              marcarComoEntregado={props.marcarComoEntregado}
              entregdo={props.entregado}/>
            </ListGroup.Item>
        )}
      </ListGroup>
    
  );
}

export default ListaDomicilio;