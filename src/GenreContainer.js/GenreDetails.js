import React from 'react'

function GenreDetails({genreDetail}) {

  console.log(genreDetail.games)

  const games = genreDetail.games.map((e) => { 
    return (
      <li key={e.name}>{e.name} </li>
    )

  })

  return (
    <div>
      <h2>{genreDetail.name}</h2>
      <p>{games}</p>
    </div>
  )
}

export default GenreDetails