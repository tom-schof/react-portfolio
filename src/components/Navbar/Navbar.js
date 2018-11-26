import React from "react";
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

const NavigationBar = () => (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#brand">Home</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    
        <Nav pullRight>
        <NavItem eventKey={1} href="#">
            Skills
        </NavItem>
        <NavItem eventKey={2} href="#">
            Portfolio
        </NavItem>
        <NavItem eventKey={3} href="#">
            About
        </NavItem>
        <NavItem eventKey={4} href="#">
            Contact
        </NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>

);

export default NavigationBar; 