import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-modal";
import { useState, useContext } from "react";
import { BookContext } from "../../BookContext";
import "./BookCard.css";
import Reviews from "../pageHome/components/Reviews";

const customStyles = {
  content: {
    top: "8%",
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
  review,
}) => {
  const context = useContext(BookContext);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [forceAppData, setForceAppData] = useState(true);

  const handleClick = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function generateBookData() {
    return {
      id,
      name,
      image,
      author,
      pris,
    };
  }

  function addReview(name, message) {
    review.push({ reviewText: message, reviewAuthor: name });
    setForceAppData(!forceAppData);
  }
  return (
    <Col sm="auto" className="col-xxl-4 col-xl-4 col-lg-6 m-auto">
      <Card
        className="card-main pt-3 ps-0 pe-0 d-flex mb-3 m-auto"
        key={id}
        style={{ width: "20rem", maxHeight: "600px" }}
      >
        <Card.Img
          onClick={handleClick}
          variant="auto"
          src={image}
          alt={name}
          style={{ width: "80%" }}
          className="m-auto img-hover"
        />
        <Card.Body
          onClick={handleClick}
          className="text-start card-body overflow-y-auto p-3"
        >
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
          <Button
            variant="link"
            className="buy-button fw-bold"
            onClick={() => {
              context.addToCart(generateBookData());
            }}
          >
            BUY NOW
          </Button>
          <Button variant="link" className="price-button fw-bold">
            ${pris.toFixed(2)}
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
                  className="img-hover"
                />
                <h3 className="mt-4 text-center">Prise: {pris.toFixed(2)}</h3>
                <Button
                  variant="link"
                  className="buy-button fw-bold mt-3 w-100"
                  onClick={() => context.addToCart(generateBookData())}
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
              {review &&
                review.map((eachReview, index) => {
                  return (
                    <p key={index}>
                      {eachReview.reviewText}{" "}
                      <i>
                        <b>{eachReview.reviewAuthor}</b>
                      </i>
                    </p>
                  );
                })}
            </Col>
            <Reviews addReview={addReview} />
          </Col>
        </Modal>
      </Card>
    </Col>
  );
};

export default BookCard;
