import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Subheader.css";

const Subheader = () => {
  return (
    <Carousel variant="dark" className="boxCarousel">
      <Carousel.Item>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-md-6">
            <img
              src="images/caruesel1.jpg"
              className="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div className="col-md-6 col-xl-4 d-none d-md-block">
            <h5 className="text-center mb-3">
              I Cook in Color: Bright Flavors from My Kitchen and Around the
              World
            </h5>
            <p>
              Expand your recipe collection with dishes that focus on
              cross-cultural flavors, rainbows of vegetables, gem-toned
              desserts, and spice-forward twists from the author of the
              critically acclaimed cookbook My Two Souths.
            </p>
            <div className="d-flex justify-content-center pt-3">
              <button type="button" className="btn btn-dark rounded-pill ps-4 pe-4">
                Read more
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-md-6">
            <img
              src="images/caruesel2.jpg"
              className="d-block w-75 m-auto"
              alt="..."
            />
          </div>
          <div className="col-md-6 col-xl-4 d-none d-md-block">
            <h5 className="text-center">
              Dear Girl,: A Celebration of Wonderful, Smart, Beautiful You!
            </h5>
            <p>
              The #1 New York Times bestseller that Today show co-anchor Hoda
              Kotb calls "a beautiful, beautiful book." The bestselling author
              of I Wish You More, Amy Krouse Rosenthal, and her daughter Paris
              Rosenthal collaborate to bring you the heartwarming and inspiring
              Dear Girl, Dear Girl, is a love letter written for the special
              girl in your life.
            </p>
            <div className="d-flex justify-content-center pt-3">
              <button type="button" className="btn btn-dark rounded-pill ps-4 pe-4">
                Read more
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-md-6">
            <img src="images/caruesel3.jpg" className="d-block w-75 m-auto" alt="slide1" />
          </div>
          <div className="col-md-6 col-xl-4 d-none d-md-block">
            <h5 className="text-center">
              The Umayyad Mosque of Damascus: Art, Faith and Empire in Early
              Islam
            </h5>
            <p>
              An expansive illustrated history of the historic Umayyad Mosque in
              Damascus. The Umayyad Mosque of Damascus is one of the oldest
              continuously used religious sites in the world. The mosque we see
              today was built in 705 CE by the Umayyad caliph al-Walid on top of
              a fourth-century Christian church that had been erected over a
              temple of Jupiter.
            </p>
            <div className="d-flex justify-content-center pt-3">
              <button type="button" className="btn btn-dark rounded-pill ps-4 pe-4">
                Read more
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Subheader;
