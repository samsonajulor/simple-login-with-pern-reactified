import React from 'react';
import Signup from './component/signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard'
import Login from './component/login/Login'

import './App.css';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
        </Routes>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
