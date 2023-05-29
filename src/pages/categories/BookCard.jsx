import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./BookCard.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "5%",
    left: "20%",
    right: "5%",
    bottom: "5%",
    padding: "5%",
    transition: "500ms",
  },
};

const BookCard = ({
  id,
  name,
  image,
  author,
  descriptionShort,
  pris,
  description,
  details,
  aboutTheAuthor,
  reviews1,
  authorReviews1,
  reviews2,
  authorReviews2,
  reviews3,
  authorReviews3,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Col xs="auto">
      <Card
        className="card-main pt-3 ps-0 pe-0 d-flex mb-3"
        key={id}
        style={{ width: "17rem", maxHeight: "600px" }}
      >
        <Card.Img
          variant="auto"
          src={image}
          alt={name}
          style={{ width: "80%" }}
          className="m-auto img-hover"
        />
        <Card.Body className="text-start  overflow-y-auto p-3">
          <Card.Title className="card-title">
            <span className="title-hover" onClick={handleClick}>
              {name}
            </span>
            <br />
            <span className="card-author fs-6 fst-italic">by {author}</span>
          </Card.Title>
          <Card.Text className="overflow-y-auto">{descriptionShort}</Card.Text>
        </Card.Body>

        <ButtonGroup aria-label="Basic example">
          <Button variant="link" className="buy-button fw-bold">
            BUY NOW
          </Button>
          <Button variant="link" className="price-button fw-bold">
            {pris}
          </Button>
        </ButtonGroup>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal} className="close-button">
            X
          </button>
          <Col md={12} key={id}>
            <Row>
              <Col md={4} className="card-main pt-3 ps-0 pe-0 d-block">
                <Card.Img
                  variant="auto"
                  src={image}
                  alt={name}
                  style={{ height: "300px" }}
                  className="img-hover w-100"
                />
                <h3 className="mt-4 text-center">Prise: {pris}</h3>
                <Button
                  variant="link"
                  className="buy-button fw-bold mt-3 w-100"
                >
                  BUY NOW
                </Button>
              </Col>

              <Col md={8} className="ps-4">
                <h1 className="card-title mb-3">{name}</h1>
                <h6>Author: {author}</h6>
                <p>{descriptionShort}</p>
                <p>{description}</p>
                <h6>Details:</h6>
                <ul>
                  <li>
                    <i>publisher:</i> {details.publisher};
                  </li>
                  <li>
                    <i>publish date:</i> {details.publishDate};
                  </li>
                  <li>
                    <i>pages:</i> {details.pages};
                  </li>
                  <li>
                    <i>dimensions:</i> {details.dimensions};
                  </li>
                  <li>
                    <i>language:</i> {details.language};
                  </li>
                  <li>
                    <i>type cover:</i> {details.type}.
                  </li>
                </ul>
                <h6>About the Author:</h6>
                <p>{aboutTheAuthor}</p>
              </Col>
            </Row>
            <Col>
              <hr />
              <p>
                {reviews1}{" "}
                <i>
                  <b>{authorReviews1}</b>
                </i>
              </p>
              <p>
                {reviews2}{" "}
                <i>
                  <b>{authorReviews2}</b>
                </i>
              </p>
              <p>
                {reviews3}{" "}
                <i>
                  <b>{authorReviews3}</b>
                </i>
              </p>
            </Col>
          </Col>
        </Modal>
      </Card>
    </Col>
  );
};

export default BookCard;
