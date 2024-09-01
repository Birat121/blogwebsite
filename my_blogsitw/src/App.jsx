import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BlogForm from './pages/BlogForm';
import { BlogProvider } from './context/blogcontent';
const Blogs =React.lazy(()=> import("./pages/Blogs"));

const router= createBrowserRouter([
  {
    path: '/',
    element: <Home/>,

  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />

  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path:'/BlogForm',
    element:<BlogForm/>
  },
  {
    path:'/Blogs',
    element:<React.Suspense fallback={<>Loading...</>}>
      <Blogs/>
      </React.Suspense>
  }
]);



function App() {
  

  return (
    <>
   <BlogProvider>
    <RouterProvider router={router} />
    </BlogProvider>
    
    

    </>
  )
}

export default App;
