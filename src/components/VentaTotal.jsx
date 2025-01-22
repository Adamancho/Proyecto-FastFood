import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function VentaTotal(props) {
  return (
    <div>
      Ganancias totales <Badge bg="secondary">{props.ventaTotal}</Badge>
      <span className="visually-hidden">unread messages</span>
    
    </div>
  );
}

export default VentaTotal;