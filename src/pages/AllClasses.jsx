import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAllClasses from "../hooks/useAllClasses";
import ClassCard from "../components/ClassCard";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Loading from "../components/Loading";

const AllClasses = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const [allClassData] = useAllClasses();

    // TODO: use filtered classes

    const approvedClasses = allClassData.filter((classData)=>classData.status === 'approved');
    // console.log(approvedClasses)
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className="min-h-screen bg-[#F8F9FA]">
                <div className="pt-6">
                    <div className="border-y-2 w-fit px-6 mx-auto text-center uppercase py-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#825afa]">All Classes</h2>
                    </div>
                </div>
                {/*  */}
                {loading ? <Loading></Loading> : <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-11/12 mx-auto my-10">
                    {
                        approvedClasses.map((classData) => <ClassCard classData={classData} key={classData._id}></ClassCard>)
                    }
                </div>}

            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllClasses;