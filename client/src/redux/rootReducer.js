import { combineReducers } from "redux";
import questionReducer from "./question/questionReducer";
import answerReducer from "./answer/answerReducer";
import questionTreeReducer from "./questionTree/questionTreeReducer";

const rootReducer = combineReducers({
  question: questionReducer,
  answer: answerReducer,
  questionTree: questionTreeReducer
});

export default rootReducer;
