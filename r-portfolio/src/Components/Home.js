import React from 'react'
import './../Constants'
import { AppText } from './../Constants'
import './../assets'
import { homeImage } from './../assets'
import Typewriter from 'typewriter-effect';
import {  motion } from 'framer-motion'

const Home = () => {
  //const transition = {duration: 2,type: 'spring'} 
  
  return (
    <div  className='flex p-[20px] md:px-20 justify-between flex-col md:flex-row'>
<div className='flex w-full flex-row  justify-end'>
        <div className='flex w-full flex-col  items-start content-end'>
            <h1 className='text-[35px] md:text-[40px] font-bold '>{AppText.hello}</h1>
            <div className='flex'>
            <h1 className='text-[35px]  md:text-[40px] font-bold mr-3'>{AppText.Iam}</h1>
            {/* <h1 className='text-[40px]  md:text-[60px] font-bold  text-purple-600'>{AppText.RahulSanap}</h1> */}
            <Typewriter
  options={{
    strings: [AppText.RahulSanap, AppText.FrontedDeveloper,AppText.UIUXDesigner,AppText.BackendDeveloper],
    autoStart: true,
    loop: true,
    
  }}
/>
</div>
<div>
  <h1 className='my-5 text-black'>I am Md khurshid Ansari and I work as Full Stack Developer and currently I am a Freelancer</h1>
</div>
           
        </div>
        </div>
        <div className=' w-full flex  md:justify-end justify-center pt-10 pr-100'>
        
        <motion.img 
            initial={{ x: -1000 }}
            animate={{ x:[0,-500,0] }}
            transition={{ duration: 5,delay: 0.1 }}
            whileHover={{scale:1.5,opacity:1.5}}  src={homeImage} alt=''  className="w-[200px] md:w-[300px]"/>
        </div>
    </div>
  )
}

export default Home