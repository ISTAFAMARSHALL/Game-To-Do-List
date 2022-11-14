import { useState } from 'react';

const GenreForm = ({HandleAddGenre}) => {

    const [genreName, setGenreName] = useState("");

    const newGenreInfo ={
        name: genreName,
    }

    function handleAddNewGenre(e) {
        e.preventDefault();
        console.log(genreName)
    
        fetch("http://localhost:9290/genres", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGenreInfo)
        })
          .then((r) => r.json())
          .then((newGenre) => HandleAddGenre(newGenre));
          // setgameName("")
          // setgameScore("")
          // setgameCompletionPercentage("")
          // setgamePlatinum("")
          // setgameComment("")
      }

  return (
    <form onSubmit={handleAddNewGenre}>
    <input 
      type="text" 
      name="gameInfo"
      value={genreName}
      required placeholder='Enter Genre Name Here'
      onChange={(e) => setGenreName(e.target.value)}
    />
    {/* <input 
      type="text" 
      name="gameInfo" 
      value={genreId}
      onChange={(e) => setGenreId(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={gameScore}
      onChange={(e) => setgameScore(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={gameCompletionPercentage}
      onChange={(e) => setgameCompletionPercentage(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={gamePlatinum}
      onChange={(e) => setgamePlatinum(e.target.value)}
    />
    <input 
      type="text" 
      name="gameInfo" 
      value={gameComment}
      onChange={(e) => setgameComment(e.target.value)}
    /> */}
    <input type="submit" value="Save" />
  </form>
  )
}

export default GenreForm