import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import image1 from '../assets/images/Doctor 1.jpg'
import image2 from '../assets/images/Doctor 2.jpg'
import image3 from '../assets/images/Doctor 3.jpg'
import image4 from '../assets/images/Doctor 1.jpg'
import image5 from '../assets/images/Doctor 8.jpg'
import image6 from '../assets/images/Doctor 1.jpg'
import image7 from '../assets/images/Doctor 8.jpg'






const Doctors = () => {

    


    const data = [
        {
         src: image1,
         name: 'Dr. Mark Mureti',
         specialties: 'Pediatrician'
        },
        {
         src: image2,
         name: 'Dr. Cecilia Ntara',
         specialties: 'Cardiologist',
        },
        {
         src: image3,
         name: 'Dr. Priscilla Owor',
         specialties: 'Orthopedic Surgeon',
        },
        {
         src: image4,
         name: 'Dr. Ali Sadat',
         specialties: 'Orthopedic Surgeon',
        },
        {
         src: image5,
         name: 'Dr. Pendo Kipngetich',
         specialties: 'Orthopedic Surgeon',
        },
        {
          src: image6,
         name: 'Dr. Yaya Toure',
         specialties: 'Orthopedic Surgeon',
        },
        {
          src: image7,
         name: 'Dr. Gladys Makena',
         specialties: 'Orthopedic Surgeon',
        }
    ]

   const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots:true,
                    },
        },

        
        
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            },
        },

        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide:2
            }
        }
    ]
  };
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16'>
        <div className='flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0'>
            <div>
            <h1 className='text-4xl font-semibold text-center lg:text-start '>Our Doctors</h1>
            <p className='mt-2 text-center lg:text-start'>Meet our team of experts who deliver your care.</p>
        </div>
        <div className='flex gap-5 mt-4 lg:mt-0'>
            <button className='bg-sky-100 text-sky-500 px-4 py-2 rounded-lg cursor-pointer active:bg-sky-200'
            onClick={() => slider.current.slickPrev()}>
                <FaArrowLeft size={25}/>

            </button>
            <button className='bg-sky-100 text-sky-500 px-4 py-2 rounded-lg cursor-pointer active:bg-sky-200'
            onClick={() => slider.current.slickNext()}>
                <FaArrowRight size={25}/>
            </button>
            </div>
        </div>
        <div className='mt-5'>
            <Slider ref={slider} { ... settings}>
                {data.map((image) => (
                    <div  
                    key={image.id} >
                        <div className='h-[350px] text-black rounded-xl md:shadow shadow-gray-600 mb-2 cursor-pointer'>
                            <img src={image.src} alt='img' className='h-56 rounded-t-xl w-full'/>
                        

                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-semibold text-xl pt-4'>{image.name}</h1>
                            <h3 className='pt-2'>{image.specialties}</h3>
                        </div>
                        </div>
                    </div>
                )) }

            </Slider>
        </div>
    </div>
  )
}

export default Doctors