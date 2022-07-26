import "./App.css";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return <div className="App">
  <Search />
  <Home />
  <div className="credit">
    <h3>Made By ❤️<span><a href="https://github.com/therogersak" target="_blank">Rogers@k</a></span></h3>
  </div>
  </div>;
}

export default App;
