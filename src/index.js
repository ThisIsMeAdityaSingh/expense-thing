import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter';
import { RouterProvider } from 'react-router-dom';

// local imports
import { router } from './routes/index';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
