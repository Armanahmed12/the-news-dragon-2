import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();

    console.log(news);
    const {title, image_url, details, category_id} = news;


    return (
        <div>
            <Card className='p-4 pb-2'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {details}
                    </Card.Text>
                     <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft className='me-2'/>All news in this category </Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;