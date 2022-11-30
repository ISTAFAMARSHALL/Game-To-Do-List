import React from 'react'
import { useParams } from 'react-router-dom'

function GenreDetails({genres,games}) {

  const parId = useParams()

  const genre = genres.filter((genre) => genre.id === parseInt(parId.id))

  const genreName = genre.map((g) =>{
    return (
      <div key={g.id} id='display' >
      <h2>{g.name}</h2>
      </div>
    )
    })

    const filterGames = games.filter((game) => game.genre_id === parseInt(parId.id)) 

    const displayGames = filterGames.map((g) => {
      return (
        <li key={g.id}>{g.name}</li>
      )
    })

  return (
    <div id='display'>
      <h2>{genreName}</h2>
          {displayGames.length !== 0 ? displayGames : <>Your have not played any games in this genre</> }
    </div>
  )
}

export default GenreDetails