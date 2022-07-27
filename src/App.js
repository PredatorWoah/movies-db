import "./App.css";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return <div className="App">
  <Header />
  <Home />
  </div>;
}

export default App;
