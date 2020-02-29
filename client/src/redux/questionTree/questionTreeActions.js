import { ADD_QUESTIONTREE } from "./questionTreeTypes";
import { DELETE_QUESTIONTREE } from "./questionTreeTypes";

export const addQuestionTree = () => {
  return {
    type: ADD_QUESTIONTREE
  };
};

export const deleteQuestionTree = () => {
  return {
    type: DELETE_QUESTIONTREE
  };
};

/*
export const postQuestionTree = () => {
  fetch("")
.then(res => res.json())
.then(questions =>
  dispatch({
    type: GET_QUESTIONS,
    payload: questions
  })
);
};

*/