import React from 'react'

const ServicesCard = ({icon, title}) => {
  return (
    <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-lg shadow-gray-600 rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out'>
        <div className='bg-sky-100 p-3 rounded-full transition-colors duration-300 ease-in-out hover:bg-sky-150 '>
            {icon}
        </div>
        <h1 className='font-semibold text-lg'>{title}</h1>
        <p>Inspiring patient journeys and the latest healthcare developments.</p>

        <h3 className='text-sky-400 cursor-pointer hover:text-sky-150 transition duration-300 ease-in-out'>Learn more</h3>
        </div>
  )
}

export default ServicesCard