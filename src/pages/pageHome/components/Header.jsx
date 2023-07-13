import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Basket from "./Basket";
import Search from "./Search";

const Header = () => {
  return (
    <Container className="header mb-4">
      <Row md="auto">
        <Search />
        <Col lg="3" xxl="2" className="login-button">
          <p>
            <i className="bi bi-person ps-2 pe-2 fs-3"></i>
            Welcome,
            <Button
              variant="link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guest
            </Button>
          </p>
        </Col>
        <Basket />
      </Row>
      <div>
        <h1 className="logo text-center text-sm-start">StoreBooK</h1>
        <p className="logo-under-text">your best friend</p>
      </div>
    </Container>
  );
};

export default Header;
