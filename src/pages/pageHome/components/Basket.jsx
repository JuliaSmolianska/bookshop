import React, { useState, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import { BookContext } from "../../../BookContext";

const Basket = () => {
  const [showBasket, setShowBasket] = useState(false);

  const context = useContext(BookContext);

  function openModal() {
    setShowBasket(true);
  }

  function closeModal() {
    setShowBasket(false);
  }
  const customStyles = {
    content: {
      maxWidth: "600px",
      overflow: "auto",
      top: "8%",
      left: "auto",
      right: "3%",
      bottom: "5%",
      padding: "3%",
      transition: "500ms",
      zIndex: "5",
    },
  };

  const totalCartAmount = context.state.cart
    .reduce((total, book) => (total = total + book.pris * book.count), 0)
    .toFixed(2);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <Col lg="3" xxl="2">
      <p>
        <i className="bi bi-cart-check ps-2 pe-2 fs-4"></i>
        Shopping Cart ({totalCartCount}),
        <Button variant="link" rel="noopener noreferrer" onClick={openModal}>
          ({totalCartAmount})$
        </Button>
        <Modal
          isOpen={showBasket}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal} className="close-button">
            X
          </button>
          <Col md={12} className="pb-3">
            <Col className="card-main pt-3 ps-0 pe-0">
              {context.state.cart.map((book) => (
                <Row key={book.id}>
                  <Col xs={4}>
                    <img
                      src={book.image}
                      alt={book.name}
                      className="img-fluid mb-4"
                    />
                  </Col>
                  <Col sm={7} className="pt-`1`">
                    <h5>{book.name}</h5>
                    <p>Author: {book.author}</p>
                    <p>Price: {(book.pris).toFixed(2)} $</p>
                    <p>Total: {(book.pris * book.count).toFixed(2)} $</p>

                    <Button
                      onClick={() => context.decrease(book.id)}
                      className="rounded btn btn-light border border-black"
                    >
                      -
                    </Button>
                    <span className="ms-3 me-3 bolt">
                      <b>{book.count}</b>
                    </span>
                    <Button
                      onClick={() => context.increase(book.id)}
                      className="rounded btn btn-light border border-black"
                    >
                      +
                    </Button>
                    <Button
                      className="ms-5 btn btn-secondary"
                      onClick={() => context.removeFromCart(book.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                  <hr className="mt-3" />
                </Row>
              ))}

              <h4 className="text-primary pt-3 fs-5 text-end">
                Total: {totalCartAmount} $
              </h4>
              <Col className="text-end mt-4">
                <Button className="btn btn-primary">Complete your order</Button>
              </Col>
            </Col>
          </Col>
        </Modal>
      </p>
    </Col>
  );
};

export default Basket;
