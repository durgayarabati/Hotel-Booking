import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'


const HotelCard = ({ room, index }) => {
    return (
        <Link to={`/rooms/${room._id}`} onClick={() => window.scrollTo(0, 0)} key={room._id}>
            <img src={room.images[0]} alt="" className='relative max-w-70 w-full rounded-xl overfolw-hidden bg-white 
        text-gray-500/90 hadow-[0px_4px-rgba(0,0,0,0,05)]  '/>
            {index % 2 === 0 && <p className='px-3 py-3 absolute top-3 left-3 text-x bg-white text-gray-800 
        font-medium rounded-full'>Best Seller</p>}

            <div className='p-4 pt-5'>
                <div className='flex items-center justify-between'>
                    <p className='font-playfair text-xl font-medium text-gray-800'>{room.hotel.name}</p>
                    <div className='flex items-center gap-1'>
                        <img src={assets.starIconOutlined} alt="star-icon" /> 4.5
                    </div>
                </div>
                <div>
                    <img src={assets.locationIcon} alt="location-icon" />
                    <span>{room.hotel.address}</span>
                </div>
                <div className='flex items-center justify-between mt-4'>
                    <p><span className='text-xl text-gray-800'>${room.pricePerNight}</span>/night</p>
                    <button className="px-5 py-2.5 bg-red-500 text-white rounded-full 
hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg">
  Book Now
</button>



                </div>
            </div>

        </Link>
    )
}

export default HotelCard