import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaUsers } from 'react-icons/fa6';

const AllUsers = () => {
    const axiosPublic = useAxiosPublic();
    // fetch all users data
    const { data: usersArr = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosPublic.get('/users');
            return response.data;
        }
    });
    console.log(usersArr);

    return (
        <div>
            <h3 className='text-2xl md:text-3xl font-bold text-[#825afa] text-center my-2'>ALL USERS - {usersArr.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                usersArr.map((singleUser) => <tr key={singleUser._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={singleUser?.photoURL} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {singleUser?.name}
                                    </td>
                                    <td>{singleUser?.email}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs"><FaUsers></FaUsers> Make Admin</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;