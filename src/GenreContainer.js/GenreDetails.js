import React from 'react'

function GenreDetails({genreDetail}) {

  const games = genreDetail.games.map((e) => { 
    return (
      <li key={e.name}>{e.name} </li>
    )

  })

  return (
    <div id='display' >
      <h2>{genreDetail.name}</h2>
      <p>{games}</p>
    </div>
  )
}

export default GenreDetails