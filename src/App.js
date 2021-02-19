import './App.css';
import NoMatch from './components/NoMatch';
import Game from './screens/Game'
import Accueil from './components/Accueil';
import Match from './components/Match';

function App() {
  return (
    <div className="App">
      <Accueil />
      <Game />
      <Match />
      <NoMatch />
    </div>
  );
}

export default App;
