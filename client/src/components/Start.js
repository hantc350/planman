import React, { Component } from "react";
import ReactDOM from "react-dom";
import TreeBuilder from "./TreeBuilder";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBuilding: false
    };
  }

  componentDidMount() {
    ReactDOM.render(
      <button onClick={this.goToBuild}>Start building</button>,
      document.getElementById("start")
    );
  }

  componentDidUpdate() {
    console.log("updating start with isBuilding: ", this.state.isBuilding);
    if (this.state.isBuilding) {
      ReactDOM.render(<TreeBuilder />, document.getElementById("start"));
    } else {
      ReactDOM.render(
        <button onClick={this.goToBuild}>Start building</button>,
        document.getElementById("start")
      );
    }
    return true;
  }

  goToBuild = () => {
    console.log("isBuilding: ", this.state.isBuilding);
    this.setState({
      isBuilding: true
    });
  };

  render() {
    return <div id="start"></div>;
  }
}

export default Start;
