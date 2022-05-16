import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import NewTest from "./Test"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Home text="Text using Class Props" />
        <Profile text="Text using Function Props" data={{'name':'Ankit'}}/>
        <NewTest />
      </header>
    </div>
  );
}

export default App;
