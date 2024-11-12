import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from "../img/logo.png"

export default function Nav() {
  return (
    <div>
        <div className='max-w-[1300px] m-auto flex flex-col md:flex-row justify-between items-center p-4'>
            <div>
                <img src={LOGO} alt="logo" className='w-[150px] md:w-[200px]'/>
            </div>
            <div className='flex gap-4 mt-4 md:mt-0'>
                <Link to="/" className='font-normal text-[16px] hover:text-red-500'>Home</Link>
                <Link to="/upload" className='font-normal text-[16px] hover:text-red-500'>Share File</Link>
                <Link to="/about" className='font-normal text-[16px] hover:text-red-500'>About</Link>
            </div>
        </div>
    </div>
  )
}
