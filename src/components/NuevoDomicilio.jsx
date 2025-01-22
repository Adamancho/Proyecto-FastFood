import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NuevoDomicilio(props) {

  // ToDo hay un bug cuando primero se seeccoiona nequi y luego en las egunda vez se deja efectivo
  return (
    
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre del cliente: </Form.Label>
        <Form.Control placeholder="Cliente" onChange={props.changeNombreDeCliente} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Dirección: </Form.Label>
        <Form.Control placeholder="Ubicación" onChange={props.changeUbicacion} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Celular: </Form.Label>
        <Form.Control placeholder="Número" type='number' onChange={props.changeCelular} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Pedido: </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Coloque aquí todo el pedido del cliente" onChange={props.changePedidos} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio: </Form.Label>
        <Form.Control rows={1} type='number'  placeholder="Coloque aquí el precio del pedido" onChange={props.changePrecio} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Método de pago: </Form.Label>
        <Form.Select aria-label="Default select example" onChange={props.changeMetodoDePago}>
            <option value="Efectivo">Efectivo</option>
            <option value="Nequi">Nequi</option>
            <option value="Daviplata">Daviplata</option>
        </Form.Select>
      </Form.Group>
      
    </Form>
  );
}

export default NuevoDomicilio;