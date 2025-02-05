import { createBrowserRouter } from "react-router-dom";
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
import Profile from "../pages/protectedPages/Profile";
import ClassDetails from "../pages/protectedPages/ClassDetails";
import Payment from "../pages/protectedPages/Payment";
import ErrorElement from "../components/ErrorElement";
import PrivateRoute from "../pages/Private/PrivateRoute";
import AllClass from "../pages/protectedPages/AdminDashboard/AllClass";
import AllUsers from "../pages/protectedPages/AdminDashboard/AllUsers";
import TeacherRequests from "../pages/protectedPages/AdminDashboard/TeacherRequests";
import TeacherClassDetails from "../pages/protectedPages/Teachers/TeacherClassDetails";
import MyClass from "../pages/protectedPages/Teachers/MyClass";
import AddClass from "../pages/protectedPages/Teachers/AddClass";
import MyEnrollClass from "../pages/protectedPages/student/MyEnrollClass";
import EnrollClassDetails from "../pages/protectedPages/student/EnrollClassDetails";
import TestTable from "../pages/TestTable";
import PopularCourses from "../pages/PopularCourses";
import Feedback from "../components/Feedback/Feedback";
import State from "../components/State";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Banner />
            <Partners />
            <PopularCourses/>
            <RecruitInstructor />
            <ContactUs />
            <State/>
            <Feedback/>
            <Newsletter />
          </>
        ),
      },
    ],
  },
  {
    path: "/signIn",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/all-classes",
    element: <AllClasses />,
  },
  {
    path: "/teach-on-lq",
    element: <TeachOnLearnQuest />,
  },
  {
    path: "/class/:id",
    element: (
      <PrivateRoute>
        <ClassDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/payment/:id",
    element: (
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),

    children: [
      //! TEACHER ROUTES
      {
        path: "add-class",
        element: (
          <PrivateRoute>
            <AddClass />
          </PrivateRoute>
        ),
      },
      {
        path: "my-class/:email",
        element: (
          <PrivateRoute>
            <MyClass />
          </PrivateRoute>
        ),
      },
      {
        path: "class/:id",
        element: (
          <PrivateRoute>
            <TeacherClassDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      //! ADMIN ROUTES
      {
        path: "all-classes",
        element: <AllClass />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "teacher-requests",
        element: <TeacherRequests />,
      },

      //! STUDENT ROUTE
      {
        path: "my-enroll-class",
        element: (
          <PrivateRoute>
            <MyEnrollClass />
          </PrivateRoute>
        ),
      },
      {
        path: "my-enroll/:id",
        element: (
          <PrivateRoute>
            <EnrollClassDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorElement />,
  },{
    path: 'check',
    element: <TestTable/>
  }
]);
