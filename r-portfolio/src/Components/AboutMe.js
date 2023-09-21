import React from 'react'
import './../assets'
import {  motion } from 'framer-motion'
import {   laptop, wave} from './../assets'
import { aboutSection, AppText } from '../Constants'

const AboutMe = () => { 
 return (
    <div  id="aboutme" className='mt-[100px]'>
          <img src={wave}  className="w-screen absolute " />
        <div className='w-full bg-white-600 h-[300px]  justify-center items-center'>
        <div className='flex flex-row justify-between absolute'>
            <motion.img 
            initial={{ x: -1000 }}
            animate={{ x:[0,500,0] }}
            transition={{ duration: 5,delay: 0.1 }}
            whileHover={{scale:1.5,opacity:1.5}}
            src={laptop}  className="w-[320px]  md:w-[450px] mt-[-100px] " />
        </div>
            <h1 className='text-black text-[40px] md:text-[50px]  pt-[20px] font-bold text-center'>About <span className='text-black'>Me</span></h1>
            <h1 className='w-full px-10 md:px-48 lg:px-80 mt-[50px] text-black'>{AppText.aboutMeDescripion} </h1>
        </div>
        <div className='flex flex-col md:flex-row mt-[-75px] md:px-32 '>
        {aboutSection.map((item,index)=>(
           <motion.div   transition={{ duration: 3,delay: 0.1 }} whileHover={{scale:1.2,opacity:1.5}}
             key={index} className="flex  relative w-full items-center justify-center flex-col m-2
                group md:hover:bg-gray-600 rounded-lg py-2">
                <img src={item.image} className="w-[230px] rounded-lg h-[170px] object-cover"/>
                <h1 className='font-bold md:group-hover:text-white'>{item.title}</h1>
                <h1 className='text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7'>{item.desc}</h1>
                    </motion.div>
                    ))
            
        }
        </div>
    </div>
   
  )
}

export default AboutMe