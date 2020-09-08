import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "wouter";
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import useUser from 'hooks/useUser'

const NavBar = () => {
    const { isLogged, logout } = useUser()

    const handleClick = e => {
        e.preventDefault()
        logout()
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link href="/" className="nav-link text-gray">
                        walletApp
                    </Link>

                    <Link href="/contacts" className="nav-link">
                        Contacts
                    </Link>

                </Nav>
                <Nav>
                    {isLogged
                        ? <Link onClick={handleClick} className="nav-link text-gray">Logout</Link>
                        : <><Link href="/login" className="nav-link text-gray">Login</Link></>
                    }
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