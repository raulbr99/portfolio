import './App.scss';
import React from 'react';
import SideBar from './components/SideBar';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/components/Home'

function App() {
  return (
    <Router>
      <Navbar />
        <div className='content'>
          <Home/>
        </div>
    </Router>
  )
};


export default App;
