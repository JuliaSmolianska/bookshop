import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import thrillers from "../../data/ThrillersData";
import BookCard from "./BookCard";

const Thrillers = () => {
  function renderBook(_props) {
    return thrillers.map((eachBook) => {
      return <BookCard {...eachBook} />;
    });
  }
  return (
    <Col md={9} xl={10} className="m-auto pb-5">
      <Row
        className="d-inline-flex justify-content-around overflow-y-auto"
        xs="auto"
      >
        {renderBook()}
      </Row>
    </Col>
  );
};
export default Thrillers;
