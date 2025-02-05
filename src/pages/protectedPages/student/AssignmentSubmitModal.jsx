import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

const AssignmentSubmitModal = ({ task, classId }) => {
  const [requirement, setRequirement] = useState("");

  const axiosSecure = useAxiosSecure();

  const handleSubmit = async () => {
    await axiosSecure.patch("/assignment-count", {
      id: classId,
      aid: task._id,
    });

    Swal.fire({
      title: "Good job!",
      text: `Assignment Submitted`,
      icon: "success",
    });

    const modal = document.getElementById(task._id);
    if (modal) {
      modal.close();
    }

    setRequirement("");
  };

  return (
    <dialog id={task._id} className="modal">
      <div className="modal-box">
        <h2 className="text-xl font-semibold mb-4 ">
          Submit Assignment {task.title}
        </h2>

        <textarea
          required
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="textarea textarea-bordered w-full"
          placeholder="Assignment requirements"
        ></textarea>

        <button onClick={handleSubmit} className="btn-main mt-4">
          Submit
        </button>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

AssignmentSubmitModal.propTypes = {
  task: PropTypes.object,
  classId: PropTypes.string,
};

export default AssignmentSubmitModal;
