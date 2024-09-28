import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter';
import Login from './components/login';


const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>
);
