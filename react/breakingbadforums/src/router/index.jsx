import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Threads from "../pages/Threads";
import Episodes from "../pages/Episodes";
import Characters from "../pages/Characters";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
//import LayoutPrivate from "../layout/LayoutPrivate";


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
        path: "/threads",
        element: <Threads />,
        
    },
    {
        path: "/episodes",
        element: <Episodes />,
        
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
       // element: <LayoutPrivate />,
       element: <LayoutPublic />,
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



