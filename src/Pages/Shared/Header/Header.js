import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {

    const {user,logOut} = useContext(AuthContext); 

    const handleLogout = () =>{
        logOut()
        .then(()=>{})
        .catch(err=> {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="navbar bg-neutral">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/categories'>Categories</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>

                            {user?.uid ?
                            <>
                            <li><Link to='/dashboard'>DashBoard</Link></li>
                                    <li><Link onClick={handleLogout} to='/'>Logout</Link></li>
                            </>
                            :
                            <>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>SignUp</Link></li>
                            </>
                            }
                            

                            
                        </ul>
                    </div>

                    {/* company name and logo -------------------- */}
                    <Link to='/' className="btn btn-ghost text-white normal-case text-xl">Dream Car</Link>
                </div>


                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='bg-secondary text-white rounded-lg mr-2'><Link to= '/'>Home</Link></li>
                        <li className='bg-secondary text-white rounded-lg mr-2'><Link to= '/categories'>Categories</Link></li>
                        <li className='bg-secondary text-white rounded-lg mr-2'><Link to= '/blogs'>Blogs</Link></li>

                        {user?.uid ?
                            <>
                                <li className='bg-secondary text-white rounded-lg mr-2'><Link to='/dashboard'>DashBoard</Link></li>
                                <li className='bg-secondary text-white rounded-lg mr-2'><Link onClick={handleLogout} to='/'>Logout</Link></li>
                            </>
                            :
                            <>
                                <li className='bg-secondary text-white rounded-lg mr-2'><Link to='/login'>Login</Link></li>
                                <li className='bg-secondary text-white rounded-lg mr-2'><Link to='/signup'>SignUp</Link></li>
                            </>
                        }
                        
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Header;