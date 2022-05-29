import '../App.scss';
import './SideBar.scss'
import React from 'react';
import { Link } from 'react-router-dom';
class SideBar extends React.Component {
  render(){
    return (
      <div className='sidebar'>
          <ul>
              <li>
                  <Link to="">Home</Link>
              </li>
              <li>
                  <Link to="">Education</Link>
              </li>
              <li>
                  <Link to="">Projects</Link>
              </li>
              <li>
                  <Link to="">Portfolio</Link>
              </li>
          </ul>
      </div>
    )
  };
}

export default SideBar;