import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/auth/login/login"
import Register from "../pages/auth/register/register";
import MainPage from "../pages/main-page/main-page";
import Settings from "../pages/settings";
import Shop from "../pages/shop";
import NewProduct from "../pages/new-product";
import MyProducts from "../pages/my-products";

const browserRouter = createBrowserRouter([

    {
        path: '/',
        element: <Register />
    },
    {
        path: '/Login',
        element: <Login />,
    },
    {
        path: '/MainPage',
        element: <MainPage />
    },
    {
        path: '/MainPage/settings',
        element: <Settings />
    },
    {
        path: '/MainPage/shop',
        element: <Shop />
    },
    {
        path: '/MainPage/new-product',
        element: <NewProduct />
    },
    {
        path: '/MainPage/my-products',
        element: <MyProducts />
    }

]);

const Router = () => <RouterProvider router={browserRouter} />

export default Router;