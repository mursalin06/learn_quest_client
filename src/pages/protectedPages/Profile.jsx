import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.email)

    const axiosPublic = useAxiosPublic();

    const { data: userData = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/user/${user.email}`)
            return response.data;
        }
    });
    // console.log(userData);
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="md:w-96 border flex flex-col justify-center items-center  ">
                <div className="bg-[#825afa] rounded-t-xl w-full py-8 text-center">
                    <div className="avatar">
                        <div className="mask mask-squircle w-28">
                            <img src={userData?.photoURL} />
                        </div>
                    </div>
                    <h4 className="text-lg text-center text-white font-bold">{userData?.name}</h4>
                </div>
                <hr />
                <div className="bg-base-300 rounded-b-xl w-full py-10 pl-10">
                    <p><span className="text-md font-bold">Role:</span> <span>{userData?.role}</span> </p>
                    <p><span className="text-md font-bold">Email:</span> <span>{userData?.email}</span> </p>
                    <p><span className="text-md font-bold">Number:</span> <span> 01322810867</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;