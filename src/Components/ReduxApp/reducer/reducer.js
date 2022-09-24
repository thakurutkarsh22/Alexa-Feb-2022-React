import CONSTANTS from "../actions/actionTypes/actionTypes";

export const DEFAULT_STATE = {
    value: true
}


function toggleReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case CONSTANTS.TOGGLE:
        return { value: !state.value }
      default:
        return state
    }
  }

  export default toggleReducer;