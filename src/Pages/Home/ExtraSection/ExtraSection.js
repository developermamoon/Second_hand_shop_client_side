import React from 'react';
import { Link } from 'react-router-dom';

const ExtraSection = () => {
    return (
        <div className='container mx-auto mb-8'>
            <div className="card lg:card-side bg-white shadow-xl">
                <figure className='w-1/2'><img src="https://i.ibb.co/HnjjZ2b/SUV1.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black text-4xl font-bold">Buy your dream car</h2>
                    <p className='text-primary font-bold text-xl'>Go to categories to explore your dream car.</p>
                    <div className="card-actions justify-end">
                        <Link to='/categories'><button className="btn btn-primary">Go to categories</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;