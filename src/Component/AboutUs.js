import React from 'react'
import LOGO from "../img/logo.png"


export default function AboutUs() {
    return (
        <div>
            <div className='max-w-[1300px] m-auto p-10  flex flex-col items-center justify-center'>
                
                    <p className='text-[22px] text-center md:text-[30px] font-extrabold text-gray-800'>EasyShare:<span className='text-red-500'> Simplifying File Sharing </span>for Everyone</p>
                    <p className='text-center text-[16px]  md:text-[20px] mt-1'>At EasyShare, we believe file sharing should be as effortless as possible. With our platform, you can instantly share files of any type or size, without the hassle of complex steps or accounts. Our goal is simple: to make sharing fast, reliable, and stress-free.</p>
                    <div className='mt-6'>
                        <p className='text-[22px] text-center md:text-[30px] font-extrabold text-gray-800 '>Why Choose <span className='text-red-500'>EasyShare?</span></p>
                        <p className=' text-center text-[16px] mt-1'><span className='font-bold'>Quick & Easy: </span> Upload and share files in seconds—no sign-up required.</p>
                        <p className=' text-center text-[16px]'><span className='font-bold'>Optimized Storage:</span> Set link expirations to keep storage lean and efficient.</p>
                    </div>
                    <p className=' font-normal text-center text-[16px] mt-6'>Join us in transforming file sharing into a seamless experience. EasyShare is here to make connecting and collaborating easier than ever.</p>
                    <img src={LOGO} className='w-[180px] mt-10' alt="logo"/>
                    <p className='text-center text-[16px] mt-1 font-medium'>@ EasyShare All Rights Reserved.</p>
               
            </div>
        </div>
    )
}

//  About Us
// EasyShare: Simplifying File Sharing for Everyone

// At EasyShare, we believe file sharing should be as effortless as possible. With our platform, you can instantly share files of any type or size, without the hassle of complex steps or accounts. Our goal is simple: to make sharing fast, reliable, and stress-free.

// Why Choose EasyShare?
// Quick & Easy: Upload and share files in seconds—no sign-up required.
// Optimized Storage: Set link expirations to keep storage lean and efficient.
// Join us in transforming file sharing into a seamless experience. EasyShare is here to make connecting and collaborating easier than ever.
