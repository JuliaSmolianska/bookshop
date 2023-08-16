import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ContactForm from "../pageHome/components/ContactForm";
import Container from "react-bootstrap/Container";
import "./Contact.css";

const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [buttonClick, setButtonClick] = useState(0);

  useEffect(() => {
    if (showContactForm) {
      return;
    }
  }, [showContactForm]);

  const handleClick = () => {
    setShowContactForm(!showContactForm);
    setButtonClick(buttonClick + 1);
  };

  return (
    <Col xl={10} md={9} sm={12} className="mt-4">
      <Container className="m-auto mb-5 p-0 text-center w-75 fs-6">
        {showContactForm && <ContactForm resetParentState={setShowContactForm} />}
        <p>
          Thanks for reaching out to Bookshop. In order to ensure you receive a
          quick reply, please fill out our{" "}
          <span>
            <Button
              variant="link"
              className="contact-page-button fs-5"
              onClick={handleClick}
            >
              Contact Us
            </Button>
          </span>{" "}
          form.
        </p>
        <p className="mb-1">
          For partnerships, promotional opportunities, and advertising
          inquiries, please email us at:
        </p>
        <Button
          variant="link"
          href="mailto:promotions@bookshop.org"
          rel="noopener noreferrer"
          className="contact-page-mail m-0"
        >
          promotions@bookshop.org
        </Button>
        <p>
          Interested in joining our team? Email us at
          <Button
            variant="link"
            href="mailto:promotions@bookshop.org"
            rel="noopener noreferrer"
            className="contact-page-mail"
          >
            jobs@bookshop.org
          </Button>
        </p>
      </Container>
    </Col>
  );
};

export default Contact;
