import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5000/api/auth/login', data);
      
      // Save token to local storage or state
      localStorage.setItem('token', response.data.token);

      // On successful login, navigate to the home page
      navigate('/home');
    } catch (error) {
      // If login fails, set an error message
      setLoginError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-300">
      <div className="w-full max-w-sm p-8 space-y-3 bg-slate-400 rounded-lg shadow">
        <h1 className="text-2xl text-black font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-black text-xl font-bold">Email</span>
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
          {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full text-xl">Login</button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-black">
            Don't have an account?{' '}
            <Link to="/signup" className="text-orange-800 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
