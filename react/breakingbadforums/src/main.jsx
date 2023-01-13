import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import UserContext from './contexts/UserContext';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserContext>
            <RouterProvider router={router} />
        </UserContext>
    </React.StrictMode>
);

