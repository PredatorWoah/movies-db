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
import Share from "./Components/Share/Share";

function App() {
  return <div className="App">
  <Header />
  <Home />
  <Share />
  </div>;
}

export default App;
