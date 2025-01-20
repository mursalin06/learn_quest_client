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

                <div>
                    ABCD
                </div>

            </div>}
        </div>
    );
};

export default AllClass;