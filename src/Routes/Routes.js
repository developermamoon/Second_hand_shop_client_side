import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import PrivateRoute from './PrivateRoute';
import CategoryCars from '../Pages/CategoryCars/CategoryCars';
import CategoriesPage from '../Pages/CategoriesPage/CategoriesPage';


export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <Login></Login> },
            { path: '/signup', element: <Signup></Signup> },
            { path: '/dashboard', element: <Signup></Signup> },
            { path: '/blogs', element: <Blogs></Blogs> },
            { path: '/categories', element: <CategoriesPage></CategoriesPage> },
            { path: '/category/:id', element: <PrivateRoute><CategoryCars></CategoryCars></PrivateRoute>, loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)},
        ]
    },
    { path: '*', element: <ErrorPage></ErrorPage> },
])


