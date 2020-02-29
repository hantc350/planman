import { ACTION_TYPE } from "./testTypes";

const initialState = {
    text: "hej värld"
}

const testReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPE:
            return{
                ...state,
                text: state.text + " bajs"
            }
            default:
                return state;
    }
}

export default testReducer;


