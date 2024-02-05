import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Q_Zone from '../Q_Zone/Q_Zone';
import bgImg from '../../../assets/bg.png'
import "./RightNav.css"

const RightNav = () => {
    return (
        <div>
            <div className=''>
                <h4 className='fw-semibold'>Login With</h4>
                <Button style={{ color: 'black' }} className='fw-bold px-4 mb-2' variant="outline-warning"> <FaGoogle className='text-danger' /> Login with Google</Button>
                <Button className='fw-bold px-4' style={{ color: "black" }} variant="outline-primary"><FaGithub className='text-danger' /> Login with Github</Button>
            </div>
            {/* our social media */}
            <div className='mt-4'>
                <h4 className='fw-bold fs-5'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item action variant="danger">
                       <FaFacebook className='text-'/> Facebook
                    </ListGroup.Item>
                    <ListGroup.Item action variant="info">
                       <FaTwitter className='text-primary'/> Twitter
                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning">
                      <FaInstagram className='text-primary'/>  Instagram
                    </ListGroup.Item>
                </ListGroup>
            </div>
            {/* Q-zone images and some crucial text */}
            <Q_Zone/>
            <div className='bg-img text-center py-4 px-2 text-white mt-2'>
                 <h2 className='mb-4'>Create an Amazing Newspaper</h2>
                 <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                 <Button variant='primary'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;