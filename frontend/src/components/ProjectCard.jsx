import { BiLike } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { PiShareFatThin } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types'

const ProjectCard = ({image,title,text,impressions,likes,sender,career,profile,time}) => {
  return (
    <div className="flex flex-col space-y-3 mx-auto w-[90%] py-3 pb-3">
        <div className="flex justify-between">
            <div className="flex space-x-3 justify-start items-center">
                <img src={profile} alt="" className="size-10 rounded-full object-cover" />
                <div className="flex flex-col space-y-1">
                    <div className="flex flex-col space-y-0">
                        <p className="text-sm font-light">{career}</p>
                        <p className="text-sm font-thin">{time}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-center space-x-2">
                <p className="text-sm font-light">Bookmark</p>
                <CiBookmark></CiBookmark>
            </div>
        </div>
      <img src={image} alt="" className="h-56 w-full object-cover rounded-lg" />
      <p className="text-base font-bold leading-5 line-clamp-1">{title}</p>
      <p className="text-sm font-light leading-6 line-clamp-3">{text}</p>
      <p className="text-sm font-medium text-center leading-6">{sender} on ServiceSphere </p>
      <div className="flex justify-between">
        <p className="text-sm font-normal">{impressions}</p>
        <p className="text-sm font-normal">{likes}</p>
        
      </div>
      <div className="flex space-x-5 w-full justify-evenly pt-4">
        <div className="flex justify-center items-center space-y-1 flex-col">
            <BiLike></BiLike>
            <p className="text-sm font-light">Like</p>
        </div>
        <div className="flex justify-center items-center space-y-1 flex-col">
            <FaRegComment></FaRegComment>
            <p className="text-sm font-light">Comment</p>
        </div>
        <div className="flex justify-center items-center space-y-1 flex-col">
            < AiFillMessage></AiFillMessage>
            <p className="text-sm font-light">Message</p>
        </div>
        <div className="flex justify-center items-center space-y-1 flex-col">
            <FaRetweet></FaRetweet>
            <p className="text-sm font-light">Repost</p>
        </div>
        <div className="flex justify-center items-center space-y-1 flex-col">
            <PiShareFatThin></PiShareFatThin>
            <p className="text-sm font-light">Share</p>
        </div>
      </div>
      
    </div>
  )
}

ProjectCard.propTypes = {
    image:PropTypes.string,
    title:PropTypes.string,
    text:PropTypes.string,
    impressions:PropTypes.string,
    likes:PropTypes.string,
    sender:PropTypes.string,
    career:PropTypes.string,
    profile:PropTypes.string,
    time:PropTypes.string,
}

export default ProjectCard
