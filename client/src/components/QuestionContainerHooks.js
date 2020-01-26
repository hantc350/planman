import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion, deleteQuestion } from "../redux";

function QuestionContainerHooks() {
  const numOfQuestions = useSelector(state => state.question.numOfQuestions);
  const questions = useSelector(state => state.question.questions);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const mapQuestions = questions.map(function(question, i) {
    return <li key={i}>{question}</li>;
  })
  
  const inputHandler = (e) => {
    setContent(e.target.value)
  }

  return (
    <div>
      <h2> Number of Questions with Hooks- {numOfQuestions} </h2>
      <h4> Enter question </h4>
      <textArea rows="2" cols="30" onChange = {inputHandler} />
      <br />
      <button onClick={() => dispatch(addQuestion(content))}>Add question</button>
      <button onClick={() => dispatch(deleteQuestion())}>
        Delete question
      </button>
      <br />
      <button onClick={() => console.log("fetch question")}>
        Get Questions
      </button>
      <br />
      <div style={{ border: "1px solid black" }}>
        Fetched questions: {mapQuestions}
      </div>
    </div>
  );
}

export default QuestionContainerHooks;
