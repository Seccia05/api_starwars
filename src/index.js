import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DarkThemeToggle} from "flowbite-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div>
            <br/>
            <div><DarkThemeToggle/></div>
            <App></App>
           </div>
    </React.StrictMode>
);
