import React from 'react';
import { Link } from 'react-router-dom';

const CarCategory = ({data}) => {
    const { _id, category_name, category_id, color }  = data;
    return (
        <div>
            <Link to={`/category/${category_id}`} className={`card h-full p-6 text-white md:card-side shadow-xl ${color}`}>

                <div className="card-body">
                    <p className="text-3xl font-bold">{category_name}</p>
                </div>
            </Link>
        </div>
    );
};

export default CarCategory;