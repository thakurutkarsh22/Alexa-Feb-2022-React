import { applyMiddleware, createStore } from "redux"
import githubReducer from "./reducers/githubReducer"
import thunk from "redux-thunk";


const configureStore = () => {
    return createStore(githubReducer, applyMiddleware(thunk));
}

export default configureStore;