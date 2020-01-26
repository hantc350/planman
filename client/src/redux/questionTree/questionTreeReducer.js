import { ADD_QUESTIONTREE } from "./questionTreeTypes";
import { DELETE_QUESTIONTREE } from "./questionTreeTypes";

const initialState = {
  title:"Default Title",
  initQuestion:"",
  children: [],
  numOfQuestionTrees: 0,
  questionTrees: [],
  questionTree: {}
};

const questionTreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTIONTREE:
      return {
        ...state,
        numOfQuestionTrees: state.numOfQuestionTrees + 1
      };
    case DELETE_QUESTIONTREE:
      return {
        ...state,
        numOfQuestionTrees: state.numOfQuestionTrees - 1
      };
    default:
      return state;
  }
};

export default questionTreeReducer;
