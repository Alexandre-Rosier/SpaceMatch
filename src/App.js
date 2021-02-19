import './App.css';
import NoMatch from './components/NoMatch';
import Game from './screens/Game'
import Accueil from './components/Accueil';
import Match from './components/Match';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact component={Accueil}/>
      <Route path="/game" exact component={Game}/>
      <Route path="/match" exact component={Match}/>
      <Route path="/nomatch" exact component={NoMatch}/>
        {/* <Accueil /> */}
        {/* <Game />
        <Match />
        <NoMatch /> */}
      </Router>
    </div>
  );
}

export default App;