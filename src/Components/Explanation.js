// Step 1 - Create component folder and files after laying out/designing file structure
// Steps for creating folder/file in terminal: cd src => mkdir Components => cd Components => touch Header.js
// FILE STRUCTURE: App contains CardView. CardView contains Card and Explanation (added below with imports). Card contains title, date, image (from api). Explanation contains explanation (from api).

// Step 2 - Imports and Exports

import React from "react";

// import Style component
import styled from "styled-components";

// Dont need to import anything else since its last file in structure process along with Card (data is taken from API instead of referencing another component/file)

// Step 5: creating function for style component - created with '' instead of ()
const ExplanationDiv = styled.div`
  font-size: 1rem;
  display: inline-block;
  width: 80%;
  padding-top: 2%;
  padding-bottom: 4%;
`;

// Step 4 - add props/data content inside functions in created files containing components (Card.js, Explanation.js, App.js)

function Explanation(props) {
  return (
    // Returning Explanation Div function created above
    // for props.data.explanation (props from parameter defined in above Explanation function, data from useState state variable, explanation is the content you want to grab/display from the api (https://api.nasa.gov/planetary/apod?api_key=isAVbPeQtem6kagSm6mn7lFUGnDWamTz6wce4ykO)
    <ExplanationDiv>
      <p>{props.data.explanation}</p>
    </ExplanationDiv>
  );
}

export default Explanation;
