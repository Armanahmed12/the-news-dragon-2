import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = () => {

    // data for rendering
    const newsDataForRendering = useLoaderData();

    return (
        <div>
            {
                newsDataForRendering.map(eachCategory => <Category key={eachCategory._id} newsData={eachCategory}></Category>)
            }
        </div>
    );
};

export default Categories;