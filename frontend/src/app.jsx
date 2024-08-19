import React from 'react';

import Home from './Home/Home';  
import Courses from './courses/Courses';
import {Route, Routes } from 'react-router-dom';


export default function App() {
  return (
   <>
    

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
    </Routes>

    
    
   </>
  )
}