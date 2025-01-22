import { useState, useEffect } from 'react'
import ListaDomicilio from './components/ListaDomicilios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NuevoDomicilioModal from './components/NuevoDomicilioModal';
import BarraNavegacion from './components/BarraNavegacion';



function App() {
  const [domicilios, cambiarDomicilios] = useState([]);

  const [idActual, cambiarIdActual] = useState(1);

  const [cuentaEntregados, cambiarCuentaEntregados] = useState(0)

  function agregarNuevoDomicilio(domicilio){
    domicilio.id = idActual
    domicilio.entregado = false
    domicilio.eliminado = false

    cambiarIdActual(idActual+1)
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
