import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
const Share = lazy(() => import("./Components/Share/Share"));
const Home = lazy(() => import("./Components/Home/Home"));

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
