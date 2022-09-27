import { Container } from "react-bootstrap";
import torta from "../assets/img/torta.jpg"

export default () => {
    return (
      <Container className="text-center">
        <h2 className="pt-5">
          Bienvenido a <span className="fw-bold">Happy Cake</span>
        </h2>
        <h6> El lugar de los pasteles felices </h6>
        <img src={torta}/>
        
      </Container>
    );
  };
  