import React from "react";

// Slight aside; remember all component names MUST START WITH A CAPITAL LETTER
// Otherwise, React will treat it as some regular html tag
const CommentDetail = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.imageAvatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date"> {props.timeStamp} </span>
        </div>
        <div className="text"> {props.commentText} </div>
      </div>
    </div>
  );
};

export default CommentDetail;
