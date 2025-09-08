import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, TicketPlus, XIcon } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const {user} = useUser();
  const {openSignIn} = useClerk()
  const navigate = useNavigate()
    const { favoriteMovies } = useAppContext();
  
  return (
    <div className="flex justify-between items-center px-6 md:px-16 lg:px-36 py-5 fixed top-0 left-0 z-50 w-full  ">
      <Link to="/" className="w-[145px] h-[27px]">
        <img src={assets.logo} className="w-full" />
      </Link>

      {/* ...... */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium
max-md:text-lg z-50 flex flex-col md:flex-row items-center
max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen
min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md: border
border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? "max-md:w-full rounded-none" : "max-md:w-0"}`}
      >
      <XIcon onClick={() => setIsOpen(!isOpen)} className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"/>
        <Link onClick={() => {setIsOpen(!isOpen); scrollTo(0,0)}} to="/">Home</Link>
        <Link onClick={() => {setIsOpen(!isOpen); scrollTo(0,0)}} to="/movies">Movies</Link>
        <Link onClick={() => {setIsOpen(!isOpen); scrollTo(0,0)}} to="/">Theaters</Link>
        <Link onClick={() => {setIsOpen(!isOpen); scrollTo(0,0)}} to="/">Releases</Link>
        {favoriteMovies.length > 0 && <Link onClick={() => {setIsOpen(!isOpen); scrollTo(0,0)}} to="/favorite">Favorite </Link> }
      </div>
 {/* ...... */}
       <div className="flex justify-center items-center gap-8">
         <Search  className="cursor-pointer md:block hidden" />
      <div className="flex items-center gap-3">
       {
        !user ? ( <button onClick={openSignIn} className="px-7 py-2 bg-primary hover:bg-primary-dull rounded-4xl">
          Login
        </button>) : (
          <UserButton >
          <UserButton.MenuItems >
            <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15}/>} onClick={() => navigate('/my-bookings')} /> 
          </UserButton.MenuItems>
          </UserButton>
        )
       }
        <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer  md:hidden block w-8" />
      </div>
       </div>
    </div>
  );
};

export default Navbar;
