// Step 1 - Create component folder and files after laying out/designing file structure
// Steps for creating folder/file in terminal: cd src => mkdir Components => cd Components => touch Header.js

// Step 2 - Imports and Exports

import React from "react";

// import { ExplanationDiv} from "./Components/StyledComponents"




// Dont need to import anything else since its last file in structure process along with Card (data is taken from API instead of referencing another component/file)


// Step 4 - add props/data content inside functions in created files containing components (Card.js, Explanation.js, App.js)

function Explanation(props) {
  return (
    // for props.data.explanation (props from parameter defined in above Explanation function, data from useState state variable, explanation is the content you want to grab/display from the api (https://api.nasa.gov/planetary/apod?api_key=isAVbPeQtem6kagSm6mn7lFUGnDWamTz6wce4ykO)
    <div className="Explanation">
      <p>{props.data.explanation}</p>
    </div>
  );
}

export default Explanation;
