import GameCards from './GameCards'
import GameForm from './GameForm'

function GameContainer({games, genres, setGenres, setGames, gameform, setGameForm}) {

  const gamecards = games.map((game) => {
    return (
      <div key={game.id}>
        <GameCards game={game} />
      </div>
    )
  })

  function handleAddGame(newGame){ 
    setGames([ newGame, ...games ])
  }

  return (
    <div>
        <h2>Games
            <span id='add' onClick={() => setGameForm((gameform) => !gameform)}>Add➕</span>
        </h2>
            {gameform ? (
              <div> {gamecards}</div>
              ):(
              <GameForm handleAddGame={handleAddGame} genres={genres} setGenres={setGenres} setGameForm={setGameForm} gameform={gameform}/>
            )}
    </div>
    
  )
}

export default GameContainer