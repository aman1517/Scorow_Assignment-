import React from 'react';
import "../Style/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='Nav_cont'>
        <Link to="/"><p className='routetag'>Home</p></Link>
        <p>Welocme to Scorow</p>
        <Link to="/getdata"><p className='routetag'>All User</p></Link>
      </div>
    </div>
  );
}

export default Navbar;
