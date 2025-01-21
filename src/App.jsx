import { useState, useEffect } from 'react'
import ListaDomicilio from './components/ListaDomicilios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NuevoDomicilioModal from './components/NuevoDomicilioModal';
import VentaTotal from './components/VentaTotal';



function App() {
  const [domicilios, cambiarDomicilios] = useState([]);

  const [idActual, cambiarIdActual] = useState(1);

  function agregarNuevoDomicilio(domicilio){
    
    domicilio.id = idActual
    
    domicilio.entregado = false

    cambiarIdActual(idActual+1)

    cambiarDomicilios((domiciliosActuales) => [domicilio, ...domiciliosActuales] );
    console.log("estado de domicilios: ", domicilios)
  }

  function marcarComoEntregado(id){
    
    const listaActualizada = domicilios.map(domicilioActual => {
      if (domicilioActual.id == id){
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
      <NuevoDomicilioModal crearDomicilio={agregarNuevoDomicilio}/>
      <ListaDomicilio domicilios={domicilios} marcarComoEntregado={marcarComoEntregado}/>
      <VentaTotal/>
    </>
  )
}

export default App
