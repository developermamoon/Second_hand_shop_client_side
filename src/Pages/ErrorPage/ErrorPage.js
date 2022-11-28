import React from 'react';
import image from '../../Images/404 banners.jpg'

const ErrorPage = () => {
    return (
        <div className='flex justify-center my-20'>
            <img src={image} alt="" />
        </div>
    );
};

export default ErrorPage;