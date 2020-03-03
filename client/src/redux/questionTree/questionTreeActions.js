import { ADD_QUESTIONTREE } from "./questionTreeTypes";
import { DELETE_QUESTIONTREE } from "./questionTreeTypes";
import { SUBMIT_QUESTIONTREE } from "./questionTreeTypes";

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


export const submitQuestionTree = () => {
  return {
    type: SUBMIT_QUESTIONTREE
  }
};