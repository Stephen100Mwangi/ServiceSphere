import PropTypes from "prop-types";
const Button = ({ color, bgColor, text, clickFunction, link }) => {
  return (
    <button
      href={link}
      onClick={clickFunction}
      aria-controls="button"
      className={`hover:shadow-2xl bg-${bgColor} text-white bg-card w-fit h-10 px-7 min-w-[200px] mx-auto rounded-sm hover:rounded-lg text-${color}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  text: PropTypes.string,
  clickFunction: PropTypes.func,
  link: PropTypes.string,
};

export default Button;
