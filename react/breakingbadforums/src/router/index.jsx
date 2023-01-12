import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <NotFound />,
    },
    {
        path: "/blog",
        element: <Blog />,
        errorElement: <NotFound />,
    },
]);

import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};
export default NotFound;

