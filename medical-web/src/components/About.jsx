import React from 'react'
import image from '../assets/images/about.jpg'


const About = () => {
  return (
    <div className='min-h-screen justify-center items-center px-5 py-12 lg:px-32 lg:pt-32 pt-24 gap-5'>
        <div className=' w-full flex items-center space-y-5 gap-5 pt-10'>
        <div>
            <h1 className='mb-4 text-4xl font-semibold sm:text-4xl leading-tight'> About Us</h1>
            <p className='text-justify break-words'>
                At GoodLife, we take the guesswork out of finding the right doctors, hospitals, and care for you and your family. 
                By making healthcare easier and more transparent. GoodLife empowers you to make decisions based on information,
                not just instinct. You can rest easy knowing that you and your family are receiving proven, 
                high quality care that's right for you.
            </p> 
             </div>
            <div className=' shadow-xl overflow-hidden object-cover md:flex'>
                <img className='w-full lg:w-3/4 rounded-lg' src={image} alt='two doctors' />

            </div>

        </div>
    </div>
  )
}

export default About