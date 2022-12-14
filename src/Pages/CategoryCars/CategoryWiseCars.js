import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Form, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import CategoryWiseCar from './CategoryWiseCar';

const CategoryWiseCars = () => {

    const [bookingData, setBookingData] = useState({})


    


    const { _id, model_name, img, resale_price, original_price } = bookingData;

    const categoryCarsData = useLoaderData(); 
    const userData = useContext(AuthContext);
    const { displayName, email } = userData.user;

    const handleModalForm = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const modelName = form.modelName.value; 
        const phoneNumber = form.phone.value; 
        const userInfo = form.userInfo.value; 
        const meetingLocation = form.meetingLocation.value; 

        const Booker = {
            name,
            email,
            modelName,
            phoneNumber,
            userInfo,
            meetingLocation,
            resale_price,
            original_price
        }

        // console.log(Booker);

        fetch('http://localhost:5000/bookingCar', {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(Booker)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {                    
                    console.log(data)
                    toast.success('Booking Successfull!')
                    form.reset();
                }
            })
    }

        // console.log(name, email, modelName, original_price, resale_price, phoneNumber, userInfo, meetingLocation );
    

   
    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white relative">

                    {/* cross button  */}
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    {/*----------- modal form ------------ */}
                    <Form onSubmit={handleModalForm}>

                        <img src={img} alt="" className='w-1/2 mx-auto' />


                        <div className="form-control text-black">
                            <label className="label font-semibold ">
                                <span className="">Name</span>
                            </label>
                            <input  type="text"  defaultValue={displayName} placeholder="Name" name='name' className="input input-bordered bg-white" />
                        </div>

                        <div className="form-control text-black">
                            <label className="label font-semibold">
                                <span className="">Email</span>
                            </label>
                            <input  type="email" name='email'  defaultValue={email} placeholder="email" className="input input-bordered bg-white" />

                        </div>


                        <div className="form-control text-black">
                            <label className="label font-semibold">
                                <span className="">Model Name</span>
                            </label>

                            <input  type="text" name='modelName' defaultValue={model_name} placeholder="Model Name" className="input input-bordered bg-white" />

                        </div>


                            <div className="form-control text-black w-1/2">
                                <label className="label font-semibold">
                                    <span className="">Original Price</span>
                                </label>
                                <input  type="text"  name='originalPrice' defaultValue={original_price} placeholder="Original Price" className="input input-bordered bg-white" />

                            </div>


                            <div className="form-control text-black w-1/2">
                                <label className="label font-semibold">
                                    <span className="">Resale Price</span>
                                </label>
                                <input  type="text"  name='resalePrice' defaultValue={resale_price} placeholder="Resale Price" className="input input-bordered bg-white" />



                        </div>


                        <div className="form-control text-black">
                            <label className="label font-semibold">
                                <span className="">Phone Number</span>
                            </label>
                            <input  type="text" required name='phone' placeholder="Phone" className="input input-bordered bg-white" />

                        </div>


                        <div className="form-control text-black">
                            <label className="label font-semibold">
                                <span className="">User Info</span>
                            </label>
                            <textarea  name="userInfo" id="" cols="30" rows="5" className='border-2 bg-white' style={{ resize: 'none' }}></textarea>
                        </div>


                        <div className="form-control text-black">
                            <label className="label font-semibold">
                                <span className="">Meeting Location</span>
                            </label>
                            <textarea  required name="meetingLocation" id="" cols="30" rows="5"  className='border-2 bg-white' style={{resize: 'none'}}></textarea>

                        </div>


                        <div className="modal-action mt-6">
                            <label className='btn' htmlFor="my-modal-6">Close
                           </label>
                            <button type="submit" value="Submit" className='btn'>Submit
                            </button>
                        </div>

                    </Form>

                </div>
            </div>


            <h1>{}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-y-10 my-10 justify-items-center'>
                {categoryCarsData.map(data => <CategoryWiseCar data={data} key={data._id} setBookingData={setBookingData}></CategoryWiseCar>)}
            </div>
        </div>
    );
};

export default CategoryWiseCars;