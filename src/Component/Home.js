import React from 'react'
import IMAGE from "../img/homeimg.png"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className='max-w-[1300px] m-auto'>
                <div className='flex flex-col justify-center items-center p-8 '>
                    <p className='text-[22px] md:text-[30px] text-center font-extrabold text-gray-800'>Share Files, Effortlessly, Anytime, Anywhere.</p>
                    <p className='text-[16px] md:text-[20px] text-center '>Making file sharing simple, fast, and reliable – so you can focus on what matters most.</p>
                    <Link to="/upload" className='bg-red-400 hover:bg-red-600 px-6 py-3 rounded-lg font-medium mt-8 text-white'>Share Now</Link>
                    <img src={IMAGE} alt="cover_image" className='w-[400px] md:w-[500px] mt-10' />
                </div>
            </div>
        </div>
    )
}

// Share Files, Effortlessly, Anytime, Anywhere.
// Making file sharing simple, fast, and reliable – so you can focus on what matters most.
// Making file sharing simple, fast, and reliable – so you can effortlessly share your important files, stay organized, and focus on what truly matters, without worrying about storage or security.
