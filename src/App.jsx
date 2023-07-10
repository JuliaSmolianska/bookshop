import Container from "react-bootstrap/Container";
import HomePage from "./pages/pageHome/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/pageHome/components/Header";
import NavMenu from "./pages/pageHome/components/NavMenu";
import Row from "react-bootstrap/Row";
import Subheader from "./pages/pageHome/components/Subheader";
import Cookies from "./pages/pageHome/components/Cookies";
import Footer from "./pages/pageHome/components/Footer";
import CookingWine from "./pages/categories/CookingWine";
import KidsBooks from "./pages/categories/KidsBooks";
import Fantasy from "./pages/categories/Fantasy";
import HistoricalFiction from "./pages/categories/HistoricalFiction";
import Comics from "./pages/categories/Comics";
import Horror from "./pages/categories/Horror";
import Poetry from "./pages/categories/Poetry";
import Novels from "./pages/categories/Novels";
import Thrillers from "./pages/categories/Thrillers";
import Bestcellers from "./pages/categories/Bestsellers";
import Promotions from "./pages/promotions/Promotions";
import About from "./pages/about/About";

import { BookContextProvider } from "./BookContext";
import posthog from "posthog-js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <BookContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Container fluid className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Subheader />} />
          </Routes>
          <Row>
            <NavMenu />
            <Routes>
              <Route exact path="/" element={<Bestcellers />} />

              <Route exact path="/cookingWine" element={<CookingWine />} />
              <Route exact path="/kidsBooks" element={<KidsBooks />} />
              <Route exact path="/fantasy" element={<Fantasy />} />
              <Route
                exact
                path="/historicalFiction"
                element={<HistoricalFiction />}
              />
              <Route exact path="/comics" element={<Comics />} />
              <Route exact path="/horror" element={<Horror />} />
              <Route exact path="/poetry" element={<Poetry />} />
              <Route exact path="/novels" element={<Novels />} />
              <Route exact path="/thrillers" element={<Thrillers />} />
              <Route exact path="/promotions" element={<Promotions />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
          </Row>

          {posthog.has_opted_out_capturing() ||
          posthog.has_opted_in_capturing() ? null : (
            <Cookies />
          )}

          <Footer />
        </Container>
      </BrowserRouter>
    </BookContextProvider>
  );
};

export default App;
