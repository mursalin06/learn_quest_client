import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllUsers = () => {
    
    const axiosPublic = useAxiosPublic();
    // fetch all users data
    const { data: usersArr = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosPublic.get('/users');
            return response.data;
        }
    });
    return [usersArr, refetch]
};

export default useAllUsers;