import { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onClassSubmit = data => {
        const newClassData = {
            ...data,
            status: "pending"
        }
        // console.log(newClassData);
        axios.post('http://localhost:5000/classes', newClassData);
    };

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
                            <input
                                {...register("image", { required: true })}
                                type="text"
                                placeholder="image "
                                className="input rounded-full input-bordered"
                                required
                            />
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