import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [order, setOrder] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [showContactForm, setShowContactForm] = useState(true);
  const [buttonClick, setButtonClick] = useState(0);

  const handleClick = () => {
    setShowContactForm(!showContactForm);
    setButtonClick(buttonClick + 1);
  };

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  function handleOrderChange(event) {
    setOrder(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowContactForm(false);
    //console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    //console.log('File:', file);
  }
  return (
    <div>
      {showContactForm && (
        <Modal
          show={showContactForm}
          onHide={handleClick}
          className="modal-lg m-auto"
        >
          <Col className="d-flex justify-content-evenly">
            <Form
              className="ps-5 pe-5 pt-3 pb-3 col-12 border border-dark-subtle rounded bg-body-tertiary"
              onSubmit={handleSubmit}
            >
              <h1>Submit a ticket</h1>
              <Form.Group
                className="mb-3"
                controlId="formBasicName"
                id="example-custom-modal-styling-title"
              >
                <Form.Label className="mb-0">
                  Full name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  maxlength="25"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-0">
                  Email address <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label className="mb-0">
                  Subject <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter subject"
                  value={subject}
                  onChange={handleSubjectChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicOrder">
                <Form.Label className="mb-0">Order Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your order number"
                  minxlength="6"
                  maxlength="6"
                  value={order}
                  onChange={handleOrderChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label className="mb-0">Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicFile">
                <Form.Label className="text-primary mb-0">
                  + Attach a file
                </Form.Label>
                <Form.Control
                  value={file}
                  type="file"
                  onChange={handleFileChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button
                className="ms-3"
                variant="danger"
                type="button"
                onClick={handleClick}
              >
                Cancel
              </Button>
            </Form>
          </Col>
        </Modal>
      )}
    </div>
  );
};

export default ContactForm;
