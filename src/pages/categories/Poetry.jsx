import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import poetry from "../../data/PoetryData";
import BookCard from "./BookCard";
import { addReviewsToData } from "../../data/indexData";

const Poetry = () => {
  function renderBook(_props) {
    addReviewsToData(poetry);
    return poetry.map((eachBook) => {
      return <BookCard {...eachBook} key={eachBook.id} />;
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
export default Poetry;
