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
import PrivateRoute from "../pages/Private/PrivateRoute";
import AllClass from "../pages/protectedPages/AdminDashboard/AllClass";
import AllUsers from "../pages/protectedPages/AdminDashboard/AllUsers";
import TeacherRequests from "../pages/protectedPages/AdminDashboard/TeacherRequests";

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
        element: <PrivateRoute>
            <ClassDetails></ClassDetails>
        </PrivateRoute>
    },
    {
        path: "/payment/:id",
        element: <Payment></Payment>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard/add-class',
                element: <PrivateRoute>
                    <AddClass></AddClass>
                </PrivateRoute>
            },
            {
                path: '/dashboard/my-class/:email',
                element: <PrivateRoute>
                    <MyClass></MyClass>
                </PrivateRoute>
            },
            {
                path: '/dashboard/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            // ADMIN ROUTES
            {
                path:'/dashboard/all-classes',
                element:<AllClass></AllClass>
            },
            {
                path:'/dashboard/all-users',
                element:<AllUsers></AllUsers>
            },
            {
                path:'/dashboard/teacher-requests',
                element:<TeacherRequests></TeacherRequests>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorElement></ErrorElement>
    }
]);