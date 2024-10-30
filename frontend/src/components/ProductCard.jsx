import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({title,text,price,benefits,textColor,bgColor}) => {
  const navigate = useNavigate("");
  return (
    <div className={`flex flex-col justify-center items-center shadow-xl p-2 py-8 max-sm:w-[90%] rounded-lg text-${textColor} bg-${bgColor}`}>
        <div className="title font-bold text-lg">{title}</div>
        <div className="title font-normal max-w-[80%] mb-14 mt-3 text-center mx-auto text-base">{text}</div>
        <div className="title font-bold text-xl">{price}</div>
        <button onClick={()=>navigate("/payment")} className='text-center my-6 flex justify-center items-center outline outline-1 rounded-full p-2 px-10'>Get Started</button>
        <div>
            {benefits && benefits.length > 0 && benefits.map((eachBenefit, index) => (
                <p className='leading-9 text-base font-light' key={index}>{eachBenefit}</p>
            ))}
        </div>
      
    </div>
  )
}

ProductCard.propTypes = {
    title:PropTypes.string,
    text:PropTypes.string,
    price:PropTypes.string,
    benefits:PropTypes.arrayOf(PropTypes.string),
    textColor:PropTypes.string,
    bgColor:PropTypes.string,
}

export default ProductCard
