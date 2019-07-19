// Step 1 - Create component folder and files after laying out/designing file structure
// Steps for creating folder/file in terminal: cd src => mkdir Components => cd Components => touch CardView.js
// FILE STRUCTURE: App contains CardView. CardView contains Card and Explanation (added below with imports). Card contains title, date, image (from api). Explanation contains explanation (from api).

// Step 2 - Imports and Exports

// Import useState and useEffect by adding to existing React import
import React, { useState, useEffect } from "react";
// Import newly created component files (reference design layout/plan to see what and where you need to import components)

import Card from "./Card";
import Explanation from "./Explanation";
// Import axios (be sure to add in terminal)
import Axios from "axios";

// Step 3 - fetching the data with useState and useEffect inside function

function CardView() {
  // Add useState() - Define variable as data placeholder inside CardView function
  // useState returns an array 1st element [data] = state variable. 2nd element [setData] = function to update value of state variable
  // Need to give useState an empty string or any value so value isnt undefined (undefined would result in an error)
  const [data, setData] = useState("");

  // Add useEffect() - called on mount (when function is first called), takes 2 arguments - callback function and array
  useEffect(() => {
    // axios needs to be inside useEffect to avoid infinite loop
    // Signed up and got own API key (https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY is demo link)
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=isAVbPeQtem6kagSm6mn7lFUGnDWamTz6wce4ykO"
    )
      // Here you set SetData function to update value of state variable with the api data when api request is successful
      .then(resolved => setData(resolved.data))

      // Handles failure
      .catch(error => console.log("uh oh", error));
    // Add empty dependency array to avoid infinite API requests
  }, []);

  // Console log handles success to  make sure component mounted but do it outside of useEffect to avoid api rate limit
  console.log("component did mount", data);

  // Step 4 - add props/data content inside functions in created files containing components (Card.js, Explanation.js, App.js)

  // Step 5 - return CardView function below using props to add other components (Card and Explanation)

  return (
    // Set props for each component (Card and Explanation) by applying them to state variable defined in UseState const [data]
    // Look at file structure to look at which props to use and where. App contains CardView. CardView contains Card and Explanation (added below with <Card /> and <Explanation />). Card contains title, date, image (from api). Explanation contains explanation (from api).

    <div className="CardView">
      <Card data={data} />
      <Explanation data={data} />
    </div>
  );
}

export default CardView;
