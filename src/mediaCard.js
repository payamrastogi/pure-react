import React from "react";
import ReactDOM from "react-dom";

function MediaCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.imageUrl} />
    </div>
  );
}

ReactDOM.render(
  <MediaCard
    title="media card"
    body={<b>Test Body</b>}
    imageUrl="http://www.google.com"
  />,
  document.querySelector("#root")
);


export default MediaCard;