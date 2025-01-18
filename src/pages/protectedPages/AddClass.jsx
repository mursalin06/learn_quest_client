import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddClass = () => {
    const navigate = useNavigate();
    const { user, setLoading, loading } = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const [file, setFile] = useState(null);
    const axiosPublic = useAxiosPublic();

    const handleFileChange = async (e) => {
        setFile(e.target.files[0]);
    }

    const onClassSubmit = async (data) => {
        if (!file) return Swal.fire({
            title: "Error!",
            text: "Please upload an image file ...",
            icon: "error"
        });
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "learn_quest_preset");
        setLoading(true);
        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/db0iyqtgd/image/upload`, formData);
            const uploadedImageUrl = response.data.url;
            data.image = uploadedImageUrl;

            // 
            const newClassData = {
                ...data,
                status: "pending"
            }
            console.log(newClassData);
            axiosPublic.post('/classes', newClassData);
            Swal.fire({
                title: "Congrats!",
                text: "Class added Successfully!",
                icon: "success"
            });
            setLoading(false);

            if (!loading) {
                reset();
                navigate('/dashboard/my-class')
            }
        } catch (err) {
            console.log(err);
            Swal.fire({
                title: "Error!",
                text: "Failed to add the class, Please try again!",
                icon: "error"
            });
        }
        // finally {
        //     setLoading(false);
        // }
    }


    // console.log(classData, file);

    // const onClassSubmit = data => {

    //  };

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full mx-5 md:w-10/12 my-6 lg:w-1/3 shadow-2xl">
                    <h2 className="text-2xl font-bold text-center pt-6">Add a Class</h2>
                    <form onSubmit={handleSubmit(onClassSubmit)} className="card-body">
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
                        {/* NAME */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name <span className="text-xs text-slate-500">(Readonly)</span></span>
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                value={user?.displayName || ""}
                                placeholder="name"
                                disabled
                                readOnly
                                className="input rounded-full input-bordered"
                            />
                        </div>
                        {/* EMAIL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email <span className="text-xs text-slate-500">(Readonly)</span></span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                disabled
                                value={user?.email || ""}
                                placeholder="email"
                                className="input rounded-full input-bordered"
                                required
                            />
                        </div>
                        {/* PRICE */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="price"
                                className="input rounded-full input-bordered"
                                required
                            />
                        </div>
                        {/* DESCRIPTION */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                {...register("description", { required: true })}
                                type="text"
                                placeholder="description"
                                className="input rounded-full input-bordered"
                                required
                            />
                        </div>
                        {/* IMAGE */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            {/* <input
                                {...register("image", { required: true })}
                                type="text"
                                placeholder="image "
                                className="input rounded-full input-bordered"
                                required
                            /> */}
                            <input
                                {...register("image", { required: true })}
                                type="file"
                                onChange={handleFileChange}
                                className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success rounded-full text-white">Add Class</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;