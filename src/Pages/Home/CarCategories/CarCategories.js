import React, { useEffect, useState } from 'react';
import CarCategory from './CarCategory';

const CarCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
        
    },[])
    
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-center my-8 font-bold text-4xl'>Car Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    categories.map(data =>
                        <CarCategory key={data._id} data={data} ></CarCategory>
                    )
                }
            </div>
        </div>
    );
};

export default CarCategories;