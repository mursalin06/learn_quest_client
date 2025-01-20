import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const AllUsers = () => {

    // TODO: Implement a server-side search functionality to find a specific user (via username/email).

    const axiosPublic = useAxiosPublic();
    // fetch all users data
    const { data: usersArr = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosPublic.get('/users');
            return response.data;
        }
    });
    // console.log(usersArr);

    const handleMakeAdmin = async(id, role) => {
        console.log("ID:", id, "ROLE:", role);

        try {
            const response = await axiosPublic.patch(`/users/${id}/role`, { role });
            console.log(`${role} response:`, response.data);
            Swal.fire({
                title: "Congrats!",
                text: `User role Upgraded to ${role}`,
                icon: "success"
            });
            refetch()
        } catch (error) {
            console.error(`Failed to update role to ${role}:`, error);
        }
    }

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
                                        <button
                                            onClick={() => handleMakeAdmin(singleUser._id, "admin")}
                                            disabled={singleUser.role === 'admin'}
                                            className="btn btn-ghost btn-xs"><FaUsers></FaUsers> Make Admin</button>
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