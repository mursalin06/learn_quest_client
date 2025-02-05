import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {

    const { login, googleSignIn, setUser } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()

    const onSubmit = (data) => {
        // console.log(data)
        login(data.email, data.password)
            .then((res) => {
                // console.log("Logged in successfully!");
                Swal.fire({
                    title: "Congrats!",
                    text: "You're Signed In",
                    icon: "success"
                });
                reset();
                navigate(location.state?.from || "/");
            })
            .catch((err) => {
                console.error(err, "Error occurred while logging in ... ");
                Swal.fire({
                    title: "Ohh Crap!",
                    text: "Failed to Sign in",
                    icon: "error"
                });
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                setUser(result.user);
                Swal.fire({
                    title: "Congrats!",
                    text: "You're Signed In",
                    icon: "success"
                });
                // console.log(result.user);

                navigate(location.state?.from || "/");

                const storedUserData = {
                    name: result.user.displayName,
                    email: result.user.email,
                    role: "student",
                    photoURL: result.user.photoURL,
                    createdAt: new Date(parseInt(result.user.reloadUserInfo.createdAt)).toLocaleString(),
                    lastLoginAt: new Date(parseInt(result.user.reloadUserInfo.lastLoginAt)).toLocaleString(),

                }
                axiosPublic.post('/users', storedUserData);
            })
            .catch((err) => {
                console.error(err, "error while logging in with google");
                Swal.fire({
                    title: "OPPS!",
                    text: "Sign In Unsuccessful!",
                    icon: "error"
                });
            })
    }

    return (
        <section>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full mx-5 md:w-1/3 shadow-2xl">
                    <h2 className="text-2xl font-bold text-center pt-6">Sign In</h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} placeholder="email" name="email" className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="password" name="password" className="input rounded-full input-bordered" required />
                        </div>
                        <p className="hover:underline">
                            <Link to='/register'>
                                Don't have an account ?
                                <span className="text-[#825afa] underline font-bold pl-1">Register</span></Link>
                        </p>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D6C9FF] rounded-full">Sign In</button>
                        </div>
                    </form>
                    <span className="divider mx-10 ">OR</span>
                    <div className="flex justify-center items-center">
                        <button onClick={handleGoogleSignIn} className="btn w-full rounded-full md:w-11/12 mx-10 mb-5">Continue with <span><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg></span></button>
                    </div>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </section>
    );
};

export default Login;