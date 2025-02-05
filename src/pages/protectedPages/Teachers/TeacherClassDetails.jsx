import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useClassById from "../../../hooks/useClassById";
import Loading from "../../../components/Loading";
import SectionTitle from "../../../components/SectionTitle";
import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TeacherClassDetails = () => {
  const [classData, isLoading, refetch] = useClassById();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const totalSubmitCount = classData?.assignments?.reduce((acc, assignment) => acc + assignment.submitCount, 0);

  const onSubmit = async (data) => {
    const res = await axiosSecure.patch(`/class/assignment/${classData._id}`, {
      ...data,
      submitCount: 0,
    });

    if (res.data.modifiedCount <= 0) {
      alert("Add failed");
    }

    Swal.fire({
      title: data.title,
      text: "Assignment added Successfully!",
      icon: "success",
    });
    refetch();
    const modal = document.getElementById("my_modal_3");
    modal.close();
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen px-4">
      <SectionTitle title="Class Details" />
      <div className=" grid md:grid-cols-3 grid-cols-1 gap-4 mt-12">
        {/* Progress */}
        <div className="card bg-base-100  shadow-xl border border-gray-500 ">
          <div className="card-body">
            <h2 className="card-title">Class progress</h2>
            <p>Total Enrollment: {classData?.enrollCount}</p>
          </div>
        </div>

        {/* Assignment  */}
        <div className="card bg-base-100 shadow-xl border border-gray-500 ">
          <div className="card-body">
            <h2 className="card-title">Class Assignments</h2>
            <p>Total Assignment: {classData.assignments.length}</p>
          </div>
        </div>

        {/* Assignment submission */}
        <div className="card bg-base-100 shadow-xl border border-gray-500 ">
          <div className="card-body">
            <h2 className="card-title">Assignments Submission</h2>
            <p>Total Assignment: {totalSubmitCount}</p>
          </div>
        </div>
      </div>
      <button
        className="btn-main my-6 "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <FaPlus />
        Create Assignment
      </button>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Assignment Title</th>
              <th>Deadline</th>
              <th>Total Marks</th>
              <th>Total Submit</th>
            </tr>
          </thead>
          <tbody>
            {classData.assignments.map((assignment, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{assignment.title}</td>
                <td>{assignment.deadline}</td>
                <td>{assignment.totalMarks}</td>
                <td>{assignment.submitCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for add assignment */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* assignment add form */}
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Title */}
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Title</span>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                placeholder="Assignment Title"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </label>

            {/* Deadline */}
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Deadline</span>
              <input
                {...register("deadline", { required: "Deadline is required" })}
                type="date"
                placeholder="Deadline"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.deadline && (
                <span className="text-red-500 text-sm">
                  {errors.deadline.message}
                </span>
              )}
            </label>

            {/* Total Marks */}
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Marks</span>
              <input
                {...register("totalMarks", {
                  required: "Total Marks are required",
                })}
                type="number"
                placeholder="Total Marks"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.totalMarks && (
                <span className="text-red-500 text-sm">
                  {errors.totalMarks.message}
                </span>
              )}
            </label>

            {/* Description */}
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Description</span>
              <textarea
                {...register("details", {
                  required: "Description is required",
                })}
                className="textarea textarea-bordered"
                placeholder="Assignment Details"
              ></textarea>
              {errors.details && (
                <span className="text-red-500 text-sm">
                  {errors.details.message}
                </span>
              )}
            </label>

            <input type="submit" value="Create" className="btn-main" />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default TeacherClassDetails;
