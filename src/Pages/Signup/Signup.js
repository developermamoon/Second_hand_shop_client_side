import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { createUser, updateUser, googlelogin } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');

        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast("User Created Succefully");

                const userInfo = {
                    displayName: data.name,
                }

                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => { console.log(err) })

            })
            .catch(err => {
                console.error(err.message);
                setSignUpError(err.message)
            })

        googlelogin
            .then(res => {
                const user = res.user;
                console.log(user)
            })
            .then(err => {
                console.log(err);
            })
    }


    return (
        <div>
            <div className='h-[600px] flex justify-center items-center'>
                <div className='w-96 p-7 border'>
                    <h2 className='text-xl text-center'>Sign Up</h2>

                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: 'Name is required' })} type="text" className="input input-bordered w-full max-w-xs" />

                            {errors.name && <p className='my-2 text-red-600' role="alert">{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: 'Email Address is required' })} type="email" className="input input-bordered w-full max-w-xs" />

                            {errors.email && <p className='my-2 text-red-600' role="alert">{errors.email?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" {...register("password", {
                                required: 'Password Is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                            })} className="input input-bordered w-full max-w-xs" />

                            {errors.password && <p className='my-2 text-red-600' role="alert">{errors.password?.message}</p>}

                            <label className="label">
                                <span className="label-text">Forget Password</span>
                            </label>

                            {
                                signUpError && <p className='text-red-600'>{signUpError}</p>
                            }

                        </div>



                        <input className='btn btn-dark w-full' value='Sign up' type="submit" />
                    </form>

                    <p className='mt-3'>Already have an account ? <Link to='/login' className='text-secondary'>Login</Link></p>

                    <div className="divider">OR</div>

                    <button className='btn btn-outline w-full' onClick={() => googlelogin()}>CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Signup;