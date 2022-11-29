import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCar from './CategoryCar';

const CategoryCars = () => {

    const categoryCarsData = useLoaderData();
   
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-10 justify-items-center'>
                {categoryCarsData.map(data => <CategoryCar data={data} key={data._id}></CategoryCar>)}
            </div>
        </div>
    );
};

export default CategoryCars;