import PropTypes from 'prop-types'
const Button = ({color,bgColor,text,clickFunction}) => {
  return (
    <button onClick={clickFunction} aria-controls='button' className={`hover:shadow-2xl bg-${bgColor} text-white bg-card w-fit h-10 px-7 min-w-[250px] mx-auto rounded-full text-${color}`}>
      {text}
    </button>
  )
}

Button.propTypes={
    color:PropTypes.string,
    bgColor:PropTypes.string,
    text:PropTypes.string,
    clickFunction:PropTypes.func
}

export default Button
