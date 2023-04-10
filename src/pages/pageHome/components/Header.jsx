import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Header = () => {
  return (
    <Container>
           <Form className="d-flex search-form mb-2">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
      <Row>
        <Col>
      
          <h1 className="logo">BookShop</h1>
          <p className="logo-under-text">your best friend</p>
        </Col> 
        <Col className="" lg="2">
          <p>Welcome,<Button variant="link" href="#" target="_blank" rel="noopener noreferrer">Guest</Button></p>
          
        </Col>
        <Col lg="2"><p>Shopping Cart(),<Button variant="link" href="#" target="_blank" rel="noopener noreferrer">$0.00</Button></p></Col>
      </Row>
    </Container>
  );
};

export default Header;