import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import CategoryWiseCar from './CategoryWiseCar';

const CategoryWiseCars = () => {

    const categoryCarsData = useLoaderData(); 

    const handleModalForm = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        console.log(email);
        form.reset();
    }
   
    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white text-black relative">

                    {/* cross button  */}
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    {/* form  */}
                    <Form onSubmit={handleModalForm}>
                        <div className="form-control">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input type="text" placeholder="email" name= 'email' className="input input-bordered bg-white" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered bg-white" />

                        </div>


                        <div className="form-control mt-6">
                            <button htmlFor="my-modal-6" className="btn" type='submit'>Submit</button>
                        </div>
                    </Form>

                </div>
            </div>


            <h1>{}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-y-10 my-10 justify-items-center'>
                {categoryCarsData.map(data => <CategoryWiseCar data={data} key={data._id}></CategoryWiseCar>)}
            </div>
        </div>
    );
};

export default CategoryWiseCars;