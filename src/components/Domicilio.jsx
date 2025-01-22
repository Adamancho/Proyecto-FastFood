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

  const[domiciliosEliminados, cambiarDomiciliosEliminados] = useState([]);

  function marcarComoEliminado(id){
    props.marcarComoEliminado(id);
    cambiarDomiciliosEliminados((domiciliosActuales) => [id, ...domiciliosActuales] );
  }

  function popularLista(id, entregado) {
    if(entregado) {
      cambiarDomiciliosEntregados((domiciliosActuales) => [id, ...domiciliosActuales] );
    }
    return true;
  }

  function popularListaEliminados(id, eliminado) {
    if(eliminado) {
      cambiarDomiciliosEliminados((domiciliosActuales) => [id, ...domiciliosActuales] );
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
        <CardText> {props.horaActual} </CardText>
        {
          popularLista(props.id, props.entregado) &&
          domiciliosEntregados.includes(props.id) &&
          //props.entregado &&
          <CardText> <b><i>Entregado</i></b>  </CardText>
        }
        
        {
          popularListaEliminados(props.id, props.eliminado) &&
          domiciliosEliminados.includes(props.id) &&
          //props.entregado &&
          <CardText> <b><i>Eliminado</i></b>  </CardText>
        }

        {
          popularLista(props.id, props.entregado) &&
          !domiciliosEntregados.includes(props.id) &&
          !domiciliosEliminados.includes(props.id) &&
          <Button variant="primary" onClick={() => marcarComoEntregado(props.id)}>
            Marcar como entregado
          </Button> 
        }
        
        {
          popularListaEliminados(props.id, props.eliminado) &&
          !domiciliosEntregados.includes(props.id) &&
          !domiciliosEliminados.includes(props.id) &&
          <Button variant="danger" onClick={() => marcarComoEliminado(props.id)}>
            Eliminar 🚯
          </Button> 
        }

      </Card.Body>
    </Card>
  );
}

export default Domicilio;