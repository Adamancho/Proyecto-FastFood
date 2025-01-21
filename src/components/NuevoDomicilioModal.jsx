import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import NuevoDomicilio from './NuevoDomicilio';
import ImprimirFactura from './ImprimirFactura';

function NuevoDomicilioModal(props) {
  const [visualizarModal, cambiarVisualizarModal] = useState(false);

  const handleClose = () => cambiarVisualizarModal(false);
  const handleShow = () => cambiarVisualizarModal(true);


  const[nombreDeCliente, asignarNombreDeCliente] = useState("");

  function cambiarNombreDeCliente(e){  
    asignarNombreDeCliente(e.target.value);
    
  }

  const[direccionUbicacion, asignarUbicacion] = useState("");

  function cambiarUbicacion(e){  
    asignarUbicacion(e.target.value);
   
  }

  const[celularTelefono, asignarCelular] = useState("");
  function cambiarCelular(e){  
    asignarCelular(e.target.value);
   
  }

  const[metodoPago, asignarPago] = useState("Efectivo");
  function cambiarMetodoDePago(e){  
    asignarPago(e.target.value);
  
  }

  const[cambioPedido, asignarPedido] = useState("");
  function cambiarPedido(e){  
    asignarPedido(e.target.value);
  }

  const[cambioPrecio, asignarPrecio] = useState("");
  function cambiarPrecio(e){  
    asignarPrecio(e.target.value);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Nuevo domicilio
      </Button>

      <Modal show={visualizarModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo domicilio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NuevoDomicilio 
            changeNombreDeCliente={cambiarNombreDeCliente}
            changeUbicacion={cambiarUbicacion}
            changeCelular={cambiarCelular}
            changeMetodoDePago={cambiarMetodoDePago}
            changePedidos={cambiarPedido}
            changePrecio={cambiarPrecio} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <ImprimirFactura cliente={nombreDeCliente}
            direccion={direccionUbicacion} 
            celular={celularTelefono}
            metodoDePago={metodoPago}
            pedido={cambioPedido}
            precio={cambioPrecio}
            darleClick={handleClose}
            crearDomicilio={props.crearDomicilio}
          />

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NuevoDomicilioModal;