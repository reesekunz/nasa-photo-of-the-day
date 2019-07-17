// Add , { useState } to existing React import 
import React, { useState } from "react";
// Import component files created from step 2 
import DateComponent from "./Components/DateComponent";
import PhotoComponent from "./Components/PhotoComponent";

import "./App.css";

function App() {
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
