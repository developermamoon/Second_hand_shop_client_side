import React from 'react';
import { Link } from 'react-router-dom';

const CarCategory = ({data}) => {
    const { _id, category_name, category_id, color }  = data;
    return (
        <div>
            <Link to={`/category/${category_id}`} className={`card bg-gradient-to-r from-primary to-secondary  h-full p-6 text-white md:card-side shadow-xl `}>

                <div className="card-body">
                    <p className="text-3xl font-bold">{category_name}</p>
                </div>
            </Link>
        </div>
    );
};

export default CarCategory;