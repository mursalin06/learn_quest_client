import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAllClasses from "../hooks/useAllClasses";

const AllClasses = () => {
    const [allClassData] = useAllClasses();
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            {/*  */}
           <section className="min-h-screen bg-[#F8F9FA]">
           {allClassData.length}
           </section>
           {/*  */}
           <footer>
            <Footer></Footer>
           </footer>
        </div>
    );
};

export default AllClasses;