import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUser } from 'react-icons/fa';

const NavigationBar = () => {
    
    const {user,logOutAUser} = useContext(AuthContext);
        console.log(user);
    const handleLogOutAUser = () =>{

        logOutAUser();
    }   
    return (
        <Navbar bg="primary" className="rounded mt-3 mx-4" data-bs-theme="dark">
            <Container className="me-0" style={{ width: "60%" }}>
                <Nav className="me-auto">
                    <Nav.Link className="text-white fw-bold" href="/">Home</Nav.Link>
                    <Nav.Link className="text-white fw-bold" href="#about">About</Nav.Link>
                    <Nav.Link className="text-white fw-bold" href="#carrer">Carrer</Nav.Link>
                </Nav>
                <div>
                    {
                        user && <FaUser className="me-2 text-white fw-bold" />
                    }
                    {
                        user ? <Button variant="danger" onClick={handleLogOutAUser}>LogOut</Button> :
                            <Link to={'/logIn'}><Button variant="danger">Login</Button></Link>
                    }
                </div>
            </Container>

        </Navbar>
    );
};

export default NavigationBar;