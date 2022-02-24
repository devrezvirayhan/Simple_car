import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Genius Car</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ml-5">
                        <Nav.Link as={Link} style={{ color: 'white' }} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} style={{ color: 'white' }} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} style={{ color: 'white' }} to="/home#experts">Experts</Nav.Link>
                                <Nav.Link as={Link} style={{ color: 'white' }} to="/login">Login</Nav.Link> :
                        <Navbar.Text>
                            Signed in as: <a href="#login"> Name Login</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;