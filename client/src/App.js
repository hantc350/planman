import React, { Component } from "react";

// import Start from "./components/Start";
// import QuestionContainer from "./components/QuestionContainer";
// import QuestionContainerHooks from "./components/QuestionContainerHooks";
// import AnswerContainer from "./components/AnswerContainer";
import QuestionTreeContainer from "./components/QuestionTreeContainer";

import { Provider } from "react-redux";
import store from "./redux/store";
import AnswerContainer from "./components/AnswerContainer";


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
      <Provider store={store}>
        <div className="App">
          <p>{this.state.apiResponse}</p>
          <QuestionTreeContainer />
          {/* <AnswerContainer /> */}

        </div>
      </Provider>
    );
  }
}

export default App;
