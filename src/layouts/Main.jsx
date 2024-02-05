import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/shared/LeftNav/LeftNav';
import RightNav from '../pages/shared/RightNav/RightNav';
import Categories from '../pages/Home/Categories/Categories';

const Main = () => {

    return (
        <Container>
            <Header />
            <div className=''>
                <Row>
                    <Col lg={3} className="">
                        <LeftNav />
                    </Col>
                    <Col lg={6}>
                       <h2 className='fw-bold fs-6 '>Dragon News Home</h2>
                        
                           <Categories></Categories>

                    </Col>
                    <Col lg={3} className="">
                        <RightNav />
                    </Col>
                </Row>
            </div>
            <Footer />
        </Container>
    );
};

export default Main;