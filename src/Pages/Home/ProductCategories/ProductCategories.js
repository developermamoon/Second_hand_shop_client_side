import React from 'react';
import car1 from '../../../Images/Cars/sedan.jpg';
import car2 from '../../../Images/Cars/suv.jpg';
import car3 from '../../../Images/Cars/supercar.jpg';
import car4 from '../../../Images/Cars/pickup.jpg';
import car5 from '../../../Images/Cars/van.jpg';
import car6 from '../../../Images/Cars/Minibus.jpg';
import ProductCategory from './ProductCategory';

const ProductCategories = () => {

    const productCategoryData = [
        {
            _id: 1,
            category_name: "Sedan",
            color: 'bg-primary',
            image: car1
        },
        {
            _id: 2,
            category_name: "SUV",
            color: 'bg-accent',
            image: car2
        },
        {
            _id: 3,
            category_name: "Microbus",
            color: 'bg-secondary',
            image: car3
        },
        {
            _id: 4,
            category_name: "Pickup",
            color: 'bg-secondary',
            image: car4
        },
        {
            _id: 5,
            category_name: "Van",
            color: 'bg-gradient-to-r from-primary to-secondary',
            image: car5
        },
        {
            _id: 6,
            category_name: "Super Cars",
            color: 'bg-accent',
            image: car6
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