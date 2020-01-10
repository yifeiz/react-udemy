import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      {/* Don't need curly braces to show components (other objects/var do) */}
      <CommentDetail
        author="Adam"
        timeStamp="Today at 4:00AM"
        commentText="Hello!"
        imageAvatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Bob"
        timeStamp="Today at 2:00AM"
        commentText="World!"
        imageAvatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Carly"
        timeStamp="Today at 4:23PM"
        commentText="Wow!"
        imageAvatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
