import moment from 'moment';
import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const Category = ({ newsData }) => {
   
    const { _id, author, title, image_url, details, rating, total_view } = newsData;

    // this function will make your rating number perfect.
    const makePerfectRatingNum = (num) =>{
        let ratingNumber = num;
        const isInteger = Number.isInteger(ratingNumber);
        
        if(isInteger){

             return ratingNumber;

        }
        // rating number as string
        const ratingNumStirng = ratingNumber.toString();
         const ratingNumArrayWithDecimal =  ratingNumStirng.split(".");
        //  if the rating decimal less than .5 than we will make it to .5, Or we will make it to the nearest integer like 2, 3 Or 5
        const ratingDecimalNum = "." + Number(ratingNumArrayWithDecimal[1]);
        let modefiedDecimalInteger;
        if(ratingDecimalNum <= .5){
             modefiedDecimalInteger = .5;
        }else{
            modefiedDecimalInteger = 1;
        }
        // finally the selected rating with modefied decimal is being sent
        const upgradingRatingNum = Number(ratingNumArrayWithDecimal[0]) + modefiedDecimalInteger;
       return(upgradingRatingNum);
        
    }
    const actualRatingNum = makePerfectRatingNum(rating.number);


    // reducing details paragraph
    let shortenDetails;
    if (details.length > 300) {

        shortenDetails = details.slice(0, 300) + "...";
    }
    else {

        shortenDetails = details;
    }

    return (
        <div className='card mb-3'>
            <div className='card-header d-flex justify-content-between align-items-center px-2 bg-secondary-subtle'>
                <div className='d-flex gap-2 align-items-center'>
                    <img className='rounded-circle' style={{ width: '40px', height: '40px' }} src={author.img} alt="" />
                    <div>
                        <p className='fw-bold m-0'>{author.name}</p>
                        <small>{moment().format('YYYY-MM-DD')}</small>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='pe-2 fs-5' />
                    <FaShareAlt />
                </div>
            </div>
            <div className='card-body'>
                <h2 id='idd' className='fw-bold fs-5'>{title}</h2>
                <img className='img-fluid' src={image_url} alt="" />
                <div className='mt-2'>{
                    details.length > 300 ? <div>{shortenDetails}
                        <Link to={`/newsDetails/${_id}`}><button className='bg-white border-0 fw-bold fs-6 text-danger text-decoration-underline'>Read More</button></Link>
                    </div> : ""
                }</div>
            </div>
            {/* footer */}
            <div>
                <hr className='mb-0'/>
                <div className='d-flex justify-content-between align-items-center py-3 px-2'>
                    <div>
                      <Rating style={{ maxWidth: 150, color:'green'}} value={rating.number} readOnly/>
                         <span className='ms-2'>{actualRatingNum}</span>
                    </div>
                    <div>
                        <FaEye />
                         <span className='ms-2'>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;