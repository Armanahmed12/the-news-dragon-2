import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = () => {
    const location = useLocation();
    // data loading
    const [allCategories, setAllCategories] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:3000/news`)
            .then(res => res.json())
            .then(data => {

                setAllCategories(data);
                console.log('data', data);

            })
            .catch(error => console.log(error))

    }, []);
    console.log(allCategories);
    // load data based on categories  
    let haveCategoryNum = location.pathname.match(/(\d+)/);
    let filteredCategories;
    

    if (haveCategoryNum && haveCategoryNum[0] > 0) {
        filteredCategories = "";
       
        let matchedNewsCategories = allCategories?.filter(eachCategory => eachCategory.category_id == haveCategoryNum[0]);
  
         console.log(matchedNewsCategories);
         filteredCategories = '';
        filteredCategories = matchedNewsCategories;

    };

    // those(data) categories will be renderd  
    const categoriesOfNews = filteredCategories ? filteredCategories : allCategories;
    console.log(categoriesOfNews);

    return (
        <div>
            {
                categoriesOfNews.map(eachCategory => <Category key={eachCategory._id} newsData={eachCategory}></Category>)
            }
        </div>
    );
};

export default Categories;