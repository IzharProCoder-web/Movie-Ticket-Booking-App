import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import MovieCard from './MovieCard'
import { useAppContext } from '../context/AppContext'

const FeaturedSection = () => {
    const navigate = useNavigate()
    const {shows} = useAppContext();
  return (
    <div className='px-6 md:px-16 lg:px-36 overflow-hidden '>

    <div className=' relative flex justify-between items-cente pt-20 pb-10'>
    <BlurCircle top='0 ' right='-80px' /> 
        <p className='font-bold text-xl'>Now Showing</p>
        <button onClick={() => navigate('/movies')} className='flex items-center justify-center gap-2 cursor-pointer'> View All <ArrowRight width={18} /></button>
    </div>
    {/* ...... */}
    
      <div className='flex flex-wrap  items-center justify-center max-sm:justify-center gap-8 mt-8'>
      {shows.slice(0,4).map((show)=> (
        <MovieCard key={show._id} movie={show} />
      ))}
      </div>

      {/* ..... */}

      <div className='flex  items-center justify-center pt-20  '>
        <button onClick={() => {navigate('/movies'); scrollTo(0,0)}} className='bg-primary hover:bg-primary-dull px-10 py-3 rounded-[6px] ' >Show More  </button> 
      </div>
    </div>
  )
}

export default FeaturedSection
