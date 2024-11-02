import { LuDelete } from "react-icons/lu";
import { BiEdit } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";
import PropTypes from 'prop-types'

const ProjectCard = ({image,text,title,deleteFunc,updateFunc,viewFunc}) => {
  return (
    <div className="flex flex-col justify-center items-center z-[1000] w-[500px]  bg-back p-4 rounded-md space-y-5">
        <div className="rounded-lg h-[200px] w-[100%] ">
            <img src={image} className="rounded-lg h-[100%] w-[100%] object-cover" alt="" />
        </div>
        <p className="text-xl font-bold line-clamp-1">{title}</p>
        <p className="text-base font-light line-clamp-3">{text}</p>
      <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:space-y-2">
        <div onClick={(projectId)=>deleteFunc(projectId)} className="flex p-2 rounded-sm hover:rounded-full text-white bg-red-600 justify-center space-x-2 cursor-pointer px-5 text-sm  items-center">
          <p>Delete Project</p>
          <LuDelete></LuDelete>
        </div>
        <div onClick={(projectId)=>viewFunc(projectId)} className="flex p-2 rounded-sm hover:rounded-full hover:shadow-xl text-other bg-white justify-center space-x-2 cursor-pointer px-5 text-sm items-center">
          <p>View Project</p>
          <FaEye></FaEye>
        </div>
        <div onClick={(projectId)=>updateFunc(projectId)} className="flex p-2 rounded-sm hover:rounded-full text-white bg-other justify-center space-x-2 cursor-pointer px-5 text-sm items-center">
          <p>Update Project</p>
          <BiEdit></BiEdit>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
    image:PropTypes.string,
    text:PropTypes.string,
    title:PropTypes.string,
    deleteFunc:PropTypes.func,
    updateFunc:PropTypes.func,
    viewFunc:PropTypes.func
}

export default ProjectCard;
