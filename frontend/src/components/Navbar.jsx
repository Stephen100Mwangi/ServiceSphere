import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [mobile,setMobile] = useState(false);
  return (
    <div className="flex justify-between items-center py-0 px-10 mt-0 z-[1000] top-0 max-sm:px-3 relative w-full">
        {/* <p className="text-card text-[28px] font-bold">ServiceSphere</p> */}
        <img src="./service-removebg-preview.png" className="size-32 text-blue max-sm:size-24" alt="" />
        <div className="flex text-white items-center justify-start gap-x-8 max-sm:hidden">
            <p>Home</p>
            <p>About Us</p>
            <p>Community</p>
            <p>Contacts</p>
            <FaUser></FaUser>
        </div>

        
        {
          !mobile && (<IoMdMenu className="text-white sm:hidden" onClick={()=>setMobile(prev=>!prev)}></IoMdMenu>)
        }
        {
          mobile && (<div className="flex text-black p-3 bg-gray shadow-xl items-end space-y-6 flex-col justify-end gap-x-8 sm:hidden absolute right-0 rounded-lg top-8">
            <IoMdClose className="text-red-600 sm:hidden" onClick={()=>setMobile(prev=>!prev)}></IoMdClose>
            <p>Home</p>
            <p>About Us</p>
            <p>Community</p>
            <p>Contacts</p>
            <button className="text-white font-light text-sm bg-card p-2 px-6">My Profile</button>
        </div>)
        }

        
        
      
    </div>
  )
}

export default Navbar
