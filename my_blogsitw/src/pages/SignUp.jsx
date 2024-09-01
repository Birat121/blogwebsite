import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Send user data to the backend
      const response = await axios.post('http://localhost:5000/api/users/signup', data);
      
      // Handle successful response
      console.log(response.data);
      alert('Signup successful!');
      
      // Reset form fields
      navigate('/login');
      reset();
    } catch (error) {
      // Handle error response
      console.error('Error during signup:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-300">
      <div className="w-full max-w-sm p-8 space-y-3 bg-slate-400 rounded-lg shadow">
        <h1 className="text-2xl text-black font-bold text-center">Register Here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black text-xl font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full text-white"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black font-bold text-xl">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl text-black font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full text-xl">Sign Up</button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-black">
            Already have an account?{' '}
            <Link to="/login" className="text-orange-800 hover:underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
