import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAllUsers from "../../../hooks/useAllUsers";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading";

const AllUsers = () => {
  const [usersArr, refetch, isLoading] = useAllUsers();
  const [users, setUsers] = useState([]);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  useEffect(()=>{
    setUsers(usersArr)
  },[usersArr])

  const handleMakeAdmin = async (id, role) => {
    // console.log("ID:", id, "ROLE:", role);

    try {
      const response = await axiosPublic.patch(`/users/${id}/role`, { role });
      console.log(`${role} response:`, response.data);
      Swal.fire({
        title: "Congrats!",
        text: `User role Upgraded to ${role}`,
        icon: "success",
      });
      refetch();
    } catch (error) {
      console.error(`Failed to update role to ${role}:`, error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchKey = e.target.search.value;
    const res = await axiosSecure.get(`/search-user?k=${searchKey}`);
    setUsers(res.data);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-[#825afa] text-center my-2">
        ALL USERS - {usersArr.length}
      </h3>

      <form onSubmit={handleSearch} className="join mx-4">
        <label className="input input-bordered flex items-center gap-2 max-w-60 join-item">
          <input
            name="search"
            type="text"
            className="grow"
            placeholder="Search"
          />
        </label>
        <button type="submit" className="btn btn-outline join-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div onClick={()=> setUsers(usersArr)} className="btn btn-outline join-item">Reset</div>
      </form>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((singleUser) => (
                <tr key={singleUser._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={singleUser?.photoURL} />
                      </div>
                    </div>
                  </td>
                  <td>{singleUser?.name}</td>
                  <td>{singleUser?.email}</td>
                  <th>
                    <button
                      onClick={() => handleMakeAdmin(singleUser._id, "admin")}
                      disabled={singleUser.role === "admin"}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaUsers></FaUsers> Make Admin
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
