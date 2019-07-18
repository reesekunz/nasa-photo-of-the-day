// Step 1 - Create component folder and files
// Steps for creating folder/file in terminal: cd src => mkdir Components => cd Components => touch Card.js

import React from "react";

function Card(props) {
  // console log card props using props.data.url
  // (props from parameter defined in above Card function, data from useState state variable, url what you want to grab from api - in this case NASA api shows url":"https://apod.nasa.gov/apod/image/1907/moon_eclipse_span1066.jpg"} so we use it to grab the photo of the day)
  console.log("Card props", props.data.url);
  return (
    // for props.data.title (props from parameter defined in above Card function, data from useState state variable, title is the content you want to grab/display from the api (https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY)
    // for props.data.date (props from parameter defined in above Card function, data from useState state variable, date is the content you want to grab/display from the api (https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY)
    <div className="Card">
      <h3>{props.data.title}</h3>
      <p>Date: {props.data.date}</p>

      {props.data.url ? (
        <img src={`${props.data.url}`} alt="need this alt to fix errors" />
      ) : (
        <p>Loading image of the day....</p>
      )}
    </div>
  );
}

export default Card;
