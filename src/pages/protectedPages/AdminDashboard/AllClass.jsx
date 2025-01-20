import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';

const AllClass = () => {
    const axiosPublic = useAxiosPublic();
    const [isProgressVisible, setIsProgressVisible] = useState(null);
    // fetch all class data
    const { data: allClassArr = [], isLoading, refetch } = useQuery({
        queryKey: ['all-class'],
        queryFn: async () => {
            const response = await axiosPublic.get('/classes');
            return response.data;
        }
    });
    // console.log(allClassArr);

    // Update status handler
    const handleStatusUpdate = async (id, status) => {
        try {
            const response = await axiosPublic.patch(`/classes/${id}/status`, { status });
            console.log(`${status} response:`, response.data);
            Swal.fire({
                title: "Good job!",
                text: `Class ${status}`,
                icon: "success"
            });
            refetch()
            // QueryClient.invalidateQueries(['all-class']);
        } catch (error) {
            console.error(`Failed to update status to ${status}:`, error);
        }
    };
    // Toggle visibility of progress for this class
    const handleShowProgress = (id) => {
        setIsProgressVisible(id);
    };

    return (
        <div>
            {isLoading ? <Loading></Loading> : <div>

                <h1 className="text-2xl md:text-3xl text-[#825afa] my-2 text-center font-bold mb-4">All Classes</h1>
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Actions</th>
                            <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allClassArr.length > 0 ? (
                            allClassArr.map((classItem) => (
                                <tr key={classItem.id}>
                                    <td>{classItem.title}</td>
                                    <td>
                                        <div className="w-24 h-16">
                                            <img
                                                src={classItem.image}
                                                alt={classItem.title}
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    </td>
                                    <td>{classItem.email}</td>
                                    <td>{classItem.description.slice(0, 40)}...</td>
                                    <td>
                                        {classItem.status !== 'approved' && classItem.status !== 'rejected' ? (
                                            <>
                                                <button
                                                    onClick={() => handleStatusUpdate(classItem._id, 'approved')}
                                                    className="btn btn-sm text-white btn-success mr-2"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(classItem._id, 'rejected')}
                                                    className="btn btn-sm text-white btn-error"
                                                >
                                                    Reject
                                                </button>
                                            </>
                                        ) : (
                                            <span className="text-gray-500">
                                                {classItem.status.charAt(0).toUpperCase() +
                                                    classItem.status.slice(1)}
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-2">
                                            <div className="h-2 bg-gray-200 w-full rounded-full">
                                                <div
                                                    className="h-2 bg-green-500 rounded-full"
                                                    style={{ width: `${classItem.progress}%` }}
                                                ></div>
                                            </div>
                                            <span>{classItem.progress}%</span>
                                        </div>

                                        {/* Show Progress Button if Status is Approved */}
                                        <button
                                            className="btn btn-sm text-white bg-blue-500 mt-2"
                                            onClick={() => handleShowProgress(classItem._id)}
                                            disabled={classItem.status !== "approved"} // Disable if status is not approved
                                        >
                                            Show Progress
                                        </button>

                                        {/* Show Progress when button clicked */}
                                        {isProgressVisible === classItem._id && (
                                            <div className="mt-2">
                                                <h3>Class Progress: {classItem.progress}%</h3>
                                                <div className="h-2 bg-gray-200 w-10/12 rounded-full">
                                                    <Link
                                                    // to={`/class/id/progress`}
                                                    > <div
                                                        className="h-2 bg-blue-500 rounded-full"
                                                        style={{ width: `${classItem.progress}%` }}
                                                    ></div></Link>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No classes available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>}
        </div>
    );
};

export default AllClass;