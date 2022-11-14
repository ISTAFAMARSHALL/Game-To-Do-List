import React from 'react'

function GenreCards({genre,handleGenreDetails}) {


  return (
    
    <div id='display'>
      <ol onClick={() => handleGenreDetails(genre)}>{genre.name}</ol>
    </div>
  )
}

export default GenreCards