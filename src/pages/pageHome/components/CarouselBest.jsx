import React from "react";
import Col from "react-bootstrap/Col";
import bestcellers from "../../..//data/BestcellersData";
import BookCardCarousel from "../../categories/BookCardCarousel";
import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselBest.css"

const CarouselBest = ({ eachBook }) => {
  function renderBook(_props) {
    return bestcellers.map((eachBook) => {
      return (
        <BookCardCarousel
          id={eachBook.id}
          name={eachBook.name}
          image={eachBook.image}
          author={eachBook.author}
          descriptionShort={eachBook.descriptionShort}
          pris={eachBook.pris}
          prisSup={eachBook.prisSup}
          description={eachBook.description}
          details={eachBook.details}
          aboutTheAuthor={eachBook.aboutTheAuthor}
          reviews1={eachBook.reviews1}
          authorReviews1={eachBook.authorReviews1}
          reviews2={eachBook.reviews2}
          authorReviews2={eachBook.authorReviews2}
          reviews3={eachBook.reviews3}
          authorReviews3={eachBook.authorReviews3}
          key={eachBook.id}
        />
      );
    });
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },

    miniTablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Col className="pb-5 pt-5">
      <Container>
        <div className="m-auto mb-5 p-0">
          <h1 className="mx-5 mt-5 carousel-best-title">Best Sellers</h1>
          <hr className="carousel-best-line mb-5" />
        </div>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={"mobile"}
          autoPlay={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {renderBook()}
        </Carousel>
      </Container>
    </Col>
  );
};
export default CarouselBest;
