import { Link } from "react-router-dom";
import useMyClasses from "../../hooks/useMyClasses";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const MyClass = () => {
    const axiosPublic = useAxiosPublic();
    const [myClassData, refetch] = useMyClasses();
    const { setLoading } = useContext(AuthContext);
    // const [classData, setClassData] = useState(myClassData);
    // delete operation
    const handleDeleteClass = (id) => {
        setLoading(true);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            axiosPublic.delete(`/class/${id}`)
                .then(() => {
                    // console.log(response.data);
                    Swal.fire("Deleted!", "Your class has been deleted.", "success");
                    // const updatedClasses = myClassData.filter((classItem) => classItem._id !== id);
                    // setClassData(updatedClasses); 
                    refetch();
                })
                .catch((error) => {
                    console.error("Error deleting class:", error);
                    Swal.fire("Error!", "Failed to delete the class. Please try again.", "error");
                }).finally(() => {
                    setLoading(false);
                })
        });
    }

    return (
        <section className="m-6">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    myClassData.map((data) => <div key={data._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img
                                className='md:h-[300px] w-full'
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
                                    <Link
                                        className='w-full'>
                                        <button onClick={() => handleDeleteClass(data._id)} className="btn btn-sm w-[130px] text-xs btn-error text-white">Delete</button>
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