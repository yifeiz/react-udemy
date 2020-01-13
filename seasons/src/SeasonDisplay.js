import "./SeasonDisplay.css";
import React from "react";

// Config object so we can extract double ternary from below
const seasonConfig = {
  summer: {
    text: "Yo it's hot",
    iconName: "sun"
  },
  winter: {
    text: "It's hella cold",
    iconName: "snowflake"
  },
  error: {
    text: "Cannot detect location",
    iconName: "exclamation triangle"
  }
};

const getSeason = (lat, month, error) => {
  if (error) {
    return "error";
  }
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth(), props.err);
  const { text, iconName } = seasonConfig[season];

  // Suggested to have classname for root div to be same as component name (for styling)
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}> </i>
      <h1> {text} </h1>
      <i className={`icon-right massive ${iconName} icon`}> </i>
    </div>
  );
};

export default SeasonDisplay;
