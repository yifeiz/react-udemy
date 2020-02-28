import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "30685105305-hfhhfhe0nabu7as9vuu69lq67pod9cn6.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div> Google Auth</div>;
  }
}
export default GoogleAuth;
