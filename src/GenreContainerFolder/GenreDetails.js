import React from 'react'
import { useParams } from 'react-router-dom'

function GenreDetails({genres}) {

  const parId = useParams()

  const genre = genres.filter((genre) => genre.id === parseInt(parId.id))

  const Displaygenre = genre.map((g) =>{

    const displayGames = g.games.map((g) => {
      return (
        <li key={g.id}>{g.name}</li>
      )
    })

    return (
      <div key={g.id} id='display' >
      <h2>{g.name}</h2>
      {displayGames.length !== 0 ? displayGames : <>Your have not played any games in this genre</> }
      </div>
    )
    })

  return (
    <div id='display'>
      {Displaygenre}
    </div>
  )
}

export default GenreDetails