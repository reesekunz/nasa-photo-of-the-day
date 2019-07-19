// FILE STRUCTURE: App contains CardView. CardView contains Card and Explanation (added below with imports). Card contains title, date, image (from api). Explanation contains explanation (from api).

// Step 2 - Imports and Exports

import React from "react";
import "./App.css";
// import Style component 
import styled from "styled-components";

// App contains CardView (added below with import CardView). CardView contains Card and Explanation. Card contains title, date, image (from api). Explanation contains explanation (from api).

import CardView from "./Components/CardView";

// Step 5: creating functions for style component - created with '' instead of ()

export const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
  color: black;
  font-size: 1.5rem;
`;

export const NasaHeader = styled.h1`
  color: #7f7fff;
  font-size: 3rem;
  background-color: black;
`;



// Step 4 - add props/data content inside functions in created files containing components (Card.js, Explanation.js, App.js)

function App() {
  return (
    // App contains CardView (added below with <CardView />). CardView contains Card and Explanation. Card contains title, date, image (from api). Explanation contains explanation (from api).
    <WrapperDiv>
      <NasaHeader>NASA Photo of the Day</NasaHeader>
      <CardView />
    </WrapperDiv>
  );
}

export default App;
