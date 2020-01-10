import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      {/* Don't need curly braces to show components (other objects/var do) */}
      <ApprovalCard>
        <div>
          <h4> Warning! </h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Adam"
          timeStamp="Today at 4:00AM"
          commentText="Hello!"
          imageAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Bob"
          timeStamp="Today at 2:00AM"
          commentText="World!"
          imageAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Carly"
          timeStamp="Today at 4:23PM"
          commentText="Wow!"
          imageAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
