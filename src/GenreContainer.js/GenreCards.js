import React from 'react'
import { useHistory } from 'react-router-dom'


function GenreCards({genre,handleGenreDetails}) {

  const history = useHistory()

  return (
    <div id='display'>
      <ol onClick={() => {
        history.push(`/genres/${genre.id}`)
        }}>{genre.name}</ol>
    </div>
  )
}

export default GenreCards