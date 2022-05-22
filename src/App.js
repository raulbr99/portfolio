import './App.scss';
import React from 'react';
import SideBar from './SideBar';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/pages/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='flex'>
        <SideBar />
        <div className='content'>
          <Home/>
        </div>
      </div>

    </Router>
  )
};


export default App;
