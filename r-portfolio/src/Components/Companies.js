import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import '../Constants'
import { AppText, CompanyImage } from '../Constants'

const Companies = () => {
 
  return (
    <div  id='companies' className='bg-gray-300 p-5'>
        <div className='flex  flex-col'>
        <SectionHeading firstTitle={ AppText.CompaniesI} secondTitle={AppText.WorkedFor} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-3'>

        <div><ul className='flex flex-col text-align: left '>
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Build user interfaces (UI) and user experiences (UX) using React.js, JavaScript, HTML, and CSS.</ui>
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Create reusable and modular React components to ensure a maintainable and scalable codebase.</ui>
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Implement responsive designs to ensure the application works well on various devices and screen sizes.</ui> 
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Optimize the front-end performance to ensure fast loading times and smooth user interactions.</ui> 
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Use state management libraries like Redux to manage and synchronize application state across components.</ui> 
           </ul></div>
           <div><ul className='flex flex-col 	text-align: left'>
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Designe and develope server-side logic using technologies like Node.js, Express.js frameworks.</ui>
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Implement RESTful APIs or GraphQL endpoints to communicate with the front-end and handle data requests.</ui>
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Integrate with databases (e.g., MySQL, MongoDB) to store and retrieve data efficiently.</ui> 
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Implement authentication and authorization mechanisms to secure the application.</ui>
            <ui className='text-left transition-all ease-in-out group hover:scale-150 text-black'>Optimize the application for performance, including reducing load times and improving the overall user experience.</ui> 
           </ul></div>
            </div>

        

       </div>
    </div>
  )
}

export default Companies