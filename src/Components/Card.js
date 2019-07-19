// Step 1 - Create component folder and files after laying out/designing file structure
// Steps for creating folder/file in terminal: cd src => mkdir Components => cd Components => touch Card.js
// FILE STRUCTURE: App contains CardView. CardView contains Card and Explanation (added below with imports). Card contains title, date, image (from api). Explanation contains explanation (from api).

// Step 2 - Imports and Exports

import React from "react";

// Dont need to import anything else since its last file in structure process along with Explanation (data is taken from API instead of referencing another component/file)

// Step 4 - add props/data content inside functions in created files containing components (Card.js, Explanation.js, App.js)

function Card(props) {
  // console log card props using props.data.url
  // (props from parameter defined in above Card function, data from useState state variable, url what you want to grab from api - in this case NASA api shows url":"https://apod.nasa.gov/apod/image/1907/moon_eclipse_span1066.jpg"} so we use it to grab the photo of the day)
  console.log("Card props", props.data.url);
  return (
    // for props.data.title (props from parameter defined in above Card function, data from useState state variable, title is the content you want to grab/display from the api (https://api.nasa.gov/planetary/apod?api_key=isAVbPeQtem6kagSm6mn7lFUGnDWamTz6wce4ykO)
    // for props.data.date (props from parameter defined in above Card function, data from useState state variable, date is the content you want to grab/display from the api (https://api.nasa.gov/planetary/apod?api_key=isAVbPeQtem6kagSm6mn7lFUGnDWamTz6wce4ykO)
    // for props.data.url (props from parameter defined in Card function, data from useState state variable, url is the content you want to grab/display from the api (https://api.nasa.gov/planetary/apod?api_key=isAVbPeQtem6kagSm6mn7lFUGnDWamTz6wce4ykO)
    <div className="Card">
      <h2>{props.data.title}</h2>
      <p>Date: {props.data.date}</p>
    <img src={props.data.url} alt="alt" />
    </div>
  );
}

export default Card;
