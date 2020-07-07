import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link text-gray">
                        <b>walletApp</b>
                    </Link>

                    <Link to="/contacts" className="nav-link">
                        Contacts
                    </Link>
                </Nav>
            </Navbar>
        </>
    )
}
//? significa entonces
//: significa sino
export default NavBar

if (document.getElementById('navbar')) {
    ReactDOM.render(<NavBar />, document.getElementById('navbar'));
}