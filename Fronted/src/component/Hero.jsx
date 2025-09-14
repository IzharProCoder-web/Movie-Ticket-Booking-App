import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRightIcon, Calendar, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-[url("./assets/backgroundImage.png")] bg-cover bg-center  w-full h-screen  px-6 md:px-16 lg:px-36 flex flex-col items-start justify-center gap-2 '>

    <img src={assets.marvelLogo} className='w-[173px] h-[39px]'/>
    <h1 className='text-[64px] font-semibold leading-[117%]'>Guardians<br /> of the Galaxy</h1>
    <div className='flex gap-3 items-center justify-center '>
        <p>Action | Adventure | Sci-Fi</p>
        <div  className='flex items-center justify-center gap-1 '>
            <Calendar width={18}/>
            <p className=''>2018</p>
        </div>
        <div  className='flex items-center justify-center gap-1 '>
            <Clock width={18}/>
            <p className=''>2h 8m</p>
        </div>
    </div>
    <p className='w-[450px] my-8'>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>

   <div onClick={() => navigate('/movies')} className='flex items-center justify-center  bg-primary hover:bg-primary-dull py-3 px-5 rounded-[32px]'>
    <button>
        Explore Movies
    </button>
    <ArrowRightIcon />
   </div>

     
    </div>
  )
}

export default Hero
