import { useState } from 'react';

const GenreForm = ({HandleAddGenre, genreform, setGenreForm}) => {

    const [genreName, setGenreName] = useState("");

    const newGenreInfo ={
        name: genreName,
    }

    function handleAddNewGenre(e) {
        e.preventDefault();
    
      fetch("http://localhost:9292/genres", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
      },
          body: JSON.stringify(newGenreInfo)
      })
          .then((r) => r.json())
          .then((newGenre) => HandleAddGenre(newGenre));
          setGenreName("")
          setGenreForm(!genreform)
    }

  return (
    <form onSubmit={handleAddNewGenre}>
      <div id='display'>
        <label>Genre Name: </label>
        <input 
          type="text" 
          value={genreName}
          required placeholder='Enter Genre Name Here'
          onChange={(e) => setGenreName(e.target.value)}
      />
        <button type="submit" value="Save">Save</button>
      </div>

  </form>
  )
}

export default GenreForm