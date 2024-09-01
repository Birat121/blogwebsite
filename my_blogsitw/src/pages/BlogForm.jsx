import React from 'react';
import { useForm } from 'react-hook-form';
import { useBlogs } from '../context/blogcontent'; // Ensure the path is correct
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

function BlogForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { blogs, setBlogs } = useBlogs();

  const onSubmit = async (data) => {
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('imageurl', data.image[0]); // Append the file directly

    try {
      // Send the form data to the backend API
      const response = await axios.post('http://localhost:5000/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Add the new blog to the existing blogs list
      setBlogs([response.data, ...blogs]); // Add the newly created blog to the top of the list
    } catch (error) {
      console.error('Error adding blog:', error);
      alert('Failed to add the blog. Please try again.');
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-slate-300">
        <div className="max-w-7xl p-8 space-y-3 bg-slate-400 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Add a New Blog</h1>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black font-bold text-xl">Title</span>
              </label>
              <input
                type="text"
                placeholder="Blog Title"
                className="input input-bordered w-full"
                {...register('title', { required: 'Title is required' })}
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black text-xl font-bold">Description</span>
              </label>
              <textarea
                placeholder="Blog Description"
                className="textarea textarea-bordered w-full"
                {...register('description', { required: 'Description is required' })}
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black text-xl font-bold">Image</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                {...register('image', { required: 'Image is required' })}
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral w-full rounded-full text-white text-xl">Add Blog</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogForm;
