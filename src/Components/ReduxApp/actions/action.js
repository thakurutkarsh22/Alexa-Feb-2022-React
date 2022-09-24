import CONSTANTS from "./actionTypes/actionTypes";

const TOGGLE = (payload) => {
    return {
        type: CONSTANTS.TOGGLE,
        payload: payload
    }
}

export default TOGGLE;