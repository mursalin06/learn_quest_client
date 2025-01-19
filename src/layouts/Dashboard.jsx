import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const params = useParams();
    return (
        <section>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className="min-h-screen bg-[#F8F9FA] flex">
                <div className='w-72 dashboard-sidebar bg-[#825afa] min-h-screen'>
                    <div className='m-2'>
                        
                        {/* TEACHER'S DASHBOARD NAV LINKS */}
                        <ul className='menu flex flex-col gap-3'>
                            <NavLink to="/dashboard/add-class" className="nav-link w-fit">
                                <li className='text-white'>Add Class</li>
                            </NavLink>
                            <NavLink to={`/dashboard/my-class/${user?.email}`} className="nav-link w-fit">
                                <li className='text-white'>My Class</li>
                            </NavLink>
                            <NavLink to={`/dashboard/profile`} className="nav-link w-fit">
                                <li className='text-white'>Profile</li>
                            </NavLink>
                        </ul>

                        {/* ADMIN'S DASHBOARD NAV LINKS */}
                        
                        {/* <ul className='menu flex flex-col gap-3'>
                            <NavLink to="/dashboard/add-class" className="nav-link w-fit">
                                <li className='text-white'>Add Class</li>
                            </NavLink>
                            <NavLink to="/dashboard/my-class" className="nav-link w-fit">
                                <li className='text-white'>My Class</li>
                            </NavLink>
                            <NavLink to="/dashboard/profile" className="nav-link w-fit">
                                <li className='text-white'>Profile</li>
                            </NavLink>
                        </ul> */}

                        {/* STUDENT'S DASHBOARD NAV LINKS  */}

                        {/* <ul className='menu flex flex-col gap-3'>
                            <NavLink to="/dashboard/my-class" className="nav-link w-fit">
                                <li className='text-white'>My Enroll Class</li>
                            </NavLink>
                            <NavLink to="/dashboard/profile" className="nav-link w-fit">
                                <li className='text-white'>Profile</li>
                            </NavLink>
                        </ul> */}
                    </div>
                    <hr />
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