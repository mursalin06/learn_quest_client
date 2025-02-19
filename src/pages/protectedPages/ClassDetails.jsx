import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionTitle from "../../components/SectionTitle";
import useClassById from "../../hooks/useClassById";

const ClassDetails = () => {
  const [classData] = useClassById();
  const { _id, image, title, name, description, price, totalEnrolment } =
    classData;

    


  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <section className="min-h-screen mb-12">
        <div className="max-w-[865px] mx-auto">
        <SectionTitle title={`Details about ${title}`}></SectionTitle>
        </div>
        {/*  */}
        <div className="card card-compact bg-base-100 shadow-xl md:w-1/2 mx-auto mt-12">
          <figure>
            <img className=" w-full md:h-[500px]" src={image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title md:text-2xl">{title}</h2>
            <hr />
            <p>
              <span className="font-semibold text-md">Description:</span>{" "}
              {description}
            </p>
            <div>
              <p>
                <span className="font-semibold text-md">Teacher:</span> {name}
              </p>
              <p>
                <span className="font-semibold text-md">Total Enrolment:</span>{" "}
                {totalEnrolment || "0"}
              </p>
              <p>
                <span className="font-semibold text-md">Price:</span>{" "}
                <span className="font-medium">${price}</span>
              </p>
            </div>
            <div className="card-actions justify-center">
              <Link to={`/payment/${_id}`} className="w-full">
                <button className="btn btn-sm w-full px-6 text-sm  btn-success text-white hover:bg-[#825afa]">
                  Pay
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ClassDetails;
