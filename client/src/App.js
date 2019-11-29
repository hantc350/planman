import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testdb")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.apiResponse}</p>
        <img
          src={require("./static/cp.jpg")}
          alt="cp"
          width="328"
          height="328"
        />
        <p>Tjenare, mitt namn är Christopher, hue hue!</p>
      </div>
    );
  }
}

export default App;
