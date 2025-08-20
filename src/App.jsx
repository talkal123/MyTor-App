import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Business from './pages/Business';
import './App.css'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import BusinessById from './pages/BusinessById';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/business/category/:newCategory" element={<Business />} />
        <Route path="/business/id/:id" element={<BusinessById />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App
