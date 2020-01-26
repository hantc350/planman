import { ADD_QUESTION, DELETE_QUESTION, GET_QUESTIONS } from "./questionTypes";

const initialState = {
  numOfQuestions: 0,
  questions: ["Saab", "Volvo", "BMW"],
  question: ""
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        numOfQuestions: state.numOfQuestions + 1,
        question: action.payload,
        questions: [state.questions, state.question]
      };
    case DELETE_QUESTION:
      return {
        ...state,
        numOfQuestions: state.numOfQuestions - 1
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload

      };
    default:
      return state;
  }
};

export default questionReducer;

