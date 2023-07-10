import React, { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import { BookContext } from "../../BookContext";
import "../pageHome/components/CarouselBest.css";

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

export default function BookCardCarousel({
  id,
  name,
  image,
  author,
  descriptionShort,
  pris,
  prisSup,
  description,
  details,
  aboutTheAuthor,
  reviews1,
  authorReviews1,
  reviews2,
  authorReviews2,
  reviews3,
  authorReviews3,
}) {
  const context = useContext(BookContext);

  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = () => {
    setIsOpen(true);
  };

  function generateBookData() {
    return {
      id,
      name,
      image,
      author,
      pris,
    };
  }

  const ModalCard = () => {
    return (
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
              <h3 className="mt-4 text-center">Prise: ${pris.toFixed(2)}</h3>
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
          </Col>
        </Col>
      </Modal>
    );
  };

  return (
    <div className="mb-4">
      <div className="carousel-best-container" key={id}>
        <img
          src={image}
          alt={name}
          className="carousel-best-img m-auto d-flex justify-content-between text-center"
          onClick={handleClick}
        />
        <p
          className="carousel-best-pris"
          onClick={() => context.addToCart(generateBookData())}
        >
          ${pris}
          <sup className="carousel-best-pris-sup m-1">{prisSup}</sup>
        </p>
      </div>
      <div className="m-auto text-center" key={id}>
        <h5 className="carousel-best-author mx-4 text-decoration-none">
          {name}
        </h5>
        <h5 className="card-author fs-6 fst-italic text-decoration-none">
          by {author}
        </h5>
      </div>

      {ModalCard()}
    </div>
  );
}
