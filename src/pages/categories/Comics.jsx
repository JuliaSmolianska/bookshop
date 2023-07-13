import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import comics from "../../data/ComicsData"
import BookCard from "./BookCard";

const Comics = () => {
  function renderBook(_props) {
    return comics.map((eachBook) => {
      return (
        <BookCard {...eachBook} />
      );
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
export default Comics;
