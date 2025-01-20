import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAllClasses = () => {
    const {setLoading} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: allClassData = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            setLoading(true);
            try {
                const response = await axiosPublic.get('/classes');
                return response.data;
            } finally {
                setLoading(false);
            }
        }
    });
    return [allClassData];
};

export default useAllClasses;