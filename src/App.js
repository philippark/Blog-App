import NavBar from './Navbar.js';
import Home from './Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className = "content">
          <Switch>
            <Route path = "/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
