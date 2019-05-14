import React from "react";
import ReactDOM from "react-dom";

const Gate = props => <div>{props.isOpen ? "Open" : "Close"}</div>;

export default Gate;
