import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import behance from '../../public/behance.png';

export default function Navbar() {
  const [isnav, setisnav] = useState(false);

  const handlenav = () => {
    setisnav(!isnav);
  };

  return (
    <>
      <nav className="shadow-md fixed w-full z-50 top-0 left-0 bg-slate-100">
        <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-black font-[poppins]">
          <div className="flex space-x-2">
            <img className="h-12 w-12 border-y rounded-[50%] px-1" src={behance} alt="behance" />
            <h1 className="m-2 w-full text-3xl font-bold text-[#40188b]">Alpha Blog</h1>
          </div>
          
          <ul className="hidden lg:flex space-x-8 justify-end items-center gap-12 font-[poppins] text-xl">
            <li className="hover:text-indigo-500">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-indigo-500">
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li className="hover:text-indigo-500">
              <Link to="/BlogForm">AddBlog</Link>
            </li>
            
            <li className="hover:text-indigo-500">
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
          
          <div className="block lg:hidden" onClick={handlenav}>
            {isnav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
        
        {isnav && (
          <div className="absolute top-20 left-0 w-full h-screen bg-neutral lg:hidden">
            <ul className="flex flex-col gap-8 py-20 text-2xl font-[poppins] justify-center items-center">
              <li className="hover:text-indigo-300">
                <Link to="/" onClick={handlenav}>Home</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/Blogs" onClick={handlenav}>Blogs</Link>
              </li>
              <li className="hover:text-indigo-300">
                <Link to="/BlogForm" onClick={handlenav}>BlogForm</Link>
              </li>
              
              <li className="hover:text-indigo-300">
                <Link to="/signup" onClick={handlenav}>SignUp</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Add top padding to avoid content overlap */}
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
}
