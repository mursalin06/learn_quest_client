import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Banner from "../home/banner/Banner";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllClasses from "../pages/AllClasses";
import TeachOnLearnQuest from "../pages/protectedPages/TeachOnLearnQuest";
import Partners from "../home/partners/Partners";
import RecruitInstructor from "../pages/RecruitInstructor";
import ContactUs from "../pages/ContactUs";
import Newsletter from "../components/Newsletter";
import Dashboard from "../layouts/Dashboard";
import AddClass from "../pages/protectedPages/AddClass";
import MyClass from "../pages/protectedPages/MyClass";
import Profile from "../pages/protectedPages/Profile";
import ClassDetails from "../pages/protectedPages/ClassDetails";
import Payment from "../pages/protectedPages/Payment";
import Error from "../components/ErrorElement";
import ErrorElement from "../components/ErrorElement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <>
                    <Banner></Banner>
                    <Partners></Partners>
                    <RecruitInstructor></RecruitInstructor>
                    <ContactUs></ContactUs>
                    <Newsletter></Newsletter>
                </>
            }
        ]
    },
    {
        path: '/signIn',
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: '/all-classes',
        element: <AllClasses></AllClasses>

    },
    {
        path: '/teach-on-lq',
        element: <TeachOnLearnQuest></TeachOnLearnQuest>
    },
    {
        path: "/class/:id",
        element:<ClassDetails></ClassDetails>
    },
    {
        path: "/payment/:id",
        element:<Payment></Payment>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/add-class',
                element: <AddClass></AddClass>
            },
            {
                path: '/dashboard/my-class/:email',
                element: <MyClass></MyClass>
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path:'*',
        element:<ErrorElement></ErrorElement>
    }
]);