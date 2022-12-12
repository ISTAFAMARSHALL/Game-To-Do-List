import GenreCards from "./GenreCards"
import GenreForm from "./GenreForm"


function GenreContainer({genres, setGenres, genreform, setGenreForm}) {

  const genrecards = genres.map((genre) => {
    return (
      <div key={genre.name}>
        <GenreCards genre={genre}/>
      </div>
    )
  }) 

  function handleAddGenre(newGenre){
    setGenres([ newGenre, ...genres ])
  }

  return (
    <div>
        <h2>Genres
            <span id='add' onClick={() => setGenreForm((genreform) => !genreform)}>Add➕</span>
        </h2>
            {genreform ? (
              <div> {genrecards}</div>
              ): (
              <GenreForm handleAddGenre={handleAddGenre} genreform={genreform} setGenreForm={setGenreForm}/>
            )}
    </div>
  )
}

export default GenreContainer