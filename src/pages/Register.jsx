import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";

const Register = () => {
    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     const form = e.target;

    //     const name = form.name.value;
    //     const photoURL = form.photo.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const userInfo = { name, photoURL, email, password };
    // }
    const { register, handleSubmit } = useForm()
    const onSubmit = (registrationData) => {
        console.log(registrationData)
    }
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            {/*  */}
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="card bg-base-100 w-full mx-5 md:w-10/12 my-6 lg:w-1/3 shadow-2xl">
                        <h2 className="text-2xl font-bold text-center pt-6">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* NAME */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter your name</span>
                                </label>
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                    className="input input-bordered rounded-full"
                                    required
                                />
                            </div>
                            {/* EMAIL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="input rounded-full input-bordered"
                                    required
                                />
                            </div>
                            {/* PHOTO URL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    {...register("photoUrl")}
                                    type="text"
                                    placeholder="photo url"
                                    name="photo"
                                    className="input rounded-full input-bordered"
                                    required
                                />
                            </div>
                            {/* PASSWORD */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password")}
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    className="input rounded-full input-bordered"
                                    required
                                />
                            </div>
                            <p className="hover:underline">
                                <Link to="/signIn">
                                    Already have an account ?
                                    <span className="text-blue-700 font-bold underline pl-1">
                                        Sign In
                                    </span>
                                </Link>
                            </p>
                            <div className="form-control mt-6">
                                <button className="btn btn-success rounded-full text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
