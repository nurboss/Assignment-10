import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (

        <>
            <Navbar className="bgcolor" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand>drugstore.com</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="link" as={Link} to="/medicine">Medicine</Nav.Link>
                    <Nav.Link className="link" as={Link} to="/aboutus">About Us</Nav.Link>
                    {user?.email ?
                        <button onClick={logOut} className="bttn me-2">LogOut</button> :
                        <Nav.Link className="link" as={Link} to="/login">Login</Nav.Link>}
                {user.email &&
                    <Navbar.Text>
                    Signed in as: <a className="link" href="#login">{user?.displayName}</a>
                </Navbar.Text>}
                </Navbar.Collapse>
                </Container>
            </Navbar>
  

 
            </>



        
        // <div className="header">
        //     <div className="logo">
        //         <h2>drugstor.com</h2>
        //     </div>
        //     <div className="d-flex justify-content-between align-self-center">
        //         <div className="link">
        //             <NavLink to="/home">Home</NavLink>
        //             <NavLink to="/medicine">Medicine</NavLink>
        //             <NavLink to="/aboutus">About Us</NavLink>
        //             {user.email ?
        //                 <button onClick={logOut} className="bttn me-2">LogOut</button> :
        //                 <NavLink to="/login">Login</NavLink>
        //                 }
        //         </div>
        //         { user.email &&
        //             <div>
        //             <h5 className="fw-bold mt-1 color">Signed in as: {user.displayName} </h5>
        //         </div>}
        //     </div>
        // </div>
    );
};

export default Header;