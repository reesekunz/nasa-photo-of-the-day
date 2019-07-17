// Add , { useState } to existing React import 
import React, { useState, useEffect } from "react";
// Import component files created from step 2 
import DateComponent from "./Components/DateComponent";
import PhotoComponent from "./Components/PhotoComponent";

import "./App.css";
import axios from 'axios';


function App () {
const [data, setData] = useState({});
const apiData = () => {

axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
.then(resolved => {
  // Handles success 
  console.log('success', resolved.data)
  setData(resolved.data);

}
  
  
  
  )

  .catch(error => {
    // Handles failure 
    console.log('error', error);
  }
    
    
    )




}

useEffect(apiData, [ ]);


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <DateComponent />
      <PhotoComponent />
    </div>
  );
}

export default App;
