import React from 'react'
import {NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <div id='navbar'>
      
        <NavLink className="button"
            exact 
            to="/"
          ><button >Home</button></NavLink>

        <NavLink className="button"
              exact
              to="/genres"
            ><button >Genres</button></NavLink>

        <NavLink className="button"
              exact
              to="/games"
            ><button >Games</button></NavLink>

          <NavLink className="button"
              exact
              to="/about"
            ><button >About</button></NavLink>
    </div>    
  )
}

export default Navbar