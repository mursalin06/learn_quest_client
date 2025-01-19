import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useParams } from 'react-router-dom';

const useClassById = () => {
    const axiosPublic = useAxiosPublic();
    const params = useParams();
    // console.log(params)
    const { data: classData = [] } = useQuery({
        queryKey: ['class'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/class/${params.id}`)
            return response.data;
        }
    });
    return [classData];
};

export default useClassById;