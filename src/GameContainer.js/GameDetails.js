import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

function GameDetails({gameDetail}) {



  return (
    <div>Details
      <h2>{gameDetail.name}</h2>
      <p>{gameDetail.genre_id}</p>
      <p>{gameDetail.score}</p>
      <p>{gameDetail.completion_percentage}</p>
      <p>{gameDetail.platinum}</p>
      <p>{gameDetail.comment}</p>
    </div>
  )
}

export default GameDetails