const Paypal = () => {
  return (
    <div className="w-screen h-screen font-alata flex relative max-sm:flex-col">
      <div className="h-full pt-20 p-8 flex items-start flex-col justify-start space-y-20 flex-1 bg-white max-sm:w-[50vh] max-sm:p-4 max-sm:space-y-5">
        <p className="text-3xl font-bold font-alata">Service Sphere</p>

        <p className="text-base font-openSans font-thin w-[80%] max-sm:w-full">
          Thank you for choosing our services. To proceed, please complete your
          payment securely using PayPal. Your support means a lot to us, and
          we&apos;re here to ensure a smooth and hassle-free experience. Simply click
          the button below to pay and finalize your order. If you have any
          questions or need assistance, feel free to contact us.
        </p>
        <button className="p-6 py-3 hover:shadow-2xl text-white bg-[#F9A826]">
          Pay with Paypal
        </button>
      </div>
      <div className="h-full relative flex-1 flex justify-center items-center bg-pay max-sm:w-[50vh]">
        <img src="/pay.svg" className="scale-75 absolute -left-48 max-sm:left-[10px]" alt="" />
      </div>
    </div>
  );
};

export default Paypal;
