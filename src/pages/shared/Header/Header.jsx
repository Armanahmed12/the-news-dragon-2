import React from 'react';
import logoImg from '../../../assets/logo.png'
import moment from 'moment-timezone';
import Marquee from "react-fast-marquee";
import { Button } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';

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
                <NavigationBar/>
            </div>
        </div>
    );
};

export default Header;