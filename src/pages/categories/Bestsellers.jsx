import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bestcellers from "../../data/BestcellersData";
import BookCard from "./BookCard";
import { addReviewsToData } from "../../data/indexData";

const Bestcellers = () => {
  function renderBook(_props) {
    addReviewsToData(bestcellers);
    return bestcellers.slice(0, 6).map((eachBook) => {
      return (
        // <BookCard
        //   id={eachBook.id}
        //   name={eachBook.name}
        //   image={eachBook.image}
        //   author={eachBook.author}
        //   descriptionShort={eachBook.descriptionShort}
        //   pris={eachBook.pris}
        //   description={eachBook.description}
        //   details={eachBook.details}
        //   aboutTheAuthor={eachBook.aboutTheAuthor}
        //   reviews1={eachBook.reviews1}
        //   authorReviews1={eachBook.authorReviews1}
        //   reviews2={eachBook.reviews2}
        //   authorReviews2={eachBook.authorReviews2}
        //   reviews3={eachBook.reviews3}
        //   authorReviews3={eachBook.authorReviews3}
        // />
        <BookCard {...eachBook} key={eachBook.id} /> // alternative to the above approach ^
      );
    });
  }
  return (
    <Col md={9} xl={10} className="m-auto pb-5 pt-5">
      <Row
        className="d-inline-flex justify-content-around overflow-y-auto"
        xs="auto"
      >
        {renderBook()}
      </Row>
    </Col>
  );
};
export default Bestcellers;
