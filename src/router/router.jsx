import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Banner from "../home/banner/Banner";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllClasses from "../pages/AllClasses";
import Dashboard from "../pages/protectedPages/Dashboard";
import TeachOnLearnQuest from "../pages/protectedPages/TeachOnLearnQuest";

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
    },
    {
        path:'/all-classes',
        element:<AllClasses></AllClasses>

    },
    {
        path:'/teach-on-lq',
        element:<TeachOnLearnQuest></TeachOnLearnQuest>
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    }
]);