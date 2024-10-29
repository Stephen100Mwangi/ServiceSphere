import Navbar from "../components/Navbar";
import Connect from "../components/Connect";
import ProjectCard from "../components/ProjectCard";
import { LuUnplug } from "react-icons/lu";
import { VscBellDot } from "react-icons/vsc";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiTruckTrailerThin } from "react-icons/pi";
import { VscChecklist } from "react-icons/vsc";
import { RiLogoutCircleLine } from "react-icons/ri";
import { GoInfo } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { LuCopyright } from "react-icons/lu";
import { useState } from "react";

const Dashboard = () => {
  const [showInfo,setShowInfo] = useState(false)
  return (
    <div
      id="dashboard"
      className="w-full h-screen overflow-clip px-8 flex flex-col justify-center space-y-0 max-sm:h-fit max-sm:px-5"
    >
      <Navbar></Navbar>
      <div className="h-screen grid grid-cols-6 gap-5 max-sm:flex max-sm:flex-col max-sm:gap-y-3">
        <div className="rounded-lg col-span-1 flex flex-col space-y-6 h-[calc(100vh-150px)] bg-gray z-[1000] p-2 py-5 max-sm:hidden max-lg:hidden max-xl:hidden">
          <div className="avatar flex justify-start space-x-3 items-center">
            <img
              src="./profile.png"
              alt=""
              className="size-12 object-cover rounded-full"
            />
            <p className="text-base font-bold">John Doe</p>
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
            <div className="count"></div>
            <div className="title flex space-x-3">
              <VscBellDot></VscBellDot>
              <p>Notifications</p>
            </div>
          </div>
          <div className="flex items-center justify-start text-red-600 space-x-5 absolute bottom-10">
            <RiLogoutCircleLine></RiLogoutCircleLine>
            <p>Log Out</p>
          </div>
        </div>
        <div className="rounded-lg flex flex-col space-y-10 justify-start col-span-3 items-start h-[calc(100vh-150px)] overflow-scroll overflow-x-hidden noScrollbar bg-gray z-[1000] max-sm:z-[800] max-sm:h-[calc(100vh-120px)] max-lg:col-span-4">
          <ProjectCard
            sender={"Joe M"}
            likes={"11 Likes and  8 reposts"}
            profile={"./bike.jpg"}
            career={"Mechanical Engineer"}
            time={"1 week ago"}
            name={"Joe M"}
            image={"./bike.jpg"}
            impressions={"Alex M and 18 others "}
            text={
              "Petroleum based energy is often revealing is ugly face.Environmental hazards, Health complications, unreliability due to its nonrenewable state...But the catch is here. The future is bright in the EV way. Explore this ingenious innovation."
            }
            title={
              "Amazing Innovation: Electric Powered bike that is as efficient as you could imagine"
            }
          ></ProjectCard>
          <ProjectCard
            sender={"Joe M"}
            likes={"11 Likes and  8 reposts"}
            profile={"./bike.jpg"}
            career={"Mechanical Engineer"}
            time={"1 week ago"}
            name={"Joe M"}
            image={"./bike.jpg"}
            impressions={"Alex M and 18 others "}
            text={
              "Petroleum based energy is often revealing is ugly face.Environmental hazards, Health complications, unreliability due to its nonrenewable state...But the catch is here. The future is bright in the EV way. Explore this ingenious innovation."
            }
            title={
              "Amazing Innovation: Electric Powered bike that is as efficient as you could imagine"
            }
          ></ProjectCard>
          <ProjectCard
            sender={"Joe M"}
            likes={"11 Likes and  8 reposts"}
            profile={"./bike.jpg"}
            career={"Mechanical Engineer"}
            time={"1 week ago"}
            name={"Joe M"}
            image={"./bike.jpg"}
            impressions={"Alex M and 18 others "}
            text={
              "Petroleum based energy is often revealing is ugly face.Environmental hazards, Health complications, unreliability due to its nonrenewable state...But the catch is here. The future is bright in the EV way. Explore this ingenious innovation."
            }
            title={
              "Amazing Innovation: Electric Powered bike that is as efficient as you could imagine"
            }
          ></ProjectCard>
          <ProjectCard
            sender={"Joe M"}
            likes={"11 Likes and  8 reposts"}
            profile={"./bike.jpg"}
            career={"Mechanical Engineer"}
            time={"1 week ago"}
            name={"Joe M"}
            image={"./bike.jpg"}
            impressions={"Alex M and 18 others "}
            text={
              "Petroleum based energy is often revealing is ugly face.Environmental hazards, Health complications, unreliability due to its nonrenewable state...But the catch is here. The future is bright in the EV way. Explore this ingenious innovation."
            }
            title={
              "Amazing Innovation: Electric Powered bike that is as efficient as you could imagine"
            }
          ></ProjectCard>
        </div>
        <div className="rounded-lg relative col-span-2 h-[calc(100vh-150px)] flex flex-col space-y-5 justify-start items-center p-2 py-5 overflow-scroll overflow-x-hidden noScrollbar bg-gray z-[1000] max-sm:hidden">
            <div className="flex justify-between w-[90%] mx-auto">
                <p>Expand Your network</p>
                <GoInfo className="cursor-pointer" onClick={()=>setShowInfo(prev => !prev)}></GoInfo>
            </div>
            <div className="w-[90%] flex flex-col space-y-3">
                <Connect role={"Plumber"} image={"./person.jpg"} name={"Steve Mwangi"}></Connect>
                <Connect role={"Plumber"} image={"./person.jpg"} name={"Steve Mwangi"}></Connect>
                <Connect role={"Plumber"} image={"./person.jpg"} name={"Steve Mwangi"}></Connect>
                <Connect role={"Plumber"} image={"./person.jpg"} name={"Steve Mwangi"}></Connect>
                <Connect role={"Plumber"} image={"./person.jpg"} name={"Steve Mwangi"}></Connect>
            </div>
            {
              showInfo && (<p className="p-2 rounded-md left-5 w-[80%] z-[1200] bg-back text-sm font-light absolute top-5">Expand your network by connecting with other people. This will allow you to view more jobs and get more  potential clients</p>)
            }
            <div className="bg-back text-sm w-[90%] font-thin flex justify-between p-2 items-center rounded-lg">
                <p>View All Recommendations</p>
                <FaEye></FaEye>
            </div>
            <img src="./customers.jpg" className="w-[90%] h-56 object-cover rounded-md mx-auto" alt="" />
            <footer className="flex justify-center items-center flex-col my-5 space-y-3 text-sm w-[90%]">
                <ul className="flex justify-evenly w-full text-sm font-normal">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contacts</li>
                    <li>Our Partners</li>
                </ul>
                <div className="flex justify-between w-full mx-auto">
                    <div>ServiceSphere 2024</div>
                    <div className="flex items-center space-x-3 justify-center">
                        <LuCopyright></LuCopyright>
                        <p>All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
