import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import cooking from "../../data/CookingWineData"
import BookCard from "./BookCard";
import {addReviewsToData} from "../../data/indexData";

const CookingWine = () => {
  function renderBook(_props) {
    addReviewsToData(cooking);
    return cooking.map((eachBook) => {
      return (
        <BookCard {...eachBook} key={eachBook.id} />
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

export default CookingWine;

// option 2 (instead of the above lines 31-50):
// export default createBookPage(cooking);
