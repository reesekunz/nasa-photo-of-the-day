// Step 2 - Imports and Exports

import React from "react";
import "./App.css";
import { WrapperDiv, BlueH1 } from "./Components/StyledComponents"


// App contains CardView (added below with import CardView). CardView contains Card and Explanation. Card contains title, date, image (from api). Explanation contains explanation (from api).

import CardView from "./Components/CardView";

// Step 4 - add props/data content inside functions in created files containing components (Card.js, Explanation.js, App.js)

function App() {
  return (
    // App contains CardView (added below with <CardView />). CardView contains Card and Explanation. Card contains title, date, image (from api). Explanation contains explanation (from api).
    <WrapperDiv>
      <BlueH1>Nasa Photo of the Day</BlueH1>
      <CardView />
      </WrapperDiv>  );
}

export default App;
