import React from 'react';
import "../Style/Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='Nav_cont'>
        <Link to="/"><p>Scorow</p></Link>
        <Link to="/getdata"><p>All User</p></Link>
      </div>
    </div>
  );
}

export default Navbar;
