import PropTypes from 'prop-types'

const ImageCard = ({name,image,position}) => {
  return (
    <div className='rounded-tr-3xl rounded-bl-3xl p-5 shadow-xl bg-card text-white flex flex-col gap-y-10 justify-center items-center'>
        <img src={image} loading='lazy' className='h-[250px] w-auto max-sm:min-w-[300px] object-cover' alt="" />
        <div className="flex flex-col space-y-3">
            <div className='text-lg font-medium'>{name}</div>
            <div className='text-base font-light'>{position}</div>
        </div>
        
    </div>
  )
}

ImageCard.propTypes={
    name:PropTypes.string,
    image:PropTypes.string,
    position:PropTypes.string,
}

export default ImageCard
