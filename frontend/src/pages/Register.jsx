import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import toast, {Toaster} from "react-hot-toast";
import Loading from "../components/Loading";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("")

  const localUrl = import.meta.env.LOCAL_URL;
  const remoteUrl = import.meta.env.REMOTE_URL;
  const baseURL = remoteUrl || localUrl;

  const registerUser = async (e) => {
    e.preventDefault();

    if ((!username, !email, !password, !confirmPassword)) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password must match");
      return;
    }

    try {
        setLoading(true)
      const response = await fetch(`${baseURL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        toast.error(data.message || "Error registering user");
        return;
      }

      toast.success("Success creating user")
      sessionStorage.setItem("serviceToken",data.token)
      setTimeout(() => {
        navigate("/hero")
      }, 1500);
      return;
    } catch (error) {
      toast.error("Failed to register. Please try again");
      console.log(error.message);
      return;
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
        <Toaster position="top-left"></Toaster>
      <form className="m-auto py-9 px-4 flex flex-col gap-y-6 bg-gray rounded-lg">
        <h1 className="font-bold text-2xl text-center">Sign Up Here</h1>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-6">
            <div className="flex flex-col p-2.5 space-y-1.5">
              <label htmlFor="username">Username</label>
              <input
                className="py-2 pl-3 pr-4"
                type="text"
                name="username"
                id="username"
                placeholder="Input your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col p-2.5 space-y-1.5">
              <label htmlFor="email">Email</label>
              <input
                className="py-2 pl-3 pr-4"
                type="email"
                name="email"
                id="email"
                placeholder="someone@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-x-6">
            <div className="flex flex-col p-2.5 space-y-1.5">
              <label htmlFor="password">Password</label>
              <input
                className="py-2 pl-3 pr-4"
                type="password"
                name="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col p-2.5 space-y-1.5">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="py-2 pl-3 pr-4"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-center px-4">
            <p>Already Have an account</p>
            <Link to="/login" className="text-card">
              Sign In
            </Link>
          </div>
          {loading && (
            <Loading text={"Signing in user Processing...."}></Loading>
          )}

          {!loading && (
            <Button
              clickFunction={registerUser}
              text={"Register"}
              color={"white"}
              bgColor={"card"}
            ></Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Register;
