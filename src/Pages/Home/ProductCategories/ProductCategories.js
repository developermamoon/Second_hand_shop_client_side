import React from 'react';
import car1 from '../../../Images/privateCar2.jpg';
import ProductCategory from './ProductCategory';

const ProductCategories = () => {

    const productCategoryData = [
        {
            _id: 1,
            category_name: "Private Car",
            color: 'bg-primary',
            // image: car1
        },
        {
            _id: 2,
            category_name: "Private Car",
            color: 'bg-accent',
            // image: car1
        },
        {
            _id: 3,
            category_name: "Private Car",
            color: 'bg-secondary',
            // image: car1
        },
        {
            _id: 4,
            category_name: "Private Car",
            color: 'bg-secondary',
            // image: car1
        },
        {
            _id: 5,
            category_name: "Private Car",
            color: 'bg-gradient-to-r from-primary to-secondary',
            // image: car1
        },
        {
            _id: 6,
            category_name: "Private Car",
            color: 'bg-accent',
            // image: car1
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