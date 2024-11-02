import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-gray h-screen w-full flex justify-center items-center flex-col space-y-10">
      <img src="./lost.svg" className="size-56 animate-bounce max-sm:size-48" alt="" />
      <p className="text-2xl text-red-500 font-bold">
        Oops!! Seems you go lost.
      </p>
      <Link
        to={"/"}
        className="bg-card font-bold flex items-center justify-center space-x-5 text-white p-3 px-10 rounded-full hover:shadow-2xl hover:bg-card hover:text-white transition-all"
      >
        <span className="text-xl">✨</span>
        <p className="text-lg">Back to Home</p>
      </Link>
    </div>
  );
};

export default PageNotFound;
