import { combineReducers } from "redux";
import questionReducer from "./question/questionReducer";
import answerReducer from "./answer/answerReducer";
import questionTreeReducer from "./questionTree/questionTreeReducer";
import testReducer from "./test/testReducer";

const rootReducer = combineReducers({
  question: questionReducer,
  answer: answerReducer,
  questionTree: questionTreeReducer,
  test: testReducer,
});

export default rootReducer;
