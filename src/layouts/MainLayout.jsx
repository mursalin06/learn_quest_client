import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';


const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className='bg-[#F8F9FA] min-h-screen'>
                <Outlet></Outlet>
            </section>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default MainLayout;