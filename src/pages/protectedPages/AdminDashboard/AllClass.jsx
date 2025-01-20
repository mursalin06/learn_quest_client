import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/AuthContext';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../components/Loading';

const AllClass = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allClassArr = [], isLoading } = useQuery({
        queryKey: ['all-class'],
        queryFn: async () => {
            const response = await axiosPublic.get('/classes');
            return response.data;
        }
    });
    console.log(allClassArr)

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
                                            <button className="btn btn-sm text-white btn-success mr-2">Approve</button>
                                            <button className="btn btn-sm text-white btn-error">Reject</button>
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