import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import SubHead from "./components/SubHead/SubHead";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header/>
      <SubHead/>
      <Carousel/>
    </div>
  );
}

export default App;
