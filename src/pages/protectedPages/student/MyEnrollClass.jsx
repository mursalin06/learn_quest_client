import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading";
import SectionTitle from "../../../components/SectionTitle";
import { data, Link } from "react-router-dom";

const MyEnrollClass = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myEnroll, isLoading } = useQuery({
    queryKey: ["my-enroll-classes", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-enroll/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <SectionTitle title="My Enrolled Classes" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4 grid-cols-1 gap-2">
        {myEnroll.map((enroll) => {
          const { image, title, name } = enroll.classData;

          return (
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img className="md:h-[200px] w-full object-cover" src={image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <hr />
                <div>
                  <p>
                    <span className="font-semibold">Instructor:</span> {name}
                  </p>
                </div>
                <div className="card-actions justify-center">
                  <Link
                    to={`/dashboard/my-enroll/${enroll._id}`}
                    className="w-full"
                  >
                    <button className="btn-main">Continue</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyEnrollClass;
