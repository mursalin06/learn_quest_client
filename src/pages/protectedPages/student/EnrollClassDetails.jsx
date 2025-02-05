import { useQuery } from "@tanstack/react-query";
import { ScrollRestoration, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading";
import SectionTitle from "../../../components/SectionTitle";
import AssignmentSubmitModal from "./AssignmentSubmitModal";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const EnrollClassDetails = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");
  const [error, setError] = useState();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data = {}, isLoading } = useQuery({
    queryKey: ["enrolledClass", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enroll-class/${id}`);
      return res.data[0];
    },
  });
  const assignments = data.classData?.assignments;

  const ratingChanged = (e) => {
    setRating(e);
  };
  const textChange = (e) => {
    setText(e.target.value);
  };

  const handleTerSubmit = async () => {
    setError("");
    if (!rating || !text) {
      setError("Please write feedback and give rating");
      return;
    }

    const feedbackInfo = {
      rate: rating,
      feedback: text,
      className: data.classData.title,
      name: data.classData.name,
      postBy: user.displayName,
      avatar: user.photoURL,
    };

    const res = await axiosSecure.post(`/feedback`, feedbackInfo);
    setText("");
    Swal.fire({
      title: "Thanks",
      text: `Feedback Submitted`,
      icon: "success",
    });
    document.getElementById("terModal").close();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="px-4">
      <button
        className="btn-main my-6"
        onClick={() => document.getElementById("terModal").showModal()}
      >
        Teaching Evaluation Report +
      </button>
      <ScrollRestoration />
      <SectionTitle title={"Assignments"} />
      <div>
        <div className="overflow-x-auto max-w-full">
          {assignments.length ? (
            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Marks</th>
                  <th>Details</th>
                  <th>Deadline</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {assignments.map((task, idx) => (
                  <tr
                    key={task._id}
                    className={`${idx % 2 === 0 && "bg-gray-300"}`}
                  >
                    <td>{idx + 1}</td>
                    <td>{task?.title}</td>
                    <td>{task?.totalMarks}</td>
                    <td>{task?.details}</td>
                    <td>{task?.deadline}</td>
                    <td>
                      <button
                        className="btn-main"
                        onClick={() =>
                          document.getElementById(task._id).showModal()
                        }
                      >
                        Submit
                      </button>
                      <AssignmentSubmitModal
                        task={task}
                        classId={data.classData._id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h2>No assignment Yet. Stay tune</h2>
          )}
        </div>
      </div>

      <dialog id="terModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <textarea
              value={text}
              onChange={textChange}
              className="textarea textarea-bordered w-full"
              placeholder="Your Feedback"
            ></textarea>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />

            {error && <p className="text-xs text-red-600">{error}</p>}

            <button onClick={handleTerSubmit} className="btn-main mt-6">
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EnrollClassDetails;
