import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY TIME we do direct assignment to this.state (ALWAYS CALL SETSTATE)
  //   this.state = { lat: null, errorMessage: "" };
  // }

  // below achieves the same as doing the whole constructor and stuff above
  // (babel compiles below into similar code as above)
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      // WE DID NOT DO THE FOLLOWING:
      // this.state.lat = position.coords.latitude
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - it re-rendered!");
  }

  // moving logic from render function to helper func
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <SeasonDisplay err={this.state.errorMessage} />;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }

  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
