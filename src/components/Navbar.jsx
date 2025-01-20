import { Link, NavLink } from "react-router-dom";
import logo from '../../src/assets/favicon.png'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { FaUser } from "react-icons/fa6";
import Swal from "sweetalert2";
import { IoLogOut } from "react-icons/io5";
import useAllUsers from "../hooks/useAllUsers";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [usersArr, refetch] = useAllUsers();
    const getUserData = usersArr.find((loggedUser) => user?.email === loggedUser.email);
    const userRole = getUserData?.role;
    // console.log(userRole);

    const links = (
        <>
            <NavLink to="/" className="nav-link px-4 py-2">
                Home
            </NavLink>
            <NavLink to="/all-classes" className="nav-link px-4 py-2">
                All Classes
            </NavLink>
            <NavLink to="/teach-on-lq" className="nav-link px-4 py-2">
                Teach on LearnQuest
            </NavLink>
        </>
    );

    // log-out
    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Congrats!",
                    text: "Logged out successfully!",
                    icon: "success"
                });
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    title: "Ohh Crap!",
                    text: "Failed to Log Out",
                    icon: "error"
                });
            })
    }


    return (
        <div className="navbar bg-base-300 shadow-md px-2 rounded-lg w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="text-md md:text-xl font-bold text-[#333333] flex items-center">
                    <img className="w-12 h-12 " src={logo} alt="" />
                    <span className="text-[#825afa] md:text-2xl">L</span>earn<span className="text-[#825afa] md:text-2xl">Q</span>uest
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end flex justify-center items-center gap-3 z-10">

                        <div className="border-2 border-[#825afa] rounded-full">
                            <label
                                tabIndex={0}
                                className="flex items-center gap-2 cursor-pointer">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={user.photoURL || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1737103962~exp=1737107562~hmac=5d502a421ca6150f793d627f83a57d9b8950ef1ae92851073c87834244c92f91&w=740"}
                                    alt="User Profile"
                                />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu pl-6 py-6 space-y-5 shadow bg-base-100 rounded-box w-56">
                                <p aria-readonly className="font-medium flex items-center gap-2"><FaUser></FaUser>{user?.displayName}</p>
                                <NavLink
                                    to={
                                        userRole === "admin"
                                            ? "/dashboard/teacher-requests"
                                            : userRole === "teacher"
                                                ? "/dashboard/add-class"
                                                : userRole === "student"
                                                    ? "/dashboard/my-enroll-class"
                                                    : "/dashboard"
                                    }
                                    // to="/dashboard/add-class" 
                                    className="nav-link w-fit">
                                    <li>Dashboard</li>
                                </NavLink>
                                <div>
                                    <button onClick={handleSignOut} className=" btn btn-error btn-sm text-white"><IoLogOut></IoLogOut> Log Out</button>
                                </div>
                            </ul>
                        </div>


                    </div>
                ) : (
                    <div>
                        <Link to="/signIn" className="btn ml-3 bg-[#825afa] text-white btn-sm px-6">
                            Sign In
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;