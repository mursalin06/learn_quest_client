import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AllClasses = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            {/*  */}
           <section className="min-h-screen bg-[#F8F9FA]">
           ALL CLASSES (PRIVATE)
           </section>
           {/*  */}
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default AllClasses;