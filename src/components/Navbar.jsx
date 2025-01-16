import { Link, NavLink } from "react-router-dom";
import logo from '../../public/favicon.png'

const Navbar = () => {

    const user = false;
    const links = (
        <>
            <NavLink to="/" className="nav-link">
                <li>Home</li>
            </NavLink>
            <NavLink to="/all-classes" className="nav-link">
                <li>All Classes</li>
            </NavLink>
            <NavLink to="/teach-on-lq" className="nav-link">
                <li>Teach on LearnQuest</li>
            </NavLink>
        </>
    );


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
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <span className="tooltip tooltip-bottom z-50" data-tip={user.displayName}>
                                    <img
                                        className="w-12 h-12 rounded-full"
                                        src={user.photoURL}
                                        alt="User Profile"
                                    />
                                </span>
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu pl-6 py-6 space-y-5 shadow bg-base-100 rounded-box w-56"
                            >
                                <p aria-readonly className="text-sm">{user?.displayName || user?.name} Name</p>
                                <NavLink to="/dashboard" className="nav-link">
                                    <li>Dashboard</li>
                                </NavLink>
                                <div>
                                    <button className=" btn btn-error btn-sm text-white">Log Out</button>
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