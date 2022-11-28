import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategory = ({data}) => {
    const {category_name, color}  = data;
    return (
        <div>
            <Link className={`card h-full p-6 text-white md:card-side shadow-xl ${color}`}>

                <div className="card-body">
                    <p className="text-3xl font-bold">{category_name}</p>
                    {/* <p>{description}</p> */}
                </div>
            </Link>
        </div>
    );
};

export default ProductCategory;