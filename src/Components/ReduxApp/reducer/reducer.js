import CONSTANTS from "../actions/actionTypes/actionTypes";

export const DEFAULT_STATE = {
    value: true
}

// pure function 
// dont do async operations... 
//  dont do any side effects ....
function toggleReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case CONSTANTS.TOGGLE:
        return { value: !state.value }
      default:
        return state
    }
  }

  export default toggleReducer;