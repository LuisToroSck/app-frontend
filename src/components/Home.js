import { Col, Container, Row, Card, Button, Carousel } from "react-bootstrap";

const Index = () => {
  return (
    <Container
      style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
    >
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/kCa7Mw7.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/lcHIxIM.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/HRqcbp3.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/BcCOPiu.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/048ybmG.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.imgur.com/dCmyqCn.png"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card className="text-center" style={{ background: "#FFDE59" }}>
            <Card.Body>
              <Card.Title>Visita nuestro catálogo</Card.Title>
              <Card.Text>
                Explora nuestro catálogo en donde podrás encontrar las clásicas pizzas Pepperoni, Barbecue, Mechada y muchas más.
              </Card.Text>
              <Button href="/catalogo" variant="primary" style={{ background: "#FF5757" }}>Visitar catálogo</Button>
            </Card.Body>
          </Card>
        </Col>



        <Col>
          <Card className="text-center" style={{ background: "#FFDE59", }}>
            <Card.Img variant="top" src="https://i.imgur.com/nSGZ0y1.jpeg" />
            <Card.Body>
              <Card.Title>Personaliza tu propia pizza</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary" style={{ background: "#FF5757" }}>Personaliza tu propia pizza</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
