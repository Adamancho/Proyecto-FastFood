import { CardText } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Domicilio(props) {

  const[domiciliosEntregados, cambiarDomiciliosEntregados] = useState([]);

  function marcarComoEntregado(id){

    props.marcarComoEntregado(id);
    
    cambiarDomiciliosEntregados((domiciliosActuales) => [id, ...domiciliosActuales] );

  }

  function popularLista(id, entregado) {
    if(entregado) {
      cambiarDomiciliosEntregados((domiciliosActuales) => [id, ...domiciliosActuales] );
    }
    
    return true;
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.direccion}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.precio}</Card.Subtitle>
        <Card.Text> Pedido: {props.pedido}</Card.Text>
        <CardText> {props.id} </CardText>
        {
          popularLista(props.id, props.entregado) &&
          domiciliosEntregados.includes(props.id) &&
          //props.entregado &&
          <CardText> Entregado </CardText>
        } 
        
        <Button variant="primary" onClick={() => marcarComoEntregado(props.id)}>
          Marcar como entregado
        </Button>       
      </Card.Body>
    </Card>
  );
}

export default Domicilio;