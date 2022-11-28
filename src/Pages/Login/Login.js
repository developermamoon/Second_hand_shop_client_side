import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn, googlelogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message);
                setLoginError(err.message);
            })

    
    }

    const handleGoogleLogin = () => {
        googlelogin()
            .then(res => {
                const user = res.user;
                console.log(user)
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7 border'>
                <h2 className='text-xl text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

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

                        {loginError && <p className='my-2 text-red-600'>{loginError}</p>}

                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>

                    </div>



                    <input className='btn btn-dark w-full' value='Login' type="submit" />
                </form>

                <p className='mt-3'>New to Doctors Portal ? <Link to='/signup' className='text-secondary'>Create New Account</Link></p>

                <div className="divider">OR</div>

                <button className='btn btn-outline w-full' onClick={() => handleGoogleLogin()}>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;