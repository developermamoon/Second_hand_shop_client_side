import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryWiseCar from './CategoryWiseCar';

const CategoryWiseCars = () => {

    const categoryCarsData = useLoaderData();
   
    return (
        <div>
            <h1>{}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-y-10 my-10 justify-items-center'>
                {categoryCarsData.map(data => <CategoryWiseCar data={data} key={data._id}></CategoryWiseCar>)}
            </div>
        </div>
    );
};

export default CategoryWiseCars;