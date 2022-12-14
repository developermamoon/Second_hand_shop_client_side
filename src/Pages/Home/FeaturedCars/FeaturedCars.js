import React from 'react';

const FeaturedCars = () => {
    return (
        <div className='container mx-auto my-10'>
            
            <h1 className='text-3xl font-bold  text-center my-10'>Featured Cars</h1>

            <div className="flex gap-5 justify-between">
                <div className="card w-96 bg-white shadow-xl">
                    <figure className="">
                        <img src="https://i.ibb.co/HnjjZ2b/SUV1.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title">Range Rover 2020</h2>
                        <p>Brand new car. A few Days used. Want to buy the new model that is why selling it.</p>

                    </div>
                </div>


                <div className="card w-96 bg-white shadow-xl">
                    <figure className="">
                        <img src="https://i.ibb.co/S5K2YWt/suv2.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title">Hyundai CREATA</h2>
                        <p>Brand new car. A few Days used. Want to buy the new model that is why selling it.</p>

                    </div>
                </div>


                <div className="card w-96 bg-white shadow-xl">
                    <figure className="">
                        <img src="https://i.ibb.co/GM5rh8Z/pickup2.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center text-black">
                        <h2 className="card-title">Toyota fs-20</h2>
                        <p>Brand new car. A few Days used. Want to buy the new model that is why selling it.</p>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default FeaturedCars;