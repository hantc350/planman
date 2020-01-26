import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "../redux";
import { get } from "http";

const AnswerContainer = () => {
  const numOfAnswers = useSelector(state => state.answer.numOfAnswers);
  const questions = useSelector(state => state.question.questions);
  const dispatch = useDispatch();

  const [children, setChildren] = useState([]);
  const [answer, setAnswer] = useState("");
  const [followUpQuestion, setFollowUpQuestion] = useState("");
  const [viewAddAnswerButton, setViewAddAnswerButton] = useState(false);


  const addAnswerChild = () => {
    setChildren([...children, <AnswerContainer />])
  }

  function deleteAnswerChild() {

  }

  const updateFollowUp = (e) => {
    setViewAddAnswerButton(true);
    setFollowUpQuestion(e.target.value);
  }

  const updateAnswer = (e) => {
    setViewAddAnswerButton(true);
    setFollowUpQuestion(e.target.value);
  }

  return (
    <div>
      <label >Answer</label>
      <input type="text" onChange={(e) => setAnswer(e.target.value)} />
      <label >Follow Up Question</label>
      <input type="text" onChange={(e) => {
        setFollowUpQuestion(e.target.value)
        setViewAddAnswerButton(true);
      }} />
      {viewAddAnswerButton ? (
        <button type="button" onClick={addAnswerChild}>
          Add Answer
      </button>
      ) : (true)}
      <button type="button" onClick={deleteAnswerChild}>
        Delete Answer
      </button>
      {children.map((node, id) => {
        return (
          <div key={id}>
            {node}
          </div>
        )
      })}

      {/* <div>
      <h2> Number of answers with Hooks- {numOfAnswers} </h2>
      {questions}
      <button onClick={() => dispatch(addAnswer())}>
        Add answer with Hooks
      </button>
    </div> */}

    </div>
  );
}

export default AnswerContainer;
