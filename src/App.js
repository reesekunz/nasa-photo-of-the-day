// Add , { useState } to existing React import
import React, { useState, useEffect } from "react";
// Import component files created from step 2
import DateComponent from "./Components/DateComponent";
import PhotoComponent from "./Components/PhotoComponent";

import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("loading...");
  const apiData = () => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(resolved => {
        // Handles success
        console.log("success", resolved.data);
        setData(resolved.data);
      })

      .catch(error => {
        // Handles failure
        console.log("error", error);
      });
  };
  // Not synced with any data, so this effect only fires once (make sure you do this otherwise you start 
  // an infinite loop and exceed API demo requests) 
  useEffect(apiData, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p>
      <DateComponent data={data}/>
      <PhotoComponent data={data}/>
    </div>
  );
}

export default App;

