import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Payment = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className='min-h-screen'>
            MAKE PAYMENT
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Payment;