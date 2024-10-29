import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import Button from "../../components/Button";
import toast, { Toaster } from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa";

const Mpesa = () => {
  const [KSH, setKSH] = useState(0);
  const [USD, setUSD] = useState(0);
  const [otp, setOtp] = useState("247247");
  const [otp2, setOtp2] = useState("0758725032");

  useEffect(()=>{
    const ksh2Dollars = async()=>{
        const dollar = Math.floor(KSH/135).toFixed(2);
        setUSD(dollar)
    }
    ksh2Dollars();
  },[KSH])

  useEffect(()=>{
    const dollars2KSH = async()=>{
        const ksh = Math.floor(USD * 135).toFixed(2);
        setKSH(ksh)
    }
    dollars2KSH();
  },[USD])

  const otpStyles = {
    container: "flex justify-center gap-2",
    inputStyle: {
      width: "2.5rem",
      height: "2.5rem",
      padding: "0.5rem",
      border: "1px solid #e5e7eb",
      borderRadius: "0.5rem",
      fontSize: "1.2rem",
      textAlign: "center",
      backgroundColor: "white",
      outline: "none",
      transition: "all 0.2s ease",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
      "&:focus": {
        borderColor: "#10B981",
        boxShadow: "0 0 0 1px rgba(16, 185, 129, 0.1)",
      },
    },
    inputStyles: {
      width: "2rem",
      height: "2rem",
      padding: "0.2rem",
      border: "1px solid #e5e7eb",
      borderRadius: "0.1rem",
      fontSize: "1rem",
      textAlign: "center",
      backgroundColor: "white",
      outline: "none",
      transition: "all 0.2s ease",
      boxShadow: "0 1px 1px rgba(0, 0, 0, 0.05)",
      "&:focus": {
        borderColor: "#10B981",
        boxShadow: "0 0 0 1px rgba(16, 185, 129, 0.1)",
      },
    },
    separator: "text-gray-400 text-xl font-light mx-1",
  };

  const payNow = async (e) => {
    e.preventDefault();

    if (!KSH || KSH <= 0) {
      toast.error("Amount cannot be less than 0");
    }
  };
  return (
    <div className="w-full h-screen bg-gray flex justify-center items-center">
      <Toaster position="top-left"></Toaster>

      <form className="flex flex-col justify-center items-center space-y-6 bg-back shadow-xl rounded-xl p-3 w-[400px]">
        <p className="w-full bg-green p-2 text-white text-center">
          Lipa Na MPESA
        </p>
        <label htmlFor="paybill" className="w-full font-bold text-base">
          Paybill No:
        </label>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="text-gray-300">&nbsp;</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle={otpStyles.containerStyle}
          inputStyle={otpStyles.inputStyle}
          focusStyle={otpStyles.focusStyle}
        />
        <label htmlFor="paybill" className="w-full font-bold text-base">
          Business No:
        </label>
        <OtpInput
          value={otp2}
          onChange={setOtp2}
          numInputs={10}
          renderSeparator={<span className="text-gray-300">&nbsp;</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle={otpStyles.containerStyle}
          inputStyle={otpStyles.inputStyles}
          focusStyle={otpStyles.focusStyle}
        />
        <label htmlFor="amount" className="w-full font-bold text-base">
          Amount
        </label>
        <div className="w-full p-2 flex justify-start items-center space-x-5">
          <p className="font-bold text-sm">KSH</p>
          <input
            value={KSH}
            onChange={(e) => setKSH(e.target.value)}
            type="number"
            placeholder="Amount in KSH"
            className="p-2 outline-none w-full text-base text-black"
          />
        </div>
        <div className="w-full p-2 flex justify-start items-center space-x-5">
          <FaDollarSign></FaDollarSign>
          <input
            value={USD}
            onChange={(e) => setUSD(e.target.value)}
            type="number"
            placeholder="Amount in Dollars"
            className="p-2 outline-none w-full text-base text-black"
          />
        </div>
        <Button
          clickFunction={payNow}
          text={"Pay Now"}
          bgColor={"green"}
          color={"white"}
        ></Button>
      </form>
    </div>
  );
};

export default Mpesa;
