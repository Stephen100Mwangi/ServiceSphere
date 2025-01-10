import { useState } from "react";
import Button from "./Button";
import Spinner from "./Spinner";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setLoading] = useState(false);

  const changePassword = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");
      setSuccess("");
      setLoading(true);
      const response = await fetch("http://localhost:4500/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, confirmPassword }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Error resetting password");
        return;
      }

      setError("");
      setSuccess("Password reset successfully");
    } catch (error) {
      console.log(error.message);
      setError("Error resetting password");
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
        <h3>Reset Password</h3>
        <input
          className="py-2 pl-3 pr-4 outline-none"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Input your password"
        />
        <input
          className="py-2 pl-3 pr-4 outline-none"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Repeat your password"
        />

        <p className="text-red-600">{error}</p>

        <Button text="Reset Password" onClick={changePassword} />
        {isLoading && <Spinner text={"Processing..."}></Spinner>}

        <p className="text-green">{success}</p>
      </form>
    </div>
  );
};

export default ResetPassword;
