import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../SectionTitle";
import Loading from "../Loading";
import { Rate } from "antd";

const Feedback = () => {
  const axiosPublic = useAxiosPublic();

  const { data: feedbackCollection, isLoading } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      const res = await axiosPublic.get("/feedback");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="mb-6">
        <SectionTitle
          title={"Student Feedback"}
          subtitle="Hear from learners who’ve transformed their skills."
        />
      </div>
      <Swiper navigation={true} modules={[Navigation]}>
        {feedbackCollection.map((feedback) => (
          <SwiperSlide key={feedback._id}>
            <div className="text-center py-12 border border-gray-400 flex flex-col justify-center bg-base-300">
              <h2 className="font-semibold text-xl">{feedback?.className}</h2>
              <p>Instructor: {feedback?.name}</p>
              <p className="mt-6">"{feedback?.feedback}"</p>

              <div className="my-4">
                <Rate allowHalf disabled defaultValue={feedback?.rate} />
              </div>

              <div>
                <p className="mt-6 font-semibold">Feedback by:</p>
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={feedback?.avatar}
                    alt=""
                    className="w-12 h-12 border-2 border-[#825afa] rounded-full p-1"
                  />
                  <p>{feedback?.postBy}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Feedback;
