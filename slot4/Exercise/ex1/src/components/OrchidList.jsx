import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { orchids } from '../data/orchidsData';

function OrchidList() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Our Orchids Collection</h2>
      <Row>
        {orchids.map((orchid) => (
          <Col md={3} key={orchid.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={orchid.img} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{orchid.name}</Card.Title>
                <Card.Text>Category: {orchid.category}</Card.Text>
                <Button variant="primary">Detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OrchidList;