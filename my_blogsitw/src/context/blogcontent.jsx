import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Create a context
const BlogContext = createContext();

// Create a provider component
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: to handle loading state
  const [error, setError] = useState(null);    // Optional: to handle errors

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/blogs'); // Replace with your backend URL
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs. Please try again later.');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, loading, error }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use the BlogContext
export const useBlogs = () => {
  return useContext(BlogContext);
};
