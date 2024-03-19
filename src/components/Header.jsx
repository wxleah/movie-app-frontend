import { Link } from "react-router-dom"
// import "../styles/Header.css"
import PathConstants from "../routes/pathConstants";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href={PathConstants.FAVORITE}>Movie Reviews</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" variant="underline" >
              <Nav.Link href={PathConstants.SEARCH} eventKey={PathConstants.SEARCH}>Search</Nav.Link>
              <Nav.Link href={PathConstants.FAVORITE} eventKey={PathConstants.FAVORITE}>Favorite</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }