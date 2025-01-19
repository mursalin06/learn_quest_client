import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import useClassById from "../../hooks/useClassById";

const ClassDetails = () => {
    const [classData] = useClassById();
    // console.log(classData);
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className="min-h-screen bg-[#F8F9FA]">
                CLASS DETAILS (PRIVATE ROUTE)
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ClassDetails;