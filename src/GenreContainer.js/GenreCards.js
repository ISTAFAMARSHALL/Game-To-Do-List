import React from 'react'

function GenreCards({genre,handleGenreDetails}) {


  return (
    <div>
      <ol>{genre.name}</ol>
      <button onClick={() => handleGenreDetails(genre)}>Details</button>
    </div>
  )
}

export default GenreCards