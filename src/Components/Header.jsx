import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const currentPage = useLocation().pathname;

    return (
    
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="p-0">
          <Container>
        <Navbar.Brand href="#">
          <img
            className="logo"
            src='./src/Assets/images/BCS_Logo_White_nobackground.png'
            alt="Black Cat Solutions Logo"
          />
          <b>Matt Tingley</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" data-bs-target="#responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
            <Nav>
            <Nav.Link key={1} as={Link} to={"/"} className={currentPage === "/" ? "active" : ""}>About Me</Nav.Link>
            <Nav.Link key={2}  as={Link} to={"/portfolio"} className={currentPage === "/portfolio" ? "active" : ""}>Portfolio</Nav.Link>
            <Nav.Link key={3}  as={Link} to={"/contact"} className={currentPage === "/contact" ? "active" : ""}>Contact Me</Nav.Link>
            <Nav.Link key={4}  as={Link} to={"/resume"} className={currentPage === "/resume" ? "active" : ""}>Resume</Nav.Link>
          </Nav>
           </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;