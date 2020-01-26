import { ADD_ANSWER } from "./answerTypes";
import { ADD_ANSWER_CHILD } from "./answerTypes";

export const addAnswer = () => {
  return {
    type: ADD_ANSWER
  };
};

export const addAnswerChild = () => {
  return {
    type: ADD_ANSWER_CHILD
  };
};
