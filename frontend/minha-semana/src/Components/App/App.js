import React from 'react';
import './App.css';
import WeatherTable from "../WeatherTable/WeatherTable";
import WeatherGraphic from "../WeatherGraphic/WeatherGraphic"

function App() {
  return (
    <div className="App">
      <WeatherTable/>
      <WeatherGraphic/>
    </div>
  );
}

export default App;
