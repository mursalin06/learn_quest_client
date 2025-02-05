import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BaseURL,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
