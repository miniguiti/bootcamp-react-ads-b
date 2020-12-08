import React from 'react';
import {Link} from 'react-router-dom'
function NavBar(){
    return(
        <nav>
        <i className="fas fa-bars"></i>
        <div className="logo">
          <i className="fab fa-youtube"></i>
          <h1>BandTube<span>BR</span></h1>
        </div>
        <div className="find">
          <input type="text" />
          <i className="fas fa-search"></i>
        </div>
        <Link to="/logout">
          <i className="fas fa-user"></i>
        </Link>
        
        <i className="fas fa-bell"></i>
      </nav>
    );
}

export default NavBar;