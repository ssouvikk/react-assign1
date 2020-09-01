import React from "react";
import "./App.css";
import Headers from "./Components/Headers/Headers";
import Workplace from "./Components/Workplace/Workplace";
import Services from "./Components/Services/Services";
import BigImg from "./Components/BigImg/BigImg";

function App() {
  return (
    <div>
      <Headers />
      <div className="content">
        <Workplace />
        <BigImg />
        <Services />
      </div>
    </div>
  );
}

export default App;
