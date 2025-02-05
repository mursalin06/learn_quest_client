import { useQuery } from "@tanstack/react-query";
import SimpleParallax from "simple-parallax-js";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loading from "./Loading";

const State = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosPublic.get("/stats");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
      <div className="grid grid-rows-3 gap-6">
        <div className="mx-6 p-6 bg-gray-600">
          <p className="text-2xl font-semibold text-white">
            Total Users: {data?.userCount}
          </p>
        </div>
        <div className="mx-6 p-6 bg-gray-600">
          <p className="text-2xl font-semibold text-white">
            Total Courses: {data?.classCount}
          </p>
        </div>
        <div className="mx-6 p-6 bg-gray-600">
          <p className="text-2xl font-semibold text-white">
            Total Enrollment: {data?.enrollCount}
          </p>
        </div>
      </div>
      <div>
        <SimpleParallax orientation="left">
          <img
            src="https://i.ibb.co.com/F45fJXx/Pexels-photo-267885.jpg"
            alt=""
          />
        </SimpleParallax>
      </div>
    </div>
  );
};

export default State;
