import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

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
            ALL USERS - {usersArr.length}
        </div>
    );
};

export default AllUsers;