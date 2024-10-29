import { useState } from "react";
const PaymentDashboard = () => {
    const [paymentMethod,setPaymentMethod] = useState('');

  return (
    <div id="paymentDashboard" className="w-full h-screen flex bg-back justify-center items-center relative overflow-clip">
        <div className="text-4xl font-semibold leading-tight max-w-64 max-sm:text-white z-50 absolute top-28 left-5">
            Bring Your <br /> Vision to Life
        </div>
        <img src="./hero.svg" alt="" className="w-full absolute top-0 left-0 h-screen object-cover z-10"/>
        <img src="./rectangle.svg" className="h-screen absolute z-40 left-0" alt="" />
        <div className="w-[490px] left-[25%] flex justify-evenly items-center bottom-28 absolute z-[1000]">
            <button className="outline outline-1 rounded-full text-red-600 px-10 p-2 text-base">Cancel</button>
            <button className="rounded-full text-white bg-card px-10 p-2 text-base">Next</button>
        </div>

        <div className="flex flex-col space-y-8 absolute top-[20%] left-[27%] bg-gray z-50 w-[490px] h-[350px] rounded-lg p-5">
            <p className="font-bold text-lg">Select Your Payment Method</p>
            <p className="font-light text-base ">To enjoy our services better you will have to upgrade your pack. Select your payment option here to advance</p>
            <form>
                <div className="flex items-center justify-center space-x-5 my-5 text-blue font-bold">
                    <input value={"paypal"} type="radio" name="payment" id="" />
                    <p className="cursor-pointer w-fit p-2 px-10 outline border-blue rounded-full">Paypal</p>
                </div>
                <div className="flex items-center justify-center space-x-5 my-5 text-green font-bold">
                    <input value={"mpesa"} type="radio" name="payment" id="" />
                    <p className="cursor-pointer w-fit p-2 px-10 outline border-green rounded-full">Mpesa</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PaymentDashboard
