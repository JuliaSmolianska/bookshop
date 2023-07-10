import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bestcellers from "../../data/BestcellersData";
import BookCard from "../categories/BookCard";

const Promotions = ({ eachBook }) => {
  function renderBook(_props) {
    return bestcellers.slice(0, 6).map((eachBook) => {
      return (
        <BookCard
          id={eachBook.id}
          name={eachBook.name}
          image={eachBook.image}
          author={eachBook.author}
          descriptionShort={eachBook.descriptionShort}
          pris={eachBook.pris}
          description={eachBook.description}
          details={eachBook.details}
          aboutTheAuthor={eachBook.aboutTheAuthor}
          reviews1={eachBook.reviews1}
          authorReviews1={eachBook.authorReviews1}
          reviews2={eachBook.reviews2}
          authorReviews2={eachBook.authorReviews2}
          reviews3={eachBook.reviews3}
          authorReviews3={eachBook.authorReviews3}
        />
      );
    });
  }
  return (
    <Col md={9} xl={10} className="m-auto pb-5 pt-5">
      <h1 className="mb-5 mx-5 carousel-best-title">
        Special offers on StoreBooK
      </h1>
      <Row
        className="d-inline-flex justify-content-around overflow-y-auto"
        xs="auto"
      >
        {renderBook()}
      </Row>
    </Col>
  );
};
export default Promotions;
