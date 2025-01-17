import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
    const { createUser, setUser, updateUserProfile, user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = (registrationData) => {
        createUser(registrationData.email, registrationData.password)
            .then((result) => {
                updateUserProfile(registrationData.name, registrationData.photoUrl)
                    .then(() => {
                        const updatedUser = {
                            ...result.user,
                            displayName: registrationData.name,
                            photoURL: registrationData.photoUrl,
                        };
                        setUser(updatedUser);
                        // necessary data to store in the DB
                        const storedUserData = {
                            name: updatedUser.displayName,
                            email: updatedUser.email,
                            role: "student",
                            photoURL: updatedUser.photoURL,
                            createdAt: new Date(parseInt(updatedUser.reloadUserInfo.createdAt)).toLocaleString(),
                            lastLoginAt: new Date(parseInt(updatedUser.reloadUserInfo.lastLoginAt)).toLocaleString(),

                        }
                        axios.post('http://localhost:5000/users', storedUserData);

                        Swal.fire({
                            title: "Congrats!",
                            text: "Registration Successful!",
                            icon: "success"
                        });
                        reset();
                        navigate('/');
                    })
                    .catch((error) => {
                        console.error("An error occurred while updating user profile:", error);
                        Swal.fire({
                            title: "OPPS!",
                            text: "Registration Unsuccessful!",
                            icon: "error"
                        });
                    });
            })
            .catch((error) => {
                console.error("Error while creating a user:", error);
            });
    };
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
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="name"
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
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="email"
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
                                    {...register("photoUrl", { required: true })}
                                    type="text"
                                    placeholder="photo url"
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
                                    {...register("password", { required: true })}
                                    type="password"
                                    placeholder="password"
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
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Register;
