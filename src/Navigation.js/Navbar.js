import React from 'react'
import {NavLink} from 'react-router-dom'


function Navbar({gameform, setGameForm, genreform,setGenreForm}) {
  return (
    <div id='navbar'>
      
        <NavLink className="button"
            exact 
            to="/"
          ><button onClick={() => {
            setGenreForm("true")
            setGameForm("true")}} >Home</button></NavLink>

        <NavLink className="button"
              exact
              to="/genres"
            ><button onClick={() => {
              setGenreForm("true")
              setGameForm("true")}} >Genres</button></NavLink>

        <NavLink className="button"
              exact
              to="/games"
            ><button onClick={() => {
              setGenreForm("true")
              setGameForm("true")}} >Games</button></NavLink>

          <NavLink className="button"
              exact
              to="/about"
            ><button onClick={() => {
              setGenreForm("true")
              setGameForm("true")}}>About</button></NavLink>
    </div>    
  )
}

export default Navbar