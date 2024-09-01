import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LazyLoad from 'react-lazyload';
import { useBlogs } from '../context/blogcontent'; // Ensure the path is correct

function Blogs() {
  const { blogs, loading, error } = useBlogs();

  if (loading) {
    return <div className="text-center pt-16">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center pt-16 text-red-500">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="pt-16 bg-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text font-bold text-xl tracking-wide uppercase">Latest Blogs</h2>
          <div className="mt-2 border-t-2 border-black inline-block w-24"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <LazyLoad key={index} height={200} offset={100} once>
              <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{blog.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{blog.description}</p>
                </div>
              </div>
            </LazyLoad>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
