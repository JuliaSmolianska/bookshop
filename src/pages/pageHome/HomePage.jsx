import React from "react";
import Col from "react-bootstrap/Col";
import CarouselBest from "./components/CarouselBest";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Col xs={12} className=" d-flex justify-content-end">
      <CarouselBest />
    </Col>
  );
};

export default HomePage;
