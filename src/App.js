import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Components/Hero'
import Form from './Components/Form';

const App = () => {
  return (
    <Router>
  
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/form" element={<Form />} />
     
    </Routes>
   
  </Router>
  )
}

export default App