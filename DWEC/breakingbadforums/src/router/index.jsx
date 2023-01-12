import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layouts/LayoutPublic";
import NotFound from "..pages/NotFound"
import Home from "..pages/Home"
import Contact from "..pages/Contact"
import Login from "..pages/Login"
import Dashboard from "..pages/Dashboard"



export const router = createBrowserRouter([
        {
            path:"/",
            element: <LayoutPublic />,
            errorElement: <NotFound />,
            children: [
                {
                    path:"/",
                    element: <Home />
                },
                {
                    path:"/contact",
                    element: <Contact />
                },
                {
                    path:"/login",
                    element: <Login />
                },
            ],
        },
        {
            path: "/dashdoard",
            element:<Dashboard />,
            errorElement: <NotFound />
        },
    ])