import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function VentaTotal() {
  return (
    <div>
    <Button variant="primary">
      Ganancias totales <Badge bg="secondary">$245.000</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
    </div>
  );
}

export default VentaTotal;