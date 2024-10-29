import PropTypes from 'prop-types'
const Connect = ({image,name,role,clickFunction}) => {
  return (
    <div className='flex justify-start items-center space-x-5 w-full'>
        <img src={image} alt="" className='size-12 rounded-full object-cover' />
        <div className="flex flex-col space-y-1">
            <p className='text-sm font-normal'>{name}</p>
            <p className='text-sm font-light'>{role}</p>
            <button onClick={clickFunction} className="outline p-1 px-6 text-sm outline-1 rounded-full">Connect</button>
        </div>
      
    </div>
  )
}

Connect.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    clickFunction: PropTypes.func
}

export default Connect
