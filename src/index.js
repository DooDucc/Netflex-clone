import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './components/globalstyle';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyle>
            <App />
        </GlobalStyle>
    </React.StrictMode>,
);
