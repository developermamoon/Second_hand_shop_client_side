import React from 'react';

const FeaturedCars = () => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-3xl font-bold  text-center my-10'>Featured Cars</h1>
            <div className="card w-96 bg-white shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCars;