import React from 'react'
import { useParams } from 'react-router-dom'

function GenreDetails({games}) {

  const parId = useParams()

  const genre = games.filter((game) => game.genre_id === parseInt(parId.id), [games])

  const genreName = genre.map((game) => game.genre)

  const g = [...new Map(genreName.map((genre) => [genre.id, genre])).values()];

  const name_2 = g.map((e) =>{
    return (
      <h2 key={e.id}>{e.name}</h2>
    )
    })

  const games_2 = genre.map((game) => {
    return (
      <li key={game.id}>{game.name}</li>
    )
  })

  return (
    <div id='display' >
        {name_2}
        {games_2}
    </div>
  )
}

export default GenreDetails