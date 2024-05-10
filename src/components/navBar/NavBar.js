import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from "../../assets/icons/logo1.png";
import "./NavBar.css";

 const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md"
            fixed="top"
             className="animate-navbar nav-theme justify-content-between"
             variant="dark">
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">The Help Company</Nav.Link>
                        <Nav.Link href="#about">Ways we help</Nav.Link>
                        <Nav.Link href="#skills">The Help company in action</Nav.Link>
                        <Nav.Link href="#projects">The future of help</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBar