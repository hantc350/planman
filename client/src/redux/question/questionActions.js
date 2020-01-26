import { ADD_QUESTION, DELETE_QUESTION, GET_QUESTIONS } from "./questionTypes";

export const addQuestion = question => {
  return {
    //we want to use thunk and dispatch for async
    type: ADD_QUESTION,
    payload: question
  };
};

export const deleteQuestion = () => {
  return {
    type: DELETE_QUESTION
  };
};

export const getQuestions = () => {
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then(res => res.json())
  //   .then(questions =>
  //     dispatch({
  //       type: GET_QUESTIONS,
  //       payload: questions
  //     })
  //   );

   return {
     type: GET_QUESTIONS
   };
};
