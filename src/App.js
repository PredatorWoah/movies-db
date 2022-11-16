import React, { Suspense, lazy } from "react";
import "./App.css";
import ReactGA from "react-ga";
import Header from "./Components/Header/Header";
const Share = lazy(() => import("./Components/Share/Share"));
const Home = lazy(() => import("./Components/Home/Home"));
const TRACKING_ID = "4288168587"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Home />
        <Share />
      </Suspense>
    </div>
  );
}

export default App;
