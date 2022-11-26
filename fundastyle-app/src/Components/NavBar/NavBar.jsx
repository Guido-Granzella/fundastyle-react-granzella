import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../Cart/CartWidget';
import "./NavBar.css"

function CollapsibleExample() {
    return (
        <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <span><img width={50} src='https://e7.pngegg.com/pngimages/306/792/png-clipart-car-mobile-phones-magnetism-mobile-phone-accessories-telephone-case-corporation-text-computer.png'/></span>
            <Navbar.Brand href="#home">FundaStyle</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#elegi">| Elegí |</Nav.Link>
                <Nav.Link href="#crea">| Creá |</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="#shop">
                    <CartWidget className="carrito"/>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }
    
    export default CollapsibleExample;


