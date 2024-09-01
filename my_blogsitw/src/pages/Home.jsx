import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import house from '../../public/house.avif';
import blog from '../../public/blog.jpg'
import { Link } from 'react-router-dom';
import FeatureSection from './features';


function Home() {
  return (
    <>
    <Navbar/>
  
    <div className='w-full mx-auto pt-5 px-6 bg-slate-300'>
      <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center text-black tracking-wide'>Hey There.This is a </h1>
        <br/>
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-4xl sm:text-6xl lg:text-7xl '>
        Home Blog Page
        </span>
        <br/>
        <p className='mt-10 text-xl text-center text-gray-500 font-semibold  max-w-4xl font-serif'>Your cozy corner for inspiration, ideas, and everyday stories. Discover a world of inspiration, tips, and personal stories, all from the comfort of your home. </p>
        </div>
        
        <div className='flex justify-center mt-10 '>
          
          <img src={blog}
          alt="house" className='rounded-full w-[300px] border border-orange-600 shadow-orange-600 mx-2 my-4 '/>
        </div>
        <div className='flex justify-center my-7 '>
          <h1 className='rounded-md border border-orange-500 shadow-red-600 py-3 mx-4 px-4 hover:bg-slate-500 text-black animate-float text-2xl lg:text-xl'><Link to="/Blogs">Know More
          </Link> </h1>
        </div>
        <FeatureSection/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Home