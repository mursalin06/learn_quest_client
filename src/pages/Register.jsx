import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import registerImg from '../assets/images/register.png';

const Register = () => {
    const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
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
                        
                        const storedUserData = {
                            name: updatedUser.displayName,
                            email: updatedUser.email,
                            role: "student",
                            photoURL: updatedUser.photoURL,
                            createdAt: new Date(parseInt(updatedUser.reloadUserInfo.createdAt)).toLocaleString(),
                            lastLoginAt: new Date(parseInt(updatedUser.reloadUserInfo.lastLoginAt)).toLocaleString(),
                        };
                        axiosPublic.post('/users', storedUserData);

                        Swal.fire({
                            title: "Congrats!",
                            text: "Registration Successful!",
                            icon: "success"
                        });
                        reset();
                        navigate('/');
                    })
                    .catch(() => {
                        Swal.fire({
                            title: "OPPS!",
                            text: "Registration Unsuccessful!",
                            icon: "error"
                        });
                    });
            })
            .catch(() => {
                Swal.fire({
                    title: "OPPS!",
                    text: "Error while creating user!",
                    icon: "error"
                });
            });
    };
    
    return (
        <section>
            <nav className="sticky z-50 top-0 w-full bg-white">
                <Navbar />
            </nav>

            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-base-200 px-4">
                {/* Left: Image */}
                <div className="hidden md:flex w-1/2 justify-center">
                    <img src={registerImg} alt="Register" className="w-3/4 object-cover" />
                </div>
                
                {/* Right: Register Form */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="card bg-base-100 w-full mx-5 md:w-3/4 shadow-2xl">
                        <h2 className="text-2xl font-bold text-center pt-6">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">Enter your name</label>
                                <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">Email</label>
                                <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">Photo URL</label>
                                <input {...register("photoUrl", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">Password</label>
                                <input {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be at least 6 characters long" },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&#]{6,}$/,
                                        message: "Password must include uppercase, lowercase, number"
                                    }
                                })} type="password" placeholder="Password" className="input input-bordered rounded-full" />
                                {errors.password && <span className="text-red-500 text-sm py-2">{errors.password.message}</span>}
                            </div>
                            <p className="hover:underline">
                                <Link to="/signIn">Already have an account?
                                    <span className="text-[#825afa] underline font-bold pl-1">Sign In</span>
                                </Link>
                            </p>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D6C9FF] rounded-full">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Register;
