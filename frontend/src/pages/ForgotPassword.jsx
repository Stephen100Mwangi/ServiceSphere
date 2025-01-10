import Button from "../components/Button";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setLoading] = useState(false);

  const sendResetLink = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("You must provide an email address");
      return;
    }
    try {
      setError("");
      setSuccess("");
      setLoading(true);

      const response = await fetch("http://localhost:4500/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Error sending reset link");
        return;
      }
      setError("");
      setSuccess(data.message);
    } catch (error) {
      console.log(error.message);
      setError("Error sending reset link");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <form
        action=""
        className="py-9 px-4 flex flex-col w-72 h-auto gap-y-6 bg-gray rounded-lg"
      >
        <h3 className="text-2xl font-medium">Forgot Password</h3>

        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="email" className="font-medium text-[16px]">
            Email
          </label>
          <input
            className="py-2 pl-3 pr-4 outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input your email"
          />
          <div className="text-red-600">{error}</div>
        </div>

        <Button text="Send Reset Link" clickFunction={sendResetLink} />
        {isLoading && <Spinner text={"Processing..."}></Spinner>}
        <Link
          to="/login"
          className={`hover:shadow-2xl hover:bg-white text-black flex items-center justify-between cursor-pointer w-fit h-10 px-7 min-w-[200px] mx-auto rounded-sm hover:rounded-lg`}
        >
          <IoIosArrowRoundBack />
          <p>
            Back to <a href="/login">Login</a>
          </p>
        </Link>

        <p className="text-green">{success}</p>
      </form>
    </div>
  );
};

export default ForgotPassword;
