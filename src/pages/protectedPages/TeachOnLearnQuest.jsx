import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionTitle from "../../components/SectionTitle";

const TeachOnLearnQuest = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className="min-h-screen bg-[#F8F9FA]">
                <SectionTitle title='Apply now' subtitle={'Take the First Step Toward Your Goals – Apply Today!'}></SectionTitle>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default TeachOnLearnQuest;