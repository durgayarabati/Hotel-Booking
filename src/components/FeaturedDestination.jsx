import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
const FeaturedDestination = () => {
    const navigator = useNavigate()
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

            <Title title="Featured Destination" subtitle="The world’s best hotels offer extraordinary luxury, exceptional service, 
  stunning design, and unforgettable experiences in breathtaking locations."/>


            <div className='flex items-center justify-between gap-6 mt-20' >
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />


                ))}
            </div>
            <button
                onClick={() => { navigator('/rooms'); scrollTo(0, 0); }}
                className="px-6 py-3 mt-10 bg-black text-white rounded-full 
             hover:bg-gray-900 transition-all duration-300 
             shadow-md hover:shadow-lg tracking-wide"
            >
                View All Destinations
            </button>

        </div>
    )
}

export default FeaturedDestination