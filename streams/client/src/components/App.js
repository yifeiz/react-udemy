import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/new" component={StreamCreate} />
          <Route path="/edit" component={StreamEdit} />
          <Route path="/delete" component={StreamDelete} />
          <Route path="/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
