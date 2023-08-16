import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Basket from "./Basket";
import Search from "./Search";
import {
  SignInButton,
  SignedIn,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";

const Header = () => {
  const { userId, sessionId, getToken, isLoaded, isSignedIn, signOut } =
    useAuth();
  if (isLoaded) {
    console.log(userId);
  }
  return (
    <Container className="header mb-4">
      <Row md="auto">
        <Search />
        <Col lg="3" xxl="2" className="login-button">
          {!isSignedIn ? <SignInButton /> : <UserButton />}
        </Col>
        <Basket />
      </Row>
      <div>
        <h1 className="logo text-center text-sm-start">StoreBooK</h1>
        <p className="logo-under-text">your best friend</p>
      </div>
    </Container>
  );
};

export default Header;
