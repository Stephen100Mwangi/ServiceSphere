import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../components/Loading";
import { setAuthToken } from "../../../server/utils/authUtils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const localUrl = import.meta.env.VITE_LOCAL_URL;
  const remoteUrl = import.meta.env.VITE_REMOTE_URL;
  const baseURL = import.meta.env.MODE === "production" ? remoteUrl : localUrl;

  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    console.log("Base URL being used:", baseURL);

    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Check if we received the expected data
        if (!data.token || !data.user) {
          throw new Error("Invalid response format from server");
        }
        // Set the auth token in local storage and axios headers
        setAuthToken(data.token);
        localStorage.setItem("serviceToken", data.token);
        localStorage.setItem("serviceUser", JSON.stringify(data.user));

        toast.success("User login successful");
        navigate("/chat");
      } else {
        toast.error(data.message || "Login failed");
        return;
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Network error. Please try again.");
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen -space-x-5">
      <Toaster position="top-left"></Toaster>
      <img src="./welcome.svg" alt="" className="h-auto scale-90" />
      <form className="py-9 px-4 flex flex-col h-auto gap-y-6 bg-gray rounded-lg">
        <div className="flex flex-col p-2.5 space-y-1.5">
          <label htmlFor="email">Email</label>
          <input
            className="py-2 pl-3 pr-4 outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="someone@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col p-2.5 space-y-1.5">
          <label htmlFor="confirmPassword">Password</label>
          <input
            className="py-2 pl-3 pr-4 outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between w-full gap-x-4 items-center px-4">
          <p>New Here?</p>
          <Link to="/register" className="text-card">
            Create an account
          </Link>
        </div>

        <Link to="/login" className="text-red-500 mx-auto">
          Forgot Password
        </Link>

        {loading && <Loading text={"Signing in user Processing...."}></Loading>}

        {!loading && <Button clickFunction={loginUser} text={"Login"}></Button>}
      </form>
    </div>
  );
};

export default Login;
