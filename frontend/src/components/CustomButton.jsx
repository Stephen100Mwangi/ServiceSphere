import { IoIosArrowDown } from "react-icons/io";
import PropTypes from 'prop-types'

const CustomButton = ({link}) => {
  return (
    <a href={link} className="outline text-white absolute bottom-80 max-sm:bottom-[80%] max-sm:right-4 flex items-center justify-center right-10 space-x-5 rounded-full p-2 px-8 z-[1000]">
      <p>Get Started</p>
      <IoIosArrowDown></IoIosArrowDown>
    </a>
  );
};

CustomButton.propTypes = {
  link: PropTypes.string
}

export default CustomButton;
