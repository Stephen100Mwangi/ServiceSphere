import { ImSpinner6 } from "react-icons/im";

// eslint-disable-next-line react/prop-types
const Spinner = ({ text }) => {
  return (
    <div className="flex space-x-3 text-blue items-center justify-center">
      <p>{text}</p>
      <ImSpinner6 className="animate-spin"></ImSpinner6>
    </div>
  );
};

export default Spinner;
