import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Loading from "../components/Loading";
import SectionTitle from "../components/SectionTitle";
import AuthContext from "../context/AuthContext";

const PopularCourses = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: popularClasses, isLoading } = useQuery({
    queryKey: ["popularClasses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/popular-classes");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  // Function to handle navigation
  const handleNavigation = (courseId) => {
    if (!user) {
      navigate("/signIn"); // Redirect to sign-in if not logged in
    } else {
      navigate(`/class/${courseId}`); // Go to course details if logged in
    }
  };

  return (
    <div className="px-6">
      <div className="mb-8">
        <SectionTitle
          title="Explore Our Most Popular Courses"
          subtitle="Discover the top-rated courses loved by learners worldwide and start your journey today!"
        />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {popularClasses?.map((course) => (
          <SwiperSlide key={course._id}>
            <div className="bg-[#5584b4] w-full md:h-[70vh] h-[40vh] lg:h-[60vh] flex flex-col justify-between p-4">
              <div className="md:h-[30vh] h-[16vh]">
                <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
              </div>
              <div className="text-white flex-grow">
                <p className="font-semibold md:text-xl">{course?.title}</p>
                <p>Enrolled: {course?.enrollCount}</p>
                <p>Price: ${course?.price}</p>
                <p className="hidden lg:block">
                  <span className="font-semibold">Description:</span> {course?.description}
                </p>
              </div>
              <div className="mt-auto">
                <button
                  onClick={() => handleNavigation(course._id)}
                  className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition block w-fit"
                >
                  See Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCourses;
