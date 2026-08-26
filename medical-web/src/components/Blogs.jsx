import React from 'react'
import Button from '../layouts/Button'
import BlogCard from '../layouts/BlogCard'
import img1 from "../assets/images/blog1.jpg"
import img2 from "../assets/images/blog2.jpg"
import img3 from "../assets/images/blog3.jpg"
import img4 from "../assets/images/blog4.jpg"
import img5 from "../assets/images/blog5.jpg"





const Blogs = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24'>
        <div className='flex flex-col items-center lg:flex-row justify-between'>
            <div>
                <h1 className='text-4xl font-semibold text-center lg:text-start'>Latest Post</h1>
                <p className='mt-2 text-center lg:text-start'>Inspiring patient journeys and the latest healthcare developments.</p>
            </div>
            <div className='mt-4 lg:mt-0'>
              < Button title="Our Articles"/>
            </div>
        </div>
        <div>
          <div className='mt-2 flex flex-wrap justify-center gap-5'>
            < BlogCard img={img1} headlines="Our Diabetes clinic" text='This is the story of Joyce who got diagnosed with diabetes but has now been able to manage her condition..'/>
            < BlogCard img={img2} headlines="Our theatre breakthroughs" text='This is one of our anaesthesiologists preparing for a surgery..' />
            < BlogCard img={img3} headlines="Medical check ups" text='Do you know how important it is to not miss your medical check ups..' />
            < BlogCard img={img4} headlines="Our modern laboratory " text='And how it aids in the sustainability goals of the hospital..' />
            < BlogCard img={img5} headlines="Inpatient Care " text='How we take care of our in-patients..' />
          </div>
        </div>
    </div>
  )
}

export default Blogs