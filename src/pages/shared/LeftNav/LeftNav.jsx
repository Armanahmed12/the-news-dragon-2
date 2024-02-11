import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorInsight from '../../NewsDetails/EditorsInsight/EditorInsight';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // http://localhost:3000
        fetch("https://the-news-dragon-server-2-f6w71tkyc-md-arman-ahmeds-projects.vercel.app/categories")
            .then((res) => res.json())
            .then(data => setCategories(data))
            .catch(error => {
                console.log(error.message);
            });

    }, []);

    return (
        <div>
            <div>
                <h2 className='fw-bold fs-5'>All Caterogy</h2>
                <h3 className='bg-danger fs-5 text-white p-3 text-center rounded'>All Caterogy</h3>
                <ul className="list-unstyled lh-lg">
                    {
                        categories.map(categorie => <li key={categorie.id} className='ms-5'><Link to={`/category/${categorie.id}`} className='text-decoration-none text-dark fw-semibold'>{categorie.name}</Link></li>)
                    }
                </ul>
            </div>
            <div>
                <EditorInsight smallSize={1} mediumSize={1} lgSize={1}/>
            </div>
        </div>
    );
};

export default LeftNav;