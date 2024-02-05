import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {

        fetch('http://localhost:3000/categories')
            .then((res) => res.json())
            .then(data => setCategories(data))
            .catch(error => {
                console.log(error);
            });

    }, []);

    return (
        <div>
            <h2 className='fw-bold fs-5'>All Caterogy</h2>
            <h3 className='bg-danger fs-5 text-white p-3 text-center rounded'>All Caterogy</h3>
            <ul className="list-unstyled lh-lg">
                {
                  categories.map(categorie => <li  key={categorie.id} className='ms-5'><Link to={`/category/${categorie.id}`} className='text-decoration-none text-dark fw-semibold'>{categorie.name}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default LeftNav;