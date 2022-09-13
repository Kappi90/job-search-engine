import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
      <Link to='/'>
        <Navbar.Brand>JobSearch</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Link
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
            to='/'
          >
            Home
          </Link>
          <Link
            className={
              "nav-link" +
              (location.pathname === "/favourites" ? " active" : "")
            }
            to='/favourites'
          >
            Favourites
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
