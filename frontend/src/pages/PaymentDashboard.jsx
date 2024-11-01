import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast'
const PaymentDashboard = () => {
    const [paymentMethod,setPaymentMethod] = useState('');
    const navigate = useNavigate()

    const navigate2Payment = ()=>{
        paymentMethod === "mpesa" ? navigate("/payment/mpesa") : paymentMethod === "paypal" ? navigate("/payment/paypal") : toast.error("Please select a payment method")
    }
    

  return (
    <div id="paymentDashboard" className="w-full h-screen flex bg-back justify-center items-center relative overflow-clip">
        <Toaster position="top-left"></Toaster>
        <div className="text-4xl font-semibold leading-tight max-w-64 max-sm:text-white z-50 absolute top-28 left-5">
            Bring Your <br /> Vision to Life
        </div>
        <img src="./rectangle.svg" className="h-screen absolute z-40 left-0" alt="" />
        <div className="w-[490px] left-[25%] flex justify-evenly items-center bottom-28 absolute z-[1000]">
            <button onClick={() => setPaymentMethod(' ')} className="outline outline-1 rounded-full text-red-600 px-10 p-2 text-base">Cancel</button>
            <button onClick={navigate2Payment} className="rounded-full text-white bg-card px-10 p-2 text-base">Next</button>
        </div>

        <div className="flex flex-col space-y-8 absolute top-[20%] left-[27%] bg-gray z-50 w-[490px] h-[350px] rounded-lg p-5">
            <p className="font-bold text-lg">Select Your Payment Method</p>
            <p className="font-light text-base ">To enjoy our services better you will have to upgrade your pack. Select your payment option here to advance</p>
            <form>
                <div className="flex items-center justify-center space-x-5 my-5 text-blue font-bold">
                    <input value={"paypal"} onChange={()=>setPaymentMethod("paypal")} type="radio" name="payment" id="paypal" checked={paymentMethod === "paypal"}  />
                    <p className="cursor-pointer w-fit p-2 px-10 outline border-blue rounded-full">Paypal</p>
                </div>
                <div className="flex items-center justify-center space-x-5 my-5 text-green font-bold">
                    <input value={"mpesa"} onChange={()=>setPaymentMethod("mpesa")} type="radio" name="payment" id="mpesa" checked={paymentMethod === "mpesa"} />
                    <p className="cursor-pointer w-fit p-2 px-10 outline border-green rounded-full">Mpesa</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PaymentDashboard
