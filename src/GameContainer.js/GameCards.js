import React from 'react'
import { Link } from 'react-router-dom';

function GameCards({game}) {
  return (
    <div>
      <ol>{game.name}</ol>
      <Link to={`/games/${game.id}`}><button>Details</button></Link>
    </div>
  )
}

export default GameCards