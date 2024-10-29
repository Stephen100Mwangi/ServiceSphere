import { FaSpinner } from "react-icons/fa6";
import PropTypes from 'prop-types'

const Loading = ({text}) => {
  return (
    <div className="flex space-x-5 text-sm text-blue mx-auto">
        <p>{text}</p>
      <FaSpinner className='animate-spin'></FaSpinner>
    </div>
  )
}

Loading.propTypes={
    text:PropTypes.string
}

export default Loading
