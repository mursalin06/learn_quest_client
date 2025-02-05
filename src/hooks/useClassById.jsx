import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useParams } from 'react-router-dom';

const useClassById = () => {
    const axiosPublic = useAxiosPublic();
    const params = useParams();
    
    const { data: classData = [], isLoading, refetch } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/class/${params.id}`)
            return response.data;
        }
    });
    return [classData, isLoading, refetch];
};

export default useClassById;