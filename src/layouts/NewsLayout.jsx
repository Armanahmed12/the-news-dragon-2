import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import EditorInsight from '../pages/NewsDetails/EditorsInsight/EditorInsight';

const NewsLayout = () => {
    return (
        <Container>
            <Header />
            <div className=''>
                <Row>
                    <Col lg={9}>
                        <h2 className='fw-bold fs-5'>Dragon News Details</h2>

                        <Outlet />
                         <EditorInsight smallSize={1} mediumSize={2} lgSize={3}/>
                    </Col>
                    <Col lg={3} className="">
                        <RightNav />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default NewsLayout;