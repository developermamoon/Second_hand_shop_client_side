import React, { useEffect, useState } from 'react';
import ProductCategory from './ProductCategory';

const ProductCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data));
        
    },[])
    
    return (
        <div className='container mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    categories.map(data =>
                        <ProductCategory key={data._id} data={data}></ProductCategory>
                    )
                }
            </div>
        </div>
    );
};

export default ProductCategories;