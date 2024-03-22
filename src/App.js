import NavBar from './Navbar.js';
import Home from './Home.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className = "content">
        <Home />
      </div>
    </div>
  );
}

export default App;
