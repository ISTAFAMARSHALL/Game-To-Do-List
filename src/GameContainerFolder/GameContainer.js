import GameCards from './GameCards'
import GameForm from './GameForm'

function GameContainer({games, genres, setGames, gameform, setGameForm}) {

  const gamecards = games.map((game) => {
    return (
      <div key={game.id}>
        <GameCards game={game} />
      </div>
    )
  })

  function HandleAddGame(newGame){ 
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
              <GameForm HandleAddGame={HandleAddGame} genres={genres} setGameForm={setGameForm} gameform={gameform}/>
            )}
    </div>
    
  )
}

export default GameContainer