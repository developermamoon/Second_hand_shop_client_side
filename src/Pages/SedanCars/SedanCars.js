import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SedanCar from './SedanCar';

const SedanCars = () => {

    const sedanCarsData = useLoaderData();
   
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-10 justify-items-center'>
                {sedanCarsData.map(data => <SedanCar data={data} key={data._id}></SedanCar>)}
            </div>
        </div>
    );
};

export default SedanCars;