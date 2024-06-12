import React from "react";
import './styles/App.css';
import NavBar from "./components/NavBar/NavBar";
import Slider from "./components/Slider/Slider";

class App extends React.Component {
  render() {
    return (
      <><NavBar /><Slider /></>
    );
  }
}

export default App;
