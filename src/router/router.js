import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Root from '../layouts/Root';
import Blogs from '../pages/Blogs';
import CategoryBooks from '../pages/CategoryBooks';
import MyOrders from '../pages/Dashboard/MyOrders';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from '../Routes/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/category/:id',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoute><CategoryBooks /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '',
                element: <PrivateRoute><MyOrders /></PrivateRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <PrivateRoute><MyOrders /></PrivateRoute>
            }
        ]
    }
])