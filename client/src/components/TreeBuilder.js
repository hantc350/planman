import React, { Component } from "react";

class TreeBuilder extends Component {
  render() {
    return (
      <div>
        <img
          src={require("./../static/cp.jpg")}
          alt="cp"
          width="328"
          height="328"
        />
        <p>Tjenare, mitt namn är Christopher, nu skall vi bygga!</p>
      </div>
    );
  }
}

export default TreeBuilder;
