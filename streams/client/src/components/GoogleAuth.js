import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "30685105305-hfhhfhe0nabu7as9vuu69lq67pod9cn6.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Are we signed in?</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed in! </div>;
    } else {
      return <div>Not Signed in :( </div>;
    }
  }

  render() {
    return <div> Google Auth</div>;
  }
}
export default GoogleAuth;
