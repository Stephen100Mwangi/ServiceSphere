import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import Button from "../../components/Button";
import toast, { Toaster } from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa";
import { LoaderIcon } from "react-hot-toast";
import { CheckmarkIcon } from "react-hot-toast";

const Mpesa = () => {
  const [KSH, setKSH] = useState(0);
  const [USD, setUSD] = useState(0);
  const [otp, setOtp] = useState("247247");
  const [otp2, setOtp2] = useState("0758725032");

  const [paymentLoading,setPaymentLoading] = useState(false);
  const [paymentSuccessful,setPaymentSuccessful] = useState(false);
  const [showForm,setShowForm] = useState(false)

  useEffect(()=>{
    setUSD(45)
    setKSH(USD*135)
  },[USD])

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

    // if (!KSH || KSH <= 0) {
    //   toast.error("Amount cannot be less than 0");
    // }


    setTimeout(() => {
      setPaymentLoading(prev => !prev);
      clearTimeout();
    }, 1000);

    setTimeout(() => {
      setPaymentLoading(prev => !prev);
    }, 2500);

    setTimeout(() => {
      setPaymentSuccessful(prev => !prev);
    }, 2501);

    setShowForm(false)

    setTimeout(() => {
      setPaymentSuccessful(prev => !prev);
      toast.success("Successful Transaction. Redirecting to another page")
    }, 4500);

    return;
  };
  return (
    <div className="w-full h-screen overflow-clip relative p-0 flex justify-center items-center max-sm:flex-col">
      <div className="h-full pt-20 p-8 flex items-start flex-col justify-start space-y-20 flex-1 bg-white max-sm:h-[50vh] max-sm:pt-4 max-sm:space-y-5 max-sm:p-4">
        <p className="text-3xl font-bold font-alata">Service Sphere</p>
        <p className="text-base font-openSans font-thin w-[80%]">
          We&apos;re delighted to have you here. To finalize your order or access our services, simply make your payment using M-PESA. It&apos;s quick, easy, and secure.
          Ready to complete your payment? Click below to get started. Your support means a lot to us, and we&apos;re here to assist if you need any help along the way.
        </p>

        <button onClick={()=>setShowForm(prev => !prev)} className="text-white bg-[#34B233] p-6 py-3 hover:shadow-2xl">Pay with MPESA</button>


      </div>
      <div className="flex-1 h-screen bg-[#34B23399] relative flex justify-center items-center max-sm:w-[50vh]">
        <img src="/mpesa.svg" className="scale-75 absolute -left-48 max-sm:left-[10px]" alt="" />
      </div>
      <Toaster position="top-left"></Toaster>

      {
       showForm && !paymentLoading && !paymentSuccessful && (<form className="flex flex-col justify-center absolute top-[10px] shadow-2xl left-[250px] max-sm:scale-75 max-sm:top-[10%] max-sm:left-[20px] items-center space-y-4 bg-back rounded-xl p-3 py-5 w-[400px]">
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
            // onChange={(e) => setKSH(e.target.value)}
            readOnly
            aria-readonly
            type="number"
            placeholder="Amount in KSH"
            className="p-2 outline-none w-full text-base text-black"
          />
        </div>
        <div className="w-full p-2 flex justify-start items-center space-x-5">
          <FaDollarSign></FaDollarSign>
          <input
            value={USD}
            // onChange={(e) => setUSD(e.target.value)}
            readOnly
            aria-readonly
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
      </form>)
      }

      

      {
        paymentLoading &&  (<div className="bg-green absolute top-[10%] left-[250px] max-sm:left-[20px] max-sm:top-[15%] max-sm:text-s max-sm:p-3 max-sm:px-6 max-sm:space-x-3 text-white p-5 rounded-md flex space-x-5 px-10 items-center justify-center">
        <p className="text-white">Processing</p>
        <LoaderIcon></LoaderIcon>
      </div>)
      }

      {
        paymentSuccessful && (<div className="bg-white absolute top-[10%] left-[250px] max-sm:left-[20px] max-sm:top-[10%] shadow-md w-fit h-fit max-sm:text-s max-sm:p-3 max-sm:px-6 max-sm:space-x-3 max-sm:flex-col max-sm:space-y-2 text-green p-5 rounded-md flex flex-col space-y-5 px-10 items-center justify-center">
        <div className="flex justify-center items-center space-x-5">
          <p>Success</p>
          <CheckmarkIcon></CheckmarkIcon>
        </div>
        <p className="font-medium">You have successfully completed your transaction.</p>
      </div>)
      }

    </div>
  );
};

export default Mpesa;
