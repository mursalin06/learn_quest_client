import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import useAllUsers from '../hooks/useAllUsers';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import './dashboard.css';
// import { useContext } from 'react';
// import AuthContext from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [usersArr, refetch] = useAllUsers();
    const getUserData = usersArr.find((loggedUser) => user.email === loggedUser.email);
    const userRole = getUserData?.role;
    
    // ++

    // const {user} = useContext(AuthContext);
    // const params = useParams();
    return (

        <section>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className="min-h-screen bg-[#F8F9FA] flex">
                <div className='md:w-72 w-24 dashboard-sidebar bg-[#825afa] min-h-screen'>
                    <div className='m-2'>
                        <ul className='menu flex flex-col gap-3'>
                            {/* ADMIN */}
                            {userRole === "admin" && <>
                                <p className='font-bold text-center bg-gray-50 rounded-full text-xs'>Admin's Dashboard</p>
                                <NavLink to="/dashboard/teacher-requests" className="sidebar-link ">
                                    <li className='text-white '>Teacher Request</li>
                                </NavLink>
                                <NavLink to="/dashboard/all-users" className="sidebar-link ">
                                    <li className='text-white'>Users</li>
                                </NavLink>
                                <NavLink to="/dashboard/all-classes" className="sidebar-link ">
                                    <li className='text-white'>All Classes</li>
                                </NavLink>
                                <p className='font-bold text-center bg-gray-50 text-xs rounded-full'>Teacher's Dashboard</p>
                                <NavLink to="/dashboard/add-class" className="sidebar-link">
                                    <li className='text-white'>Add Class</li>
                                </NavLink>
                                <NavLink to={`/dashboard/my-class/${user?.email}`} className="sidebar-link">
                                    <li className='text-white'>My Class</li>
                                </NavLink>
                            </>}

                            {/* STUDENT */}
                            {userRole === 'student' && <>
                                <NavLink to="/dashboard/my-class" className="sidebar-link ">
                                    <li className='text-white'>My Enroll Class</li>
                                </NavLink>
                            </>}
                            {/* TEACHER */}
                            {userRole === 'teacher' && <>
                                <NavLink to="/dashboard/add-class" className="sidebar-link">
                                    <li className='text-white'>Add Class</li>
                                </NavLink>
                                <NavLink to={`/dashboard/my-class/${user?.email}`} className="sidebar-link">
                                    <li className='text-white'>My Class</li>
                                </NavLink>
                                <NavLink to={`/dashboard/profile`} className="sidebar-link">
                                    <li className='text-white'>Profile</li>
                                </NavLink>
                            </>}


                            {/* Shared */}
                            <NavLink to="/dashboard/profile" className="sidebar-link ">
                                <li className='text-white'>Profile</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </section>
    );
};

export default Dashboard;