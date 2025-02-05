import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../components/Loading";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const TeacherRequests = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: allRequests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const response = await axiosPublic.get("/applications");
      return response.data;
    },
  });

  const handleStatusUpdate = async (id, status, email) => {
    // console.log(id, status)
    try {
      const response = await axiosPublic.patch(`/applications/${id}/status`, {
        status,
      });

      // User role change
      if (status === "accepted") {
        const res = await axiosPublic.patch(`/user/role/teacher/${email}`);
      }

      Swal.fire({
        title: "Good job!",
        text: `User ${status}`,
        icon: "success",
      });
      refetch();
    } catch (error) {
      console.error(`Failed to update status to ${status}:`, error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#825afa] text-center my-2">
        TEACHER REQUESTS - {allRequests.length}
      </h2>
      <div>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <div>
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Experience</th>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {allRequests.map((request) => (
                      <tr key={request._id}>
                        <td>
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={request?.photoUrl} />
                            </div>
                          </div>
                        </td>
                        <td>{request?.name}</td>
                        <td>{request?.experience}</td>
                        <td>{request?.title}</td>
                        <td>{request?.category}</td>
                        <td>{request?.status}</td>
                        <td className="space-x-2">
                          <button
                            disabled={
                              request.status === "accepted" ||
                              request.status === "rejected"
                            }
                            onClick={() =>
                              handleStatusUpdate(
                                request._id,
                                "accepted",
                                request.email
                              )
                            }
                            className="btn btn-sm btn-success text-white"
                          >
                            Approve
                          </button>
                          <button
                            disabled={
                              request.status === "accepted" ||
                              request.status === "rejected"
                            }
                            onClick={() =>
                              handleStatusUpdate(request._id, "rejected")
                            }
                            className="btn btn-sm btn-error text-white"
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherRequests;
