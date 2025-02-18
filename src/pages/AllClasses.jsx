import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAllClasses from "../hooks/useAllClasses";
import ClassCard from "../components/ClassCard";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Loading from "../components/Loading";

const AllClasses = () => {
  const { loading } = useContext(AuthContext);
  const [allClassData] = useAllClasses();
  const [sortOrder, setSortOrder] = useState(null);

  const approvedClasses = allClassData.filter(
    (classData) => classData.status === "approved"
  );

  const sortedClasses = [...approvedClasses];
  if (sortOrder === "asc") {
    sortedClasses.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    sortedClasses.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <nav className="sticky z-50 top-0 w-full bg-white">
        <Navbar></Navbar>
      </nav>
      <section className="min-h-screen bg-[#F8F9FA]">
        <div className="pt-6">
          <div className="border-y-2 w-fit px-6 mx-auto text-center uppercase py-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#825afa]">
              All Classes
            </h2>
          </div>
        </div>
        <div className="flex justify-center gap-4 my-6">
          <button
            onClick={() => setSortOrder("asc")}
            className="px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-600"
          >
            Sort by Price (Low to High)
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-600"
          >
            Sort by Price (High to Low)
          </button>
        </div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto my-10">
            {sortedClasses.map((classData) => (
              <ClassCard classData={classData} key={classData._id}></ClassCard>
            ))}
          </div>
        )}
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AllClasses;
