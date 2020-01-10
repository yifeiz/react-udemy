import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment to this.state (ALWAYS CALL SETSTATE)
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });

        // WE DID NOT DO THE FOLLOWING:
        // this.state.lat = position.coords.latitude
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div> Latitude: {this.state.lat} </div>;
    } else {
      return <div> Loading! </div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
