
const DEFAULT_STATE = {
    error: false,
    loading: false,
    users: [],
}

function githubReducer(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case "ERROR": 
            return {...state, error: action.payload}
        case "LOADING_IN_PROGRESS": 
            return {...state, loading: true}
        case "LOADING_SUCCESS": 
            return {...state, loading: false}
        case "FETCH_USERS":
            return {...state, users: action.payload}
        case "CLEAR":
            return {users: []}
        default: 
            return state;
    }
}

export default githubReducer;