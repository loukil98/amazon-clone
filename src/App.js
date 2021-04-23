import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import SubHead from "./components/SubHead/SubHead";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <SubHead/>
      <Home/>

    </div>
  );
}

export default App;
