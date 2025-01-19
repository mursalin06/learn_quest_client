import { Link } from "react-router-dom";
import useMyClasses from "../../hooks/useMyClasses";

const MyClass = () => {
    const [myClassData] = useMyClasses();
    return (
        <section className="m-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    myClassData.map((data) => <div key={data._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img
                                className='md:h-[330px]'
                                src={data.image} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <hr />
                            <p><span className='font-semibold'>Short Description:</span> {data.description}</p>
                            <div>
                                <p><span className='font-semibold'>Name:</span> {data.name}</p>
                                <p><span className='font-semibold'>Total Enrolment:</span> {data.totalEnrolment || "0"}</p>
                                <p><span className='font-semibold'>Price:</span> <span className='font-medium'>${data.price}</span></p>
                            </div>
                            <div className="card-actions justify-center ">
                                <div className="md:flex justify-evenly gap-1">
                                    <Link to={`/class/${data._id}`}
                                        className='w-full'>
                                        <button className="btn btn-sm w-[130px] text-xs btn-primary text-white">Update</button>
                                    </Link>
                                    <Link to={`/class/${data._id}`}
                                        className='w-full'>
                                        <button className="btn btn-sm w-[130px] text-xs btn-error text-white">Delete</button>
                                    </Link>
                                    <Link
                                        to={`/class/${data._id}`}
                                        className='w-full'>
                                        <button className="btn btn-sm w-[130px] text-xs bg-[#825afa] hover:bg-[#825afa] text-white">See Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </section>
    );
};

export default MyClass;