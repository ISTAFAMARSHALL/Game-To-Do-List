import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Navigation.js/Header';
import Navbar from './Navigation.js/Navbar';
import Home from './Navigation.js/Home';
import Footer from './Navigation.js/Footer';
import GameDetails from './GameContainer.js/GameDetails';
import GameCards from './GameContainer.js/GameCards';
import GenreDetails from './GenreContainer.js/GenreDetails';
import GenreCards from './GenreContainer.js/GenreCards';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Navbar></Navbar>
        <Switch>
          <Route path="/games/:id">
            <GameDetails/>
          </Route>
          <Route path="/games">
            <GameCards/>
          </Route>
          <Route path="/genres/:id">
            <GenreDetails/>
          </Route>
          <Route path="/genres">
            <GenreCards/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
