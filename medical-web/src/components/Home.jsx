import React from 'react'
import Button from '../layouts/Button'
import image from '../assets/images/home.jpg'


const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 text-black text-shadow-yellow-20 text-shadow-sm bg-cover opacity-90 bg-no-repeat' style={{backgroundImage: `url(${image})`}} >
        <div className='w-full lg:w-4/5 space-y-5 mt-10  bg-blue-300/50' >
        <div>
            <h1 className='text-5xl font-bold leading-tight'>Empowering Health Choices for a Vibrant Life Your Trusted..</h1>
            <p className='font-bold'>Expert care across every life stage. Evidence-based women's and family healthcare.</p>
        <Button title="See Services"/>
        </div>
        </div>
    </div>
  )
}

export default Home