import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import lazyLoad from '../utils/lazy-load';
import { Login, Registration } from '../components';
import ErrorPage from './errorPage';

export const router = createBrowserRouter([
    {index: true, element: lazyLoad(Login), errorElement: <ErrorPage />},
    {
        path: '/register',
        element: lazyLoad(Registration)
    }
]); 