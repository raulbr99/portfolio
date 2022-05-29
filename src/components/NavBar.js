import React from 'react';
import '../App.scss';
import './NavBar.scss'
import 'normalize.css'

import { IoHome, IoPerson, IoConstruct, IoMail } from "react-icons/io5";
import { useHistory } from "react-router-dom";

class NavBar extends React.Component {
  handleHome = () => {
    const history = useHistory();
    let path = "/home"
    history.push(path)
  } 
  render(){
    return (
      <div className='navbar'>
        <div className='icon'>
          <IoHome onClick={this.handleHome}/>
        </div>
        <div className='icon'>
          <IoPerson />
        </div>
        <div className='icon'>
          <IoConstruct />
        </div>
        <div className='icon'>
          <IoMail />
        </div> 
        
        
        
      </div>
    )
  };
}

export default NavBar;