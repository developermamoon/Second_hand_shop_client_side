import React from 'react';

const CategoryWiseCar = ({ data, setBookingData }) => {
    const { _id, model_name, img, location, resale_price, original_price, years_of_use, posting_time, Seller_name, description } = data;
    
    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure><img className='' src={img} alt={img} /></figure>
                <div className="card-body bg-white text-black rounded-b-2xl">
                    <h2 className="card-title"><b>Model Name:</b> {model_name}</h2>
                    <p><b>Seller's Name:</b> {Seller_name}</p>
                    <p><b>Location:</b> {location}</p>
                    <p><b>Years of Used:</b> {years_of_use}</p>
                    <p><b>Resale Price:</b> {resale_price}</p>
                    <p><b>Original Price:</b> {original_price}</p>
                    <p><b>Posting Time:</b> {posting_time}</p>
                    <p className='text-justify'><b>Description: <br /></b> {description}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Book Now</button> */}
                        <label htmlFor="my-modal-6" className="btn btn-primary" onClick={()=>{setBookingData(data)}}>Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryWiseCar;