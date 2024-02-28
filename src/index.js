import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DarkThemeToggle} from "flowbite-react";
import Checkbox from "./Checkbox";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <div>
            <br/>
            <div><DarkThemeToggle/></div>
            <Checkbox></Checkbox>
        </div>
    </React.StrictMode>
);
