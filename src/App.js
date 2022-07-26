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
  </div>;
}

export default App;
