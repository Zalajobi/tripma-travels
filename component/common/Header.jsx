import React from "react";
import {Container, Image, Nav, Navbar} from "react-bootstrap";

const Header = (props) => {
    return (
        <React.Fragment>
            <header id="header">
                <Container className="nav-container">
                    <Navbar bg="white" expand="lg" fixed="top">
                        <Container>
                            <Navbar.Brand className="brand-name d-flex align-items-center" href="#home">Tripma</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="#" className="mr-1">flights</Nav.Link>
                                    <Nav.Link href="#" className="mx-1">hotels</Nav.Link>
                                    <Nav.Link href="#" className="mx-1">packages</Nav.Link>
                                    <a className="btn btn-trans mx-1">Sign in</a>
                                    <a className="btn btn-filled ml-1">Sign up</a>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </header>
        </React.Fragment>
    )
}

export default Header;