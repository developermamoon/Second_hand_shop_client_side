import React from 'react';
import ProductCategory from './ProductCategory';

const ProductCategories = () => {

    const productCategoryData = [
        {
            _id: 1,
            category_name: "Sedan",
            color: 'bg-primary'
        },
        {
            _id: 2,
            category_name: "SUV",
            color: 'bg-accent'
        },
        {
            _id: 3,
            category_name: "Microbus",
            color: 'bg-secondary'
        },
        {
            _id: 4,
            category_name: "Pickup",
            color: 'bg-secondary'
        },
        {
            _id: 5,
            category_name: "Van",
            color: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            _id: 6,
            category_name: "Super Cars",
            color: 'bg-accent'
        },
    ]
    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    productCategoryData.map(data =>
                        <ProductCategory key={data._id} data={data}></ProductCategory>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCategories;