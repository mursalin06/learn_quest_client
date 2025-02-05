import { useParams } from 'react-router-dom';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMyClasses = () => {

    const axiosPublic = useAxiosPublic();
    const params = useParams();
    // console.log(params)
    const { data: myClassData = [], refetch, isLoading } = useQuery({
        queryKey: ['my-class'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/my-class/${params.email}`)
            return response.data;
        }
    });
    return [myClassData, refetch, isLoading];
};

export default useMyClasses;