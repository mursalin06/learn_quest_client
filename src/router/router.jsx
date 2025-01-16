import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Banner from "../home/banner/Banner";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Banner></Banner>
            }
        ]
    },
    {
        path:'/signIn',
        element:<Login></Login>
    },
    {
        path:"/register",
        element: <Register></Register>
    }
]);