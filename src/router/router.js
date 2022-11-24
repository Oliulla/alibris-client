import {createBrowserRouter} from 'react-router-dom';
import Root from '../layouts/Root';
import CategoryBooks from '../pages/CategoryBooks';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
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
                path: '/category/:id',
                loader: ({params}) => fetch(`books.json/category/${params.id}`),
                element: <CategoryBooks />
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
    }
])