import {createBrowserRouter} from 'react-router-dom';
import Welcome from '../components/Dashboard/Welcome';
import DashboardLayout from '../layouts/DashboardLayout';
import Root from '../layouts/Root';
import SearchLayout from '../layouts/SearchLayout';
import Blogs from '../pages/Blogs';
import CategoryBooks from '../pages/CategoryBooks';
import AddProduct from '../pages/Dashboard/AddProduct';
import AllBuyers from '../pages/Dashboard/AllBuyers';
import AllSellers from '../pages/Dashboard/AllSellers';
import BookingPage from '../pages/Dashboard/BookingPage';
import MyOrders from '../pages/Dashboard/MyOrders';
import MyProducts from '../pages/Dashboard/MyProducts';
import MyWishlist from '../pages/Dashboard/MyWishlist';
import ReportedItems from '../pages/Dashboard/ReportedItems';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchBooks from '../pages/SearchBooks/SearchBooks';
import AdminRoute from '../Routes/AdminRoute';
import CommonRoute from '../Routes/CommonRoute';
import PrivateRoute from '../Routes/PrivateRoute';
import SellerRoute from '../Routes/SellerRoute';

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
                path: '/category/:categoryName',
                loader: ({params}) => fetch(`https://alibris-server.vercel.app/category/${params?.categoryName}`),
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
        element: <CommonRoute><DashboardLayout /></CommonRoute>,
        // element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <CommonRoute><Welcome /></CommonRoute>,
                // element: <PrivateRoute><Welcome /></PrivateRoute>,
            },
            {
                path: '/dashboard/my-orders',
                element: <PrivateRoute><MyOrders /></PrivateRoute>
            },
            {
                path: '/dashboard/my-wishlists',
                element: <PrivateRoute><MyWishlist /></PrivateRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <SellerRoute><AddProduct /></SellerRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute><MyProducts /></SellerRoute>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AdminRoute><AllSellers /></AdminRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AdminRoute><AllBuyers /></AdminRoute>
            },
            {
                path: '/dashboard/reported-items',
                element: <AdminRoute><ReportedItems /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({params}) => fetch(`https://alibris-server.vercel.app/bookings/payment/${params.id}`),
                element: <PrivateRoute><BookingPage /></PrivateRoute>
            },
        ]
    },
    {
        path: '/products/search',
        element: <SearchLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/products/search',
                element: <SearchBooks />
            }
        ]
    }
])