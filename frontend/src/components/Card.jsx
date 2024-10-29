import PropTypes from 'prop-types'

const Card = ({title,text,icon,iconColor}) => {
  return (
    <div className='flex flex-col text-black h-auto bg-back shadow-xl p-4 justify-center items-center space-y-8 w-[250px] max-sm:w-[90%] rounded-lg'>
        <p className={`text-3xl text-${iconColor} text-lg font-bold text-center`}>{title}</p>
        <div className={`text-3xl text-${iconColor}`}>{icon}</div>
        <p className="text-[14px] leading-7 font-thin text-left">{text}</p>
      
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    iconColor:PropTypes.string,
    icon: PropTypes.object
}
export default Card
