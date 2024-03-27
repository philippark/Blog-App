import NavBar from './Navbar.js';
import Home from './Home.js'
import Create from "./Create.js"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className = "content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
