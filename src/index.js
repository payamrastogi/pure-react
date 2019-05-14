import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div>
      Hello! <strong>Payam</strong>
      {5 + 7}
    </div>
  );
}

function Func1(props) {
  return <div>Func1 {props.name}</div>;
}

const Func2 = function(props) {
  return <div>Func2 {props.name}</div>;
};

const Func3 = props => {
  return <div>Func3 {props.name}</div>;
};

const Func4 = props => <div>Func4 {props.name}</div>;

function MediaCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <img src={props.imageUrl} />
    </div>
  );
}

const Gate = props => <div>{props.isOpen ? "Open" : "Closed"}</div>;

//ReactDOM.render(<Func4 name="Payam"/>, document.querySelector("#root"));
//ReactDOM.render(<MediaCard title="media card" body={<b>Test Body</b>} imageUrl="http://www.google.com"/>, document.querySelector("#root"));
ReactDOM.render(<Gate isOpen={false} />, document.querySelector("#root"));
