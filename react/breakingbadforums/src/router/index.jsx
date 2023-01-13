import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Characters from "../pages/Characters";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import LayoutPrivate from "../layout/LayoutPrivate";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
  
            {
                index: true,
                element: <Home />,
            },
    {
        path: "/about",
        element: <About />,
        
    },
    {
        path: "/blog",
        element: <Blog />,
        
    },
    {
        path: "/characters",
        element: <Characters />,
       
    },
    {
        path: "/login",
        element: <Login />,
       
    },
    {
        path: "/dashboard",
        element: <LayoutPrivate />,
        errorElement: <NotFound />,
        children: [
            {
             index: true,
             element: <Dashboard />
            }
        ]
    },
    ],
}]);



