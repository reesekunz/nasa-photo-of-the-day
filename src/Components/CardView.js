// Step 1 - Create component folder and files
// Steps for creating folder/file in terminal: cd src => mkdir Components => cd Components => touch CardView.js

// Step 2 - Imports

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
  const [data, setData] = useState("");

  // Add useEffect() - called on mount (when function is first called), takes 2 arguments - callback function and array
  useEffect(() => {
    // axios needs to be inside useEffect to avoid infinite loop
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      // Here you set SetData function to update value of state variable with the api data when api request is successful
      .then(resolved => setData(resolved.data))

      // Handles failure
      .catch(error => console.log("uh oh", error));
    // Add empty dependency array to avoid infinite API requests
  }, []);

  // Console log handles success to  make sure component mounted but do it outside of useEffect to avoid api rate limit
  console.log("component did mount", data);

  // Step 4 - return function using props to add other components (Header and Card)

  return (
    // Set props for each component (Header and Card) by applying them to state variable defined in UseState const [data]
    <div className="CardView">
      <Card data={data} />
      <Explanation data={data} />
    </div>
  );
}

export default CardView;
