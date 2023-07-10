import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Footer.css";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";
import Subscribe from "./Subscribe";

const Footer = ({ isOpen }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleClick = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <Col xs={12}>
      {showContactForm && <ContactForm />}
      <Row className="footerBox justify-content-evenly p-2">
        <Col sm={6} lg={4}>
          <h3 className="footerTitle p-2">Contacts</h3>
          <p>
            Thanks for reaching out to StoreBooK. In order to ensure you receive
            a quick reply, please fill out our{" "}
            <span>
              <Button className="btnContactUs p-0" onClick={handleClick}>
                Contact Us
              </Button>
            </span>{" "}
            form.
          </p>
          <h1>Follow Us</h1>
          <SocialMedia />
        </Col>
        <Col sm={6} lg={4} className="">
          <h3 className="footerTitle p-2">Store</h3>
          <div className="row">
            <LinkContainer to="/">
              <Button
                variant="link"
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink p-2"
              >
                Home
              </Button>
            </LinkContainer>
            <LinkContainer to="/promotions">
              <Button
                variant="link"
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink p-2"
              >
                Special offers
              </Button>
            </LinkContainer>
            <LinkContainer to="/">
              <Button
                variant="link"
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink p-2"
              >
                Login
              </Button>
            </LinkContainer>

            <LinkContainer to="/about">
              <Button
                variant="link"
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink p-2"
              >
                About Us
              </Button>
            </LinkContainer>
          </div>
        </Col>
        <Col sm={6} lg={4} className="">
          <h3 className="footerTitle p-2">Newsletter</h3>
          <Subscribe />
        </Col>
      </Row>
      <Row className="footerBottom p-3 text-center">
        <h6>
          For partnerships, promotional opportunities, and advertising
          inquiries, please email us at: promotions@storebook.com
        </h6>
      </Row>
    </Col>
  );
};

export default Footer;
