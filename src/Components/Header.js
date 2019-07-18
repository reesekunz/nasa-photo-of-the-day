// Step 1 - Create component folder and files 
// Steps for creating folder/file in terminal: cd src => mkdir Components => cd Components => touch Header.js 

import React from "react";

function Explanation(props) {
    return (
            // for props.data.explanation (props from parameter defined in above Header function, data from useState state variable, explanation is the content you want to grab/display from the api (https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY)
            <div className="Explanation">
            <p>{props.data.explanation}</p>
      </div>
    );
  }
  
  export default Explanation;