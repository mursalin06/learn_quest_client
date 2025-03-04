import { useContext } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AuthContext from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import { Navigate } from "react-router-dom";

const TeachOnLearnQuest = () => {
  const axiosPublic = useAxiosPublic();
  const { user, setLoading, loading } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["submittedApplication", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/application/${user?.email}`);
      return res.data;
    },
  });

  const { applied, application } = data;

  const onSubmit = (data) => {
    setLoading(true);
    try {
      const newApplicationData = {
        ...data,
        status: "pending",
      };
      // console.log(newApplicationData);
      axiosPublic.post("/applications", newApplicationData);
      Swal.fire({
        title: "Congrats!",
        text: "Application Submitted Successfully!",
        icon: "success",
      });
      refetch();
      reset();
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Opps!",
        text: "Couldn't submit application data!",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  if(loading){
    return <Loading/>
  }

  if (!user) {
    return <Navigate to={"/signIn"} />;
  }

  return (
    <div>
      <nav className="sticky z-50 top-0 w-full bg-white">
        <Navbar></Navbar>
      </nav>
      <section className={`min-h-screen bg-[#F8F9FA] `}>
        <p
          className={` text-center py-4 text-red-600 ${
            applied && application.status === "rejected" ? "" : "hidden"
          }`}
        >
          Your Request has been rejected. You can Request another application{" "}
        </p>
        <div
          className={`${
            applied && application.status === "accepted"
              ? "hidden"
              : applied && application.status === "pending"
              ? "hidden"
              : ""
          }`}
        >
          <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full mx-5 md:w-10/12 my-6 lg:w-2/3 shadow-2xl">
              <h2 className="text-2xl font-bold text-center pt-6">
                Apply for A Job
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* NAME */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter your name</span>
                  </label>

                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>
                {/* IMAGES (who logged in) */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    {...register("photoUrl", { required: true })}
                    type="text"
                    placeholder="photo"
                    readOnly
                    value={user?.photoURL || ""}
                    className="input rounded-full input-bordered"
                    required
                  />
                </div>
                {/* EMAIL */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email"
                    value={user?.email || ""}
                    readOnly
                    disabled
                    className="input rounded-full input-bordered"
                    required
                  />
                </div>
                {/* TITLE */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    placeholder="title"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>
                {/* EXPERIENCE (dropdown) */}
                <label className="form-control w-full rounded-lg">
                  <div className="label">
                    <span className="label-text">Experience</span>
                  </div>
                  <select
                    {...register("experience", { required: true })}
                    className="select select-bordered w-full rounded-lg"
                  >
                    <option disabled selected>
                      Pick your expertise level
                    </option>
                    <option value="Beginner">Beginner</option>
                    <option value="Mid-level">Mid-level</option>
                    <option value="Experienced">Experienced</option>
                  </select>
                </label>
                {/* CATEGORY (dropdown)  */}
                <label className="form-control w-full rounded-lg">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                  <select
                    {...register("category", { required: true })}
                    className="select select-bordered w-full rounded-lg"
                  >
                    <option disabled selected>
                      Pick your preferred category
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                  </select>
                </label>
                <div className="form-control mt-6">
                  <button className="btn btn-success rounded-full text-white">
                    Submit for review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`h-full w-full ${
            applied && application.status === "accepted" ? "" : "hidden"
          } `}
        >
          <h2 className="md:text-3xl text-xl font-semibold text-center mt-14">
            Congratulations! 🎊 Your application has been approved. Access your
            dashboard for next steps and available actions.
          </h2>
        </div>
        <div
          className={`h-full w-full ${
            applied && application.status === "pending" ? "" : "hidden"
          } `}
        >
          <h2 className="md:text-3xl text-xl font-semibold text-center mt-14">
            {" "}
            Your application is currently under review. Please allow some time
            for processing. You will be notified of the decision shortly
          </h2>
        </div>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default TeachOnLearnQuest;
