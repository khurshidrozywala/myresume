import React from 'react'
import { AppText, socialNetwork } from '../Constants'

const Footer = () => {
  
  return (
    <div className= 'bg-gray-300 mt-20 p-10 items-center flex flex-col  px-10 md:px-80'>
     <div className='flex gap-4'>
        {socialNetwork.map((item,index)=>(
            <div>
             <a href={item.url}>  <img src={item.logo} className="w-[40px]" /></a> 
            </div>
        ))}
        </div>
        <h1 className='text-gray-500 text-[15px] mt-4'>{AppText.copywriteText}</h1>
    </div>
  )
}

export default Footer