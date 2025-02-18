import React from 'react'
import './App.css';
import Rating from './pages/Rating'
import About from './pages/About'
import Cast from './pages/Cast'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      
    <BrowserRouter>

    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyBrand</a>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/rating">Rating</Link></li>
        <li><Link to="/cast">Cast</Link></li>
      </ul>
      <div className="navbar-actions">
        <button className="btn-signup">Sign Up</button>
        <button className="btn-login">Log In</button>
      </div>
    </nav>

    <Routes>

      <Route path='/about' element={<About/>}/>
      <Route path='/cast' element={<Cast/>}/>
      <Route path='/rating' element={<Rating/>}/>


    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
