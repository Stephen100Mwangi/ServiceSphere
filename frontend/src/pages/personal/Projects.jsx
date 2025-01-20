import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { LuUnplug } from "react-icons/lu";
import { VscBellDot } from "react-icons/vsc";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiTruckTrailerThin } from "react-icons/pi";
import { VscChecklist } from "react-icons/vsc";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import ProjectCard from "../../components/personal/ProjectCard";
import toast, { Toaster } from "react-hot-toast";
const Projects = () => {
  const user = JSON.parse(localStorage.getItem("serviceUser"));
  const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [myProjects, setMyProjects] = useState([]);
  // const [showDeleteModal, setDeleteModal] = useState(false);
  // const [showViewModal, setViewModal] = useState(false);
  // const [showUpdateForm, setUpdateForm] = useState(false);
  // const [showAddProjectForm, setAddProjectForm] = useState(false);

  const deleteProject = async () => {};
  const updateProject = async () => {};
  const viewProject = async () => {};

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("serviceToken");
      const response = await fetch(
        `http://localhost:4500/projects/${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Failed to fetch projects");
      }

      setProjects(data.projects);
    };

    fetchProjects();
  }, [user.id]);

  console.log(projects);

  return (
    <div
      id="myProjectsPage"
      className="w-full h-screen overflow-clip px-8 flex flex-col justify-center space-y-0 max-sm:h-fit max-sm:px-5"
    >
      <Toaster position="top-left"></Toaster>
      <Navbar></Navbar>
      <div className="h-screen grid grid-cols-6 gap-5 max-sm:flex max-sm:flex-col max-sm:gap-y-3">
        <div className="rounded-lg col-span-1 flex flex-col relative space-y-6 h-[calc(100vh-150px)] bg-gray z-[1000] p-2 py-5 max-sm:hidden max-lg:hidden max-xl:hidden">
          <div className="avatar flex justify-start space-x-3 items-center">
            <img
              src="./profile.png"
              alt=""
              className="size-12 object-cover rounded-full"
            />
            <p className="text-base font-bold">{user.username}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="title flex space-x-5 items-center justify-start">
              <VscChecklist></VscChecklist>
              <p>Projects</p>
            </div>
            <div className="count rounded-full size-8 flex justify-center items-center text-white bg-blue text-xs">
              120
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="title flex space-x-5 items-center justify-start">
              <LuUnplug></LuUnplug>
              <p>Connections</p>
            </div>
            <div className="count rounded-full size-8 flex justify-center items-center text-white bg-card text-xs">
              890
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="title flex space-x-5 items-center justify-start">
              <PiTruckTrailerThin></PiTruckTrailerThin>
              <p>Deliveries</p>
            </div>
            <div className="count rounded-full size-8 flex justify-center items-center text-white bg-green text-xs">
              70
            </div>
          </div>
          <div className="flex items-center justify-start">
            <div className="title flex space-x-5 items-center justify-start">
              <RiVerifiedBadgeFill></RiVerifiedBadgeFill>
              <p>Premium Plan</p>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <div className="title flex space-x-3">
              <VscBellDot></VscBellDot>
              <p>Notifications</p>
            </div>
          </div>
          <div className="flex items-center justify-start">
            <div className="title flex space-x-3">
              <MdOutlineCreateNewFolder></MdOutlineCreateNewFolder>
              <p>Create a Project</p>
            </div>
          </div>
          <div className="flex items-center justify-start absolute text-red-600 space-x-5 bottom-10">
            <RiLogoutCircleLine></RiLogoutCircleLine>
            <p>Log Out</p>
          </div>
        </div>
        <div className="col-span-5 flex justify-center items-center gap-8 h-[calc(100vh-150px)] z-[800] flex-col space-y-1">
          <h1 className="text-2xl text-white font-bold">My Projects</h1>
          <div className="flex flex-wrap gap-20 overflow-scroll noScrollbar w-full justify-evenly rounded-lg items-start pt-5">
            {projects.map((eachProject) => (
              <ProjectCard
                deleteFunc={deleteProject}
                key={eachProject.id}
                updateFunc={updateProject}
                viewFunc={viewProject}
                title={eachProject.title}
                text={eachProject.description}
                image={"bike.jpg"}
              ></ProjectCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
