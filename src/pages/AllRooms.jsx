import React from 'react'
import { roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating';

const AllRooms = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between
    pt-28 md:pt-35 px-4 md:px-16 lg:px:24'>
        <div>
            <div className='flex flex-col-reverse lg:flex-row items-start justify-between
            pt-28 md:pt-35 px-4 md:px-16 lg:px:24 xl:px-32'>
                <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
                <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our limited-time offers and special packages to 
                    enhance your stay and make your experience unforgettable.
                </p>
            </div>
            {roomsDummyData.map((room)=>(
                <div>
                    <img onClick={()=>navigate(`/rooms/${room._id}`)}
                    src={room.images[0]} alt="Hotel-img" title='View Room Details' 
                    className='max-h-65 md:w1/2 rounded-xl shadow-lg object-cover curor-pointer'/>
                    <div>
                        <p className='text=gray-800 text-3xl font-playfair'>{room.hotel.name}</p>
                        <p>{room.hotel.city}</p>
                        <div className='flex items-center gap-1'>
                            <StarRating/>
                        </div>
                    </div>
                </div>
            )

            )}
        </div>
    </div>
  )
}

export default AllRooms