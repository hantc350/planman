import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuestionTree, deleteQuestionTree, addAnswerChild } from "../redux";
import { testAction } from "../redux";
import { submitQuestionTree } from "../redux";

import QuestionContainer from "./QuestionContainerHooks";
import AnswerContainer from "./AnswerContainer";
import { render } from "jade";
import { ACTION_TYPE } from "../redux/test/testTypes";

function QuestionTreeContainer() {
  const [title, setTitle] = useState("");
  const [initQuestion, setInitQuestion] = useState("");
  const [children, setChildren] = useState([]);

  const [question, setQuestion] = useState("");
  // handleChange = e => (
  //   setTitle(e.target.value);
  //   console.log("title is: ", title);
  // )

  const numOfQuestionTrees = useSelector(
    state => state.questionTree.numOfQuestionTrees
  );

  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  //var element = document.createElement(tagName[, options]);
  function addAnswerChild() {
    setChildren([...children, <AnswerContainer />])
    setInitQuestion([...initQuestion, question])
  }


  function outputTree() {
    console.log("title: " + title)
    console.log("initQuestion: " + initQuestion)
    console.log(children)
  }

  function submitTree(event){
    event.preventDefault();   

    fetch('http://localhost:9000/questiontree', {method: "post", body: JSON.stringify("testing post req...")}).then(response => {response.json(); console.log(response)});

    // // create a new XMLHttpRequest
    // var xhr = new XMLHttpRequest()

    // // get a callback when the server responds
    // xhr.addEventListener('load', () => {
    //   // update the state of the component with the result here
    //   console.log(xhr.responseText)
    // })
    // // open the request with the verb and the url
    // xhr.open('POST', 'http://localhost:9000/questiontree')
    // // send the request

    // xhr.send(JSON.stringify(data));

  };
 
  /*
  const testAction = () => {
    const action = {
      type: ACTION_TYPE,
      payload: "1337"
    };
    dispatch(action)
  }
  */

  return (
    <div>
    <form id="treeForm" onSubmit={(e) => dispatch(submitTree(e))}>
      <label>Title</label>
      <input type="text" name="title" onChange={(e) => setTitle(e.target.value)}></input>
      <label>Question</label>
      <input type="text" name="question" onChange={(e) => setQuestion(e.target.value)}></input>
      <button type="button" onClick={() => addAnswerChild()}>
        Add Answer
      </button>
      {
        children.map((node, id) => {
          return (
            <div key={id}>
              {node}
            </div>
          )
        })
      }

      <button type="button" onClick={() => outputTree()}>Log tree</button>
      {/* <div id="answerChildren">
        {children}
      </div> */}
      <button type="submit">Submit tree!</button>
      {/* <div style={{ border: "1px solid black" }}>
      <h2> Number of QuestionTrees - {numOfQuestionTrees} </h2>
      <h4>Enter title</h4>
      <textArea onChange={handleChange} />
      <br />
      <h2> {title} </h2>

      <QuestionContainer />
      <br />
      <div id="answerChildren">
        {children}
      </div>
      <button onClick={() => addAnswerChild()}>
        Add Answer
      </button>
      <button onClick={() => dispatch(addQuestionTree())}>
        Submit tree!
      </button>
      <button onClick={() => dispatch(deleteQuestionTree())}>
        Delete tree!
      </button>
    </div> */}
    </form >
<br/>
  <button onClick={() => runTestAction}>Test Action</button>
  </div>
  );

const runTestAction = () =>{
  const returnedVal = dispatch(testAction());
  setTitle(returnedVal.test.text)
}

}

export default QuestionTreeContainer;