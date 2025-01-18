import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllClasses = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allClassData = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await axiosPublic.get('/classes')
            return response.data;
        }
    });
    return [allClassData];
};

export default useAllClasses;