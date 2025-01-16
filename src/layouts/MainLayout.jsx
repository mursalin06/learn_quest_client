import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className='bg-[#F8F9FA] min-h-screen'>
                <Outlet></Outlet>
            </section>

        </div>
    );
};

export default MainLayout;