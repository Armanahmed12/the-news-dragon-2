import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import firstImg from '../../../assets/1.png';
import secondImg from '../../../assets/2.png';
import thirdImg from '../../../assets/3.png';
import { FaCalendarAlt } from 'react-icons/fa';
import moment from 'moment';

const EditorInsight = ({smallSize,mediumSize,lgSize}) => {
    return (
        <div>
            <h5 className='fw-bold my-3'>Editors Insight</h5>
            <div>
                <Row xs={smallSize} md={mediumSize} lg={lgSize} className="g-4">
                    <Col className=''>
                        <Card className='border-0'>
                            <Card.Header className="p-2 bg-white border-0">
                                <Card.Img variant="top" src={firstImg} />
                            </Card.Header>
                            <Card.Body className='pt-1'>
                                <Card.Title className='fw-semibold '>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <div className='d-flex align-items-center gap-2'>
                                    <small className='fw-bold text-center'> <FaCalendarAlt className='w-full h-full' /></small> <span>{moment().format("MMM Do YYYY")}</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0'>
                            <Card.Header className="p-2 bg-white border-0">
                                <Card.Img variant="top" src={secondImg} />
                            </Card.Header>
                            <Card.Body className='pt-1'>
                                <Card.Title className='fw-semibold '>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <div className='d-flex align-items-center gap-2'>
                                    <small className='fw-bold text-center'> <FaCalendarAlt className='w-full h-full' /></small> <span>{moment().format("MMM Do YYYY")}</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0'>
                            <Card.Header className="p-2 bg-white border-0">
                                <Card.Img variant="top" src={thirdImg} />
                            </Card.Header>
                            <Card.Body className='pt-1'>
                                <Card.Title className='fw-semibold '>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <div className='d-flex align-items-center gap-2'>
                                    <small className='fw-bold text-center'> <FaCalendarAlt className='w-full h-full' /></small> <span>{moment().format("MMM Do YYYY")}</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default EditorInsight;