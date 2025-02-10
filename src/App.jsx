import { useState, useEffect } from 'react'
import ListaDomicilio from './components/ListaDomicilios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NuevoDomicilioModal from './components/NuevoDomicilioModal';
import BarraNavegacion from './components/BarraNavegacion';



function App() {

  useEffect(() => {
    async function fetchDeliveries(params) {
      const response = await fetch('https://myapp-475932199367.us-central1.run.app/delivery');
      const resData = await response.json();
      console.log("data" , resData);
      let list = [];
      resData.map((elemento) => {
          let targetObject = {
          "id": elemento.id,
          "cliente": elemento.clientName,
          "pedido": elemento.order,
          "precio": elemento.price,
          "metodoDePago": elemento.paymentMethod,
          "direccion": elemento.address
          }
          let entregado = false;
          let eliminado = false;
          if(elemento.state == 'Entregado') {
            entregado = true;
            eliminado = false;
          } else if (elemento.state == 'Eliminado') {
            entregado = false;
            eliminado = true;
          }
          targetObject.entregado = entregado;
          targetObject.eliminado = eliminado;
          list.push(targetObject)
      }
      )
      cambiarDomicilios(list);
    }
    fetchDeliveries();
  }, []);

  const [domicilios, cambiarDomicilios] = useState([]);

  const [idActual, cambiarIdActual] = useState(1);

  const [cuentaEntregados, cambiarCuentaEntregados] = useState(0)
  const [longitudDomiciliosList, cambiarLongitudDomiciliosList] = useState(0)

  function agregarNuevoDomicilio(domicilio){
    domicilio.id = idActual
    domicilio.entregado = false
    domicilio.eliminado = false

    cambiarIdActual(idActual+1)

    const deliveryToCreateToBackend = {
      "clientName": domicilio.cliente,
      "order": domicilio.pedido,
      "price": domicilio.precio,
      "paymentMethod": domicilio.metodoDePago,
      "address": domicilio.direccion,
      "state": "Activo"
    }
    const json = JSON.stringify(deliveryToCreateToBackend);
    console.log("json: ", json)

    fetch("https://myapp-475932199367.us-central1.run.app/delivery",
      {
        method: 'POST',
        body: json,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    cambiarDomicilios((domiciliosActuales) => [domicilio, ...domiciliosActuales] );
    console.log("estado de domicilios: ", domicilios)
  }


  function marcarComoEliminado(id){
    const listaActualizada = domicilios.map(domicilioActual => {
      if (domicilioActual.id == id){
        return {
          ... domicilioActual, eliminado: true
        };
        
      }
      return domicilioActual
    })
    cambiarDomicilios(listaActualizada);
  }

  function marcarComoEntregado(id){
    const listaActualizada = domicilios.map(domicilioActual => {
      if (domicilioActual.id == id){
        cambiarCuentaEntregados(cuentaEntregados+ parseInt(domicilioActual.precio))
        return {
          ... domicilioActual, entregado: true
        };
        
      }
      return domicilioActual
    })
    cambiarDomicilios(listaActualizada);
  }


  return (
    <>
      <BarraNavegacion cuentaEntregados={cuentaEntregados}/>
      <NuevoDomicilioModal crearDomicilio={agregarNuevoDomicilio}/>
        <ListaDomicilio domicilios={domicilios} marcarComoEntregado={marcarComoEntregado} marcarComoEliminado={marcarComoEliminado}/>
      
    </>
  )
}

export default App
