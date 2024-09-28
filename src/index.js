import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter';

// local imports
import { Registration } from './components';


const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

const RenderComponent = props => {
    return <React.Suspense fallback={<p>...Loading</p>}>{props.children}</React.Suspense>
};

root.render(
    <React.StrictMode>
        <RenderComponent>
            <Registration />
        </RenderComponent>
    </React.StrictMode>
);
