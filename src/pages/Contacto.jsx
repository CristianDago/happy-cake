import {Container, Form, Button } from "react-bootstrap";

function Contacto() {
  return (
    <Container className="text-center">
        <h2 className="pt-5">Cuentanos, ¿en que te podemos ayudar?</h2>
        <Form className="pt-5">
        <Form.Group className="mb-3">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger" type="submit">
            Enviar
        </Button>
        </Form>
    </Container>
  );
}

export default Contacto;