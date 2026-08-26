import React from 'react'

const BlogCard = ({img, headlines, text }) => {
  return (
    <div className='w-full lg:w-1/4 p-2 shadow-lg shadow-gray-600 space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out '>
       <img className='h-64 md:h-96 lg:h-40 w-full rounded-lg' src={img} alt='img' />
       <h1 className='text-lg text-center font-semibold'>{headlines}</h1> 
       <p className='text-center text-sm'>
        {text}  
       </p>
        </div>
  )
}

export default BlogCard