import React from 'react';

const SedanCar = ({data}) => {
    const { _id, model_name, img, location, resale_price, original_price, years_of_use, posting_time, Seller_name, description } = data;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt={img} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Model Name: {model_name}</h2>
                    <p>Seller's Name: {Seller_name}</p>
                    <p>Location: {location}</p>
                    <p>Years of Used: {years_of_use}</p>
                    <p>Resale Price: {resale_price}</p>
                    <p>Original Price: {original_price}</p>
                    <p>Posting Time: {posting_time}</p>
                    <p>Description: {description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SedanCar;