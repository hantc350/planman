import { ADD_ANSWER } from "./answerTypes";
import { ADD_ANSWER_CHILD } from "./answerTypes";

const initialState = {
  id:"",
  answer: "",
  followUpQuestion: "",
  children: [],
  numOfAnswers: 0
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return {
        ...state,
        numOfAnswers: state.numOfAnswers + 1
      };
    case ADD_ANSWER_CHILD:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default answerReducer;
