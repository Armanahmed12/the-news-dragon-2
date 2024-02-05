import React from 'react';
import logoImg from '../../../assets/logo.png'
import moment from 'moment-timezone';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='text-center mt-2'>
            <img src={logoImg} alt="" /><br />
            <small className='text-danger fw-semibold fs-5'>Journalism Without Fear or Favour</small>
            <p>{moment().format('dddd MMM Do YYYY')}</p>
            <div className='bg-dark text-white d-flex p-2 rounded mb-1'>
                <Button variant="primary">Primary</Button>
                <Marquee>
                    React Fast Marquee is a lightweight React component that harnesses the power of CSS animations to create silky smooth marquees.
                </Marquee>

            </div>
            <div className='mb-4'>
                {/* navigation bar */}
                <Navbar bg="primary" className=" rounded" data-bs-theme="dark">
                    <Container className="me-0" style={{width: "60%"}}>
                        <Nav className="me-auto">
                            <Nav.Link className="text-white fw-bold" href="#home">Home</Nav.Link>
                            <Nav.Link className="text-white fw-bold" href="#about">About</Nav.Link>
                            <Nav.Link className="text-white fw-bold" href="#carrer">Carrer</Nav.Link>
                        </Nav>
                       <div>
                         <FaUser className="me-2 text-white fw-bold" />
                         <Button variant="danger">Login</Button>
                       </div>
                    </Container>

                </Navbar>
            </div>
        </div>
    );
};

export default Header;