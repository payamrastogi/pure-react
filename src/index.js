import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
//function are stateless

function Room() {
  return <div className="room">the room is lit</div>;
}
*/

class Room extends React.Component {
  //state is initialized
  state = {
    isLit: true,
    temperature: 22
  };

  //member function
  flipLight = () => {
    //setState function does 2 things
    // - first it changes the state
    // - then it re-renders the component
    this.setState({ isLit: !this.state.isLit });
  };

  turnOnLight = () => {
    this.setState({ isLit: true });
  };

  turnOffLight = () => {
    this.setState({ isLit: false });
  };

  increaseTemperature = () => {
    this.setState({ temperature: this.state.temperature + 1 });
  };

  decreaseTemperature = () => {
    this.setState({ temperature: this.state.temperature - 1 });
  };

  render() {
    const brightness = this.state.isLit ? "lit" : "dark";
    return (
      //the backticks signify a template strings in ES6
      <div className={`room ${brightness}`}>
        the room is {this.state.isLit ? "lit" : "dark"}
        <br />
        <button onClick={this.flipLight}>Flip</button>
        <button onClick={this.turnOnLight}>ON</button>
        <button onClick={this.turnOffLight}>OFF</button>
        <br />
        <br />
        the room temperature is {this.state.temperature} celcius
        <br />
        <button onClick={this.increaseTemperature}>+</button>
        <button onClick={this.decreaseTemperature}>-</button>
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById("root"));
