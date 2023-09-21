import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contactusbg, phone } from '../assets'
import { AppText } from '../Constants'
import SectionHeading from '../Shared/SectionHeading'
import swal from 'sweetalert';
import {  motion } from 'framer-motion'
function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wyffqfn', 'template_0gx671a', form.current, '2yzfK1yHI6ubbwlgl')
      .then((result) => {
        console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      swal("Thank you!", "Have a great day!", "success");
  };
  
  return (
    <div  id="contact" className='flex flex-col justify-center mt-5'>
        <div className='flex flex-row  justify-center '>
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us}/>
        <img src={phone} className="w-[80px] ml-4"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44 '>
        
        <motion.img transition={{ duration: 3,delay: 0.1 }} whileHover={{scale:1.5,opacity:1.5}} src={contactusbg} className="w-[300px] "/>
           <div className= 'w-full'>
          
           <form  ref={form} onSubmit={sendEmail} className='flex flex-col '>
           <label className='text-black '>Name</label>
           <input type="text"  placeholder='yourr name'  name="to_name"
            className='border-[1.5px] px-2 bordergray-300 
            hover:border-gray-500 rounded-md '
            />
          <label className='text-black '>Email</label>
           <input type="text"  placeholder='yourname@gmail.com' name="from_name"
            className='border-[1.5px] px-2 bordergray-300 
            hover:border-gray-500 rounded-md ' 
             />
            <label className='text-black '>Messsage</label>
           <textarea type="text" rows={4} placeholder='Type your message here' name='message'
            className='border-[1.5px] px-2 hover:border-gray-500 border-gray-300 rounded-md' 
             />
             <input type="submit" value="Send" className='transition-all ease-in-out hover:scale-110 bg-gray-300 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-black  rounded-md' />
            </form>

         
           </div>
           
           
        </div>
    </div>
  )
}

export default ContactUs        