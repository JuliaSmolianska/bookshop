import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavMenu.css";
import { NavLink } from "react-router-dom";

function NavMenu() {
  const [showDiv, setShowDiv] = useState(false);
  const [buttonClick, setButtonClick] = useState(0);
  const expand = "md";

  useEffect(() => {
    if (showDiv) {
      return;
    }
  }, [buttonClick]);

  const handleClick = () => {
    setShowDiv(!showDiv);
    setButtonClick(buttonClick + 1);
  };

  return (
    <Col xl={2} md={3}>
      <Navbar key={expand} expand={expand}>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          className="toggle"
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Col className="pt-3">
              <ul className="vertical-menu">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <p class="mb-0" onClick={handleClick}>
                    Categories <i class="bi bi-chevron-down"></i>
                  </p>
                  {showDiv && (
                    <ul className="submenu" style={{ display: "block" }}>
                      <li>
                        <NavLink to="/cookingWine">Cooking&Wine</NavLink>
                      </li>
                      <li>
                        <NavLink to="/kidsBooks">Kids books</NavLink>
                      </li>
                      <li>
                        <NavLink to="/fantasy">Fantasy</NavLink>
                      </li>
                      <li>
                        <NavLink to="/historicalFiction">
                          Historical fiction
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/comics">Comics</NavLink>
                      </li>
                      <li>
                        <NavLink to="/horror">Horror</NavLink>
                      </li>
                      <li>
                        <NavLink to="/poetry">Poetry</NavLink>
                      </li>
                      <li>
                        <NavLink to="/novels">Novels</NavLink>
                      </li>
                      <li>
                        <NavLink to="/thrillers">Thrillers&Crime</NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink to="/promotions">Promotions</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contacts</NavLink>
                </li>
              </ul>
            </Col>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </Col>
  );
}
export default NavMenu;
