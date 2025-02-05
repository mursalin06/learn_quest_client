import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import noDataImg from "../../../assets/recruiter/no-data-concept-illustration_114.jpg";
import useMyClasses from "../../../hooks/useMyClasses";
import AuthContext from "../../../context/AuthContext";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Loading from "../../../components/Loading";

const MyClass = () => {
  const axiosPublic = useAxiosPublic();
  const [myClassData, refetch, isLoading] = useMyClasses();
  const { setLoading } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  // console.log(selectedClass)
  const { register, handleSubmit, reset } = useForm();
  // Open modal and populate fields
  const handleOpenModal = (classData) => {
    setSelectedClass(classData);
    reset({
      title: classData.title,
      name: classData.name,
      email: classData.email,
      price: classData.price,
      description: classData.description,
      image: classData.image,
      status: classData.status,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedClass(null);
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    setLoading(true);
    axiosPublic
      .put(`/class/${selectedClass._id}`, data)
      .then(() => {
        Swal.fire("Updated!", "Class details updated successfully.", "success");
        refetch();
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error updating class:", error);
        Swal.fire(
          "Error!",
          "Failed to update class details. Please try again.",
          "error"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // delete operation
  const handleDeleteClass = (id) => {
    setLoading(true);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/class/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Your class has been deleted.", "success");
            refetch();
          })
          .catch((error) => {
            console.error("Error deleting class:", error);
            Swal.fire(
              "Error!",
              "Failed to delete the class. Please try again.",
              "error"
            );
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {myClassData.length === 0 || myClassData === "0" ? (
        <div className="min-h-screen flex justify-center items-center">
          <img src={noDataImg} alt="" />
        </div>
      ) : (
        <section className="my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {myClassData.map((data) => (
              <div
                key={data._id}
                className=" card-compact bg-base-100 shadow-xl"
              >
                <figure className="w-full lg:h-[15vw] md:h-[20vw] h-[50vw]">
                  <img className="w-full h-full object-cover" src={data.image} />
                </figure>
                <div className="card-body">
                  <div className=" flex justify-between items-center">
                    <h2 className="card-title">{data.title}</h2>
                    <div className="badge bg-[#825afa] text-white">
                      {data.status}
                    </div>
                  </div>
                  <hr />
                  <p>
                    <span className="font-semibold">Short Description:</span>
                    {data.description}
                  </p>
                  <div>
                    <p>
                      <span className="font-semibold">Name:</span> {data.name}
                    </p>
                    <p>
                      <span className="font-semibold">Total Enrolment:</span>{" "}
                      {data.totalEnrolment || "0"}
                    </p>
                    <p>
                      <span className="font-semibold">Price:</span>{" "}
                      <span className="font-medium">${data.price}</span>
                    </p>
                  </div>
                  <div className="card-actions justify-center ">
                    <div className="md:flex justify-evenly gap-1">
                      <Link className="w-full">
                        <button
                          onClick={() => handleOpenModal(data)}
                          className="btn-main"
                        >
                          Update
                        </button>
                      </Link>
                      <Link className="w-full">
                        <button
                          onClick={() => handleDeleteClass(data._id)}
                          className="btn btn-sm  text-xs btn-error text-white"
                        >
                          Delete
                        </button>
                      </Link>

                      <button
                        disabled={data.status !== "approved"}
                        className="btn btn-sm  text-xs bg-[#825afa] hover:bg-[#825afa] text-white"
                      >
                        <Link
                          to={`/dashboard/class/${data._id}`}
                          className="w-full"
                        >
                          See Details
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TRY */}

          {onSubmit && selectedClass && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Update Class</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="block mb-2">
                    Title:
                    <input
                      {...register("title")}
                      type="text"
                      name="title"
                      defaultValue={selectedClass.title}
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="block mb-2">
                    Name:
                    <input
                      {...register("name")}
                      type="text"
                      name="name"
                      defaultValue={selectedClass?.name || ""}
                      readOnly
                      disabled
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="block mb-2">
                    Email:
                    <input
                      {...register("email")}
                      type="email"
                      name="email"
                      defaultValue={selectedClass.email}
                      readOnly
                      disabled
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="block mb-2">
                    Price:
                    <input
                      {...register("price")}
                      type="number"
                      name="price"
                      defaultValue={selectedClass.price}
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="block mb-2">
                    Description:
                    <textarea
                      {...register("description")}
                      name="description"
                      defaultValue={selectedClass.description}
                      className="textarea textarea-bordered w-full"
                      required
                    ></textarea>
                  </label>
                  <label className="block mb-2">
                    Image URL:
                    <input
                      {...register("imageUrl")}
                      type="url"
                      name="image"
                      defaultValue={selectedClass.image}
                      className="input input-bordered w-full"
                      required
                    />
                  </label>
                  <label className="block mb-2">
                    Status:
                    <input
                      {...register("status")}
                      type="text"
                      name="status"
                      defaultValue={selectedClass.status}
                      className="input input-bordered w-full"
                      required
                      readOnly
                    />
                  </label>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="btn btn-secondary"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default MyClass;
