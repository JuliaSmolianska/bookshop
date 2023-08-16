import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const SocialMedia = () => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button
        variant="link"
        href="https://twitter.com/bookshop_org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-twitter media-links fs-3 text-white"></i>
      </Button>
      <Button
        variant="link"
        href="https://www.facebook.com/bookshop.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-facebook media-links fs-3 text-white"></i>
      </Button>
      <Button
        variant="link"
        href="https://www.instagram.com/bookshop_org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-instagram media-links fs-3 text-white"></i>
      </Button>
    </ButtonGroup>
  );
};

export default SocialMedia;
