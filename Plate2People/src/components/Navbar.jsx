import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { BiSolidDonateHeart } from "react-icons/bi";

import '../CSS/Navbar.css';
function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()
  const Profilepage = () => {
    setIsModalOpen(true);
  };

  const HandleNo=()=>{
    setIsModalOpen(false);
    navigate('/')
  }
  const HandleYes=()=>{
    navigate('/login')

  }
  return (
    <div className='flex bg-black items-center p-3 py-3.5 space-x-16 '>
        <div className='flex flex-row  text-rosepink text-2xl font-merinda mr-72'>Plate2People <BiSolidDonateHeart/> </div>
        <Link to="/" className='text-rosepink text-xl font-merinda hover:scale-110 duration-300 hover:cursor-pointer space-x-8 ml-32'>Home</Link>
        <HashLink to="/#vision" smooth={true} duration={500} className='text-rosepink text-xl font-merinda hover:scale-110 duration-300 hover:cursor-pointer space-x-8'>Our Vision</HashLink>
        <HashLink to="/#motto" smooth={true} duration={500} className='text-rosepink text-xl font-merinda hover:scale-110 duration-300 hover:cursor-pointer space-x-8'>Our Motto</HashLink>

        {isLoggedIn ?(
        <Link to="/donate" className='text-rosepink text-xl font-merinda hover:scale-110 duration-300 hover:cursor-pointer space-x-8'>Donate</Link>
        ) : (<Link to="/login" className='text-rosepink text-xl font-merinda hover:scale-110 duration-300 hover:cursor-pointer space-x-8'>Donate</Link>)}
         {isLoggedIn ?(
        <Link to="/receive" className='text-rosepink text-xl font-merinda hover:scale-110 duration-300 hover:cursor-pointer space-x-8'>Receive</Link>
         ):(<Link to="/login" className='text-rosepink text-xl font-merinda hover:scale-110 duration-300 hover:cursor-pointer space-x-8'>Receive</Link>
         )}
        {!isLoggedIn && (<Link to="/login" className='text-rosepink text-xl font-merinda hover:scale-110 duration-300 hover:cursor-pointer space-x-8'>Login</Link>)}
        {isLoggedIn && (<button className='text-rosepink text-xl font-merinda hover:scale-110 duration-300 hover:cursor-pointer space-x-8'  onClick={Profilepage}><PiSignOutBold  /></button>
        )}
        {isModalOpen && (
            <div className="relative z-0">
              <div className="bg-white p-5 rounded-lg shadow-lg w-72 absolute top-10 left-1/2 transform -translate-x-1/2 z-10" onClick={(e) => e.stopPropagation()}>
                <h1 className="text-center text-lg font-bold relative z-10">Are You Sure!</h1>
                <div className="flex justify-between relative z-0">
                  <button onClick={HandleYes} className="bg-red-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600">
                    Yes
                  </button>
                  <button onClick={HandleNo} className="bg-gray-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600">
                    No
                  </button>
                </div>
              </div>
            </div>

      )}
    </div>
  )
}


export default Navbar