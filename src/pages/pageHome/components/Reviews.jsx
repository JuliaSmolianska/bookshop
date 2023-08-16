import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useUser } from "@clerk/clerk-react";

const Reviews = (props) => {
  const [message, setMessage] = useState("");
  const addReview = props.addReview;
  const { isSignedIn, user, isLoaded } = useUser();

  const handleClick = () => {
    addReview(user.fullName, message);
    setMessage("");
    console.log(user);
  };

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  return (
    <Form>
      <Form.Group
        className="mb-3"
        controlId="formBasicName"
        id="example-custom-modal-styling-title"
      >
        <p>{user.fullName}</p>
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
      <Button
        className="ms-3"
        variant="danger"
        type="button"
        onClick={handleClick}
      >
        New Review
      </Button>
    </Form>
  );
};
export default Reviews;
