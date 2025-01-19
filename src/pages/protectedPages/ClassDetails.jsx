import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionTitle from "../../components/SectionTitle";
import useClassById from "../../hooks/useClassById";

const ClassDetails = () => {
    const [classData] = useClassById();
    const { _id, image, title, name, description, price, totalEnrolment } = classData;
    // console.log(classData);
    // TODO: After clicking the pay button he/she is redirected to the payment page and payment for class. After successfully payment redirects to /dashboard/my-enroll classes page. Where he/she sees his/her enrolled class. And store payment transaction and enrollment-information.
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <section className="min-h-screen mb-12">
                <SectionTitle title={`Details about ${title}`}></SectionTitle>
                {/*  */}
                <div className="card card-compact bg-base-100 shadow-xl md:w-1/2 mx-auto mt-12">
                    <figure>
                        <img
                            className='md:h-[330px] w-full'
                            src={image} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title md:text-2xl">{title}</h2>
                        <hr />
                        <p><span className='font-semibold text-md'>Description:</span> {description}</p>
                        <div>
                            <p><span className='font-semibold text-md'>Teacher:</span> {name}</p>
                            <p><span className='font-semibold text-md'>Total Enrolment:</span> {totalEnrolment || "0"}</p>
                            <p><span className='font-semibold text-md'>Price:</span> <span className='font-medium'>${price}</span></p>
                        </div>
                        <div className="card-actions justify-center">
                            <Link to={`/payment/${_id}`}
                                className='w-full'>
                                <button className="btn btn-sm w-full px-6 text-sm  btn-success text-white hover:bg-[#825afa]">Pay</button>
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