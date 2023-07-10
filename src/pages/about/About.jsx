import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./About.css";
import AboutAccordion from "./AboutAccordion";

const About = () => {
  return (
    <Col xl={10} md={9} sm={12} className="mt-4 m-auto">
      <Container className="m-auto mb-5 p-0 text-center about">
        <hr className="text-black-50" />
        <h4>
          More than <span className="about-span">$26 million</span> raised for
          local bookstores!
        </h4>
        <hr className="text-black-50" />
        <h5 className="fst-italic m-5">
          “Thanks to Bookshop, there is no reason to buy books on Amazon
          anymore.” {"  "}
          <a
            rel="noopener noreferrer"
            href="https://www.insidehook.com/article/bookshop-independent-bookstores-amazon"
            target="_blank"
          >
            - Inside Hook
          </a>
        </h5>
        <div className="d-xl-flex d-inline text-start mb-5">
          <img
            src="images/bookstore.png"
            alt="Bookstore"
            className="about-image m-auto mb-3"
          />
          <div className="mx-4 mt-5">
            <h5 className="about-h4">
              Bookshop.org works to connect readers with independent booksellers
              all over the world.
            </h5>
            <p>
              We believe local bookstores are essential community hubs that
              foster culture, curiosity, and a love of reading, and we're
              committed to helping them thrive.
            </p>
            <p>
              <span className="fw-bold">
                Every purchase on the site financially supports independent
                bookstores.{" "}
              </span>
              Our platform gives independent bookstores tools to compete online
              and financial support to help them maintain their presence in
              local communities.
            </p>
          </div>
        </div>
        <div className="about-div p-3 mb-5 m-auto">
          Since 2020, we've raised more than{" "}
          <span className="about-span-2">$25 million</span> for independent
          bookstores.
        </div>
        <div className="mb-5">
          <h1 className="mb-2 fw-bolder">Our Mission</h1>
          <h4 className="mb-4">(and where our profits go)</h4>
          <div className="d-xl-flex d-inline text-start mt-4">
            <img
              src="images/profit.png"
              alt="Profite"
              className="about-image m-auto mb-3"
            />
            <div className="d-inline mt-5">
              <p className="mx-4">
                Our mission is simple: To help local, independent bookstores
                thrive in the age of ecommerce.
              </p>
              <p className="mx-4">
                <span className="fw-bold">Certified as a B Corp, </span>
                Bookshop.org puts this mission and the public good above
                financial interests, giving over 80% of our profit margin to
                independent bookstores. In 2022, B-Labs announced we were "best
                for the world": in the top 5% of all B-Corps.
              </p>
              <p className="mx-4">
                It is written in our governance documents that we will never
                sell the company to Amazon or any major U.S. retailer.
              </p>
              <p className="mx-4">
                As a Climate Neutral company, we are committed to operating
                sustainably.
              </p>
            </div>
          </div>
        </div>
        <div className="about-image-link-div pt-4 p-2 m-5">
          <div className="d-flex justify-content-around">
            {" "}
            <img
              src="images/about-1.webp"
              alt="About"
              className="about-image-link"
            />{" "}
            <img
              src="images/about-2.webp"
              alt="About"
              className="about-image-link"
            />{" "}
            <img
              src="images/about-3.png"
              alt="About"
              className="about-image-link"
            />
          </div>
          <p className="fw-bold mt-3 p-0 about-image-link-text">
            Bookshop.org has the highest customer service rating of any online
            bookstore in the world on{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.trustpilot.com/review/bookshop.org"
              target="_blank"
            >
              Trustpilot.
            </a>
          </p>
        </div>
        <div className="my-1 mx-3">
          <img
            src="images/history.png"
            alt="History"
            className="mb-3 img-fluid"
          />
          <h2 className="fw-bold fs-1 mb-4 m-auto">Our History</h2>
          <p className="text-start mb-3 m-auto">
            Bookshop.org began as an idea to help support bookstores and their
            communities as more and more people are buying their books online.
            We saw an opportunity to create an alternative to Amazon for
            socially-conscious online shoppers. Amazon sells over 60% of all
            books in the US and is growing. That shift threatens the future of
            bookstores and will hurt readers, authors, and publishers who rely
            on a diverse, healthy ecosystem for books.{" "}
            <span className="fw-bold">
              We had a better idea — give readers the convenience of online
              shopping while supporting independent bookstores at the same time.
            </span>
          </p>
          <p className="text-start mb-3 m-auto">
            We launched in January of 2020, with just 88 bookstore partners and
            a team of four passionate book people.
          </p>
          <p className="text-start mb-3 m-auto">
            As the COVID-19 pandemic surged, our growing platform helped our
            community of independent booksellers survive shutdowns. That spring,
            traffic to Bookshop.org hit 1 million users in a single day. By the
            end of 2020 we had grown to over 1,000 bookstores and distributed
            over ten million dollars in profits. Bookshop.org has since expanded
            internationally, launching in the UK and Spain.
          </p>
          <p className="text-start mb-3 m-auto">
            78% of our customers said they regularly bought books from Amazon
            before they made the switch.
          </p>
        </div>
        <div className="about-image-link-div p-3 my-5">
          <h5>
            “Consider [Bookshop.org] the Rebel Alliance standing up to the
            Amazon Empire.”
          </h5>
          <img src="images/about-logo.png" alt="Logo" className="w-25" />
        </div>

        <div>
          <h2 className="fw-bolder">F.A.Q.</h2>
          <AboutAccordion />
        </div>
      </Container>
    </Col>
  );
};

export default About;
