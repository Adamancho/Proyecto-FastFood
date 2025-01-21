import React from 'react';
import Button from 'react-bootstrap/Button';

const ImprimirFactura = (props) => {

  const printDocument = () => {

    const nuevoDomicilio={
      cliente: props.cliente,
      direccion: props.direccion,
      celular: props.celular,
      metodoDePago: props.metodoDePago,
      pedido: props.pedido,
      precio: props.precio
    }

    props.crearDomicilio(nuevoDomicilio)
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '100px';
    iframe.style.height = '100px';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentWindow.document;
    iframeDoc.open();

    iframeDoc.write(`
      <html>
        <head>
          <title>Factura de Domicilio</title>
          <style>
            body {
              font-family: 'Courier New', monospace;
              width: 210mm;
              height: 148mm;
              margin: 0;
              padding: 10px;
              line-height: 1.4;
              font-size: 12px;
            }
            h1 {
              text-align: center;
              font-size: 16px;
            }
            .company-info {
              text-align: center;
              margin-bottom: 10px;
            }
            .client-info {
              margin-top: 10px;
              margin-bottom: 20px;
            }
            .items-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            .items-table th, .items-table td {
              border: 1px solid #000;
              padding: 5px;
              text-align: left;
            }
            .total {
              text-align: right;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <h1>Las Sopitas</h1>
          <div class="company-info">
            <p>El Bremen, Mosquera</p>
          </div>

          <div class="client-info">
            <p><strong>Cliente:</strong> ${props.cliente}</p>
            <p><strong>Celular:</strong>${props.celular}</p>
            <p><strong>Direccion:</strong>${props.direccion}</p>
            <p><strong>Metodo de Pago:</strong>${props.metodoDePago}</p>
          </div>

          <table class="items-table">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>${props.pedido}</td>
                  <td>${props.precio}</td>
                </tr>
            </tbody>
          </table>
        </body>
      </html>
    `);
    iframeDoc.close();

    iframe.contentWindow.print();

    document.body.removeChild(iframe);
    props.darleClick()
  };

  return (
    <div>
      <Button variant="primary" onClick={printDocument}>
            Guardar e imprimir
        </Button>
    </div>
  );
};

export default ImprimirFactura;